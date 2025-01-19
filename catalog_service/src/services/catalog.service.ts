import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogService {
    private _repository: ICatalogRepository;
    constructor(repository: ICatalogRepository) {
        this._repository = repository;
    }

    async createProduct(input: any): Promise<Product> {
       const newProduct = await this._repository.create(input);
       if(!newProduct.id) {
        throw new Error("Unable to create product");
       }
       return newProduct;
    }

    async updateProduct(input: any): Promise<Product | null> {
        return this._repository.update(input);
    }

    async deleteProduct(id: number): Promise<Product> {
        return this._repository.delete(id);
    }

    async getProducts(): Promise<Product[]> {
        return this._repository.find();
    }

    async getProductById(id: number): Promise<Product | null> {
        return this._repository.findOne(id);
    }
}
