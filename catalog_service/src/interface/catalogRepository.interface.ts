import { Product } from "../models/product.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product | null>;
    delete(id: number): Promise<Product>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product | null>;
}