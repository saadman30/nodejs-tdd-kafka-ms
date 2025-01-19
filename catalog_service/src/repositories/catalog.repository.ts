import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogRepository implements ICatalogRepository {
    //constructor(private readonly prisma: PrismaClient) {}
    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(data: Product): Promise<Product | null> {
        throw new Error("Method not implemented.");
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