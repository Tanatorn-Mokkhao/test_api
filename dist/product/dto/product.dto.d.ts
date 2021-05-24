import { ObjectId } from "mongoose";
import { ProductStatus } from "../model/product.enum";
export declare class ProductDto {
    readonly name: string;
    readonly price: number;
    readonly qty: number;
    readonly status: ProductStatus;
    readonly category: ObjectId;
}
export declare class SearchProductDto {
    name: string;
}
