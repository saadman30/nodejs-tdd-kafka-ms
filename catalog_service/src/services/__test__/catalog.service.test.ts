import { faker } from "@faker-js/faker/.";
import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { Product } from "../../models/product.model";
import { MockCatalogRepository } from "../../repositories/mockCatalog.repository";
import { CatalogService } from "../catalog.service";

const mockProduct = (rest: any) => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: +faker.commerce.price(),
    stock: faker.number.int({ min: 1, max: 100 }),
    ...rest,
  };
};

describe("Catalog Service", () => {
  let repository: ICatalogRepository;

  beforeEach(() => {
    repository = new MockCatalogRepository();
  });

  afterEach(() => {
    repository = {} as MockCatalogRepository;
  });

  describe("createProduct", () => {
    it("should create a product", async () => {
      const service = new CatalogService(repository);
    const reqBody = mockProduct({});
      const result = await service.createProduct(reqBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      });
    });

    it("should throw an error if the product is unable to create ", async () => {
      const service = new CatalogService(repository);
      const reqBody = mockProduct({});

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() => Promise.resolve({} as Product));
      await expect(service.createProduct(reqBody)).rejects.toThrow(
        "Unable to create product"
      );
    });

    it("should throw an error if the product is already exists ", async () => {
      const service = new CatalogService(repository);
      const reqBody = mockProduct({});

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() =>
          Promise.reject(new Error("Product already exists"))
        );
      await expect(service.createProduct(reqBody)).rejects.toThrow(
        "Product already exists"
      );
    });
  });

  describe("updateProduct", () => {
    it("should update a product", async () => {
      const service = new CatalogService(repository);
      const reqBody = mockProduct({
        id: faker.number.int({ min: 1, max: 100 }),
      });
      const result = await service.updateProduct(reqBody);
      expect(result).toMatchObject(reqBody);
    });
  });
});
