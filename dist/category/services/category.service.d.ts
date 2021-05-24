import { CategoryDto } from "../dto/category.dto";
import { CategoryInterface } from "../models/category.interface";
import { Model } from "mongoose";
export declare class CategoryService {
    private readonly categoryMoel;
    constructor(categoryMoel: Model<CategoryInterface>);
    createCategory(payload: CategoryDto): Promise<CategoryInterface>;
    getCategory(): Promise<CategoryInterface[] | undefined>;
}
