import { Injectable } from "@nestjs/common";
import { CategoryDto } from "../dto/category.dto";
import { CategoryInterface } from "../models/category.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category')private readonly categoryMoel:Model<CategoryInterface>) {
    }
    async createCategory(payload: CategoryDto): Promise<CategoryInterface> {
        const category = new this.categoryMoel(payload);
        return category.save();
    }
    async getCategory(): Promise<CategoryInterface[] | undefined > {
        const category = await this.categoryMoel.find({});
        return category;
    }
};