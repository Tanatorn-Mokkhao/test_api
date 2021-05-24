import { Document, ObjectId } from "mongoose";
import { ProductStatus } from "./product.enum";
export interface ProductInterface extends Document {
    readonly name: string;
    readonly price: number;
    readonly qty: number;
    readonly status: ProductStatus;
    readonly category: ObjectId;
} 