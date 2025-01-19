import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogService {
    private _repository: ICatalogRepository;
    constructor(repository: ICatalogRepository) {
        this._repository = repository;
    }

    async createProduct(product: Product): Promise<Product> {
        return {
            id: 1,
            name: "ertert",
            description: "ertert",
            price: 10230,
            stock: 1023
        }
    }

    async updateProduct(id: number, product: Product): Promise<Product | null> {
        return this._repository.update(product);
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
