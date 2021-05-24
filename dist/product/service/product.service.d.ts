import { ProductInterface } from "../model/product.interface";
import { ProductDto } from "../dto/product.dto";
import { Model } from "mongoose";
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductInterface>);
    createProduct(payload: ProductDto): Promise<ProductInterface>;
    getProduct(): Promise<ProductInterface[] | undefined>;
}
