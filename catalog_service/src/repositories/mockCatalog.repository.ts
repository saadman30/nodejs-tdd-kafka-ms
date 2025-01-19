import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class MockCatalogRepository implements ICatalogRepository {
    //constructor(private readonly prisma: PrismaClient) {}
    create(data: Product): Promise<Product> {
        const product = {
            ...data,
            id: 123
        } as Product;
        return Promise.resolve(product);
    }
    update(data: Product): Promise<Product | null> {
        return Promise.resolve(data);
    }
    delete(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }
}