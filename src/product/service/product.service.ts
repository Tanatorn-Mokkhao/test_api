import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductInterface } from "../model/product.interface";
import { ProductDto } from "../dto/product.dto";
import { Model } from "mongoose";



@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductInterface>) {
        
    }

    async createProduct(payload: ProductDto): Promise<ProductInterface> {
        const product = new this.productModel(payload);
        return product.save();
    }
    async getProduct(): Promise<ProductInterface[] | undefined> {
        const product = await this.productModel.find({});
        return product;
    }
}