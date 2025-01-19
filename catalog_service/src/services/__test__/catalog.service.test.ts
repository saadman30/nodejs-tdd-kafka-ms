import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { MockCatalogRepository } from "../../repositories/mockCatalog.repository";
import { CatalogService } from "../catalog.service";

describe("Catalog Service", () => {
   
    let repository: ICatalogRepository;

    beforeEach(() => {
        repository = new MockCatalogRepository();
    });

    describe("createProduct",  () => {
        it("should create a product", async () => {
            const service = new CatalogService(repository);
            const result = await service.createProduct({
                id: 0,
                name: "Test Product",
                description: "Test Description",
                price: 100,
                stock: 10
            });
            expect(result).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
                stock: expect.any(Number)
            });
        });
    });

    afterEach(() => {
        repository = {} as MockCatalogRepository;
    });
});
