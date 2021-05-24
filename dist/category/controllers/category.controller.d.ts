import { CategoryDto } from "../dto/category.dto";
import { CategoryService } from "../services/category.service";
import { CategoryLogic } from "../logics/category.logic";
export declare class CategoryController {
    private readonly categorySetvice;
    private readonly categoryLogic;
    constructor(categorySetvice: CategoryService, categoryLogic: CategoryLogic);
    createCategory(res: any, payload: CategoryDto): Promise<any>;
    getCategory(res: any): Promise<any>;
}
