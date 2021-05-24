import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { userSchema } from 'src/user/model/user.schema';
import { MongooseOption } from "./database.option";
import { categorySchema } from "../category/models/category.schema";
import {productSchema } from "../product/model/product.schema";
@Module({
    imports: [MongooseModule.forRootAsync({
        useClass:MongooseOption
    }), MongooseModule.forFeature([
        { name: 'User', schema: userSchema },
        { name: 'Category', schema: categorySchema },
        {name:'Product',schema:productSchema}
    ])],
    exports:[MongooseModule]
 })

export class DatabaseModule {
    
}