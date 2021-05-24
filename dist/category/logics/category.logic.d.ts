import { CategoryService } from "../services/category.service";
import { CategoryInterface } from "../models/category.interface";
export declare class CategoryLogic {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategory(): Promise<CategoryInterface[]>;
    private createListCategory;
}
