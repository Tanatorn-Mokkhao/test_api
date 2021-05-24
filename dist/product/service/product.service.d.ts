import { ProductInterface } from "../model/product.interface";
import { ProductDto, SearchProductDto } from "../dto/product.dto";
import { Model } from "mongoose";
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductInterface>);
    createProduct(payload: ProductDto): Promise<ProductInterface>;
    getProduct(): Promise<ProductInterface[] | undefined>;
    searchProduct(payload: SearchProductDto): Promise<ProductInterface[] | undefined>;
}
