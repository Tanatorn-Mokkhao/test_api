import { IsNotEmpty, IsNumber } from "class-validator";
import { ObjectId } from "mongoose";
import { ProductStatus } from "../model/product.enum";

export class ProductDto {
    @IsNotEmpty()
    readonly name: string
    

    @IsNotEmpty()
    @IsNumber()
    readonly price: number
    
    @IsNotEmpty()
    @IsNumber()
    readonly qty: number

    @IsNotEmpty()
    readonly status: ProductStatus

    @IsNotEmpty()
    readonly category:ObjectId

}