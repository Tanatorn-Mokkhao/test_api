import { Injectable } from "@nestjs/common";
import { CategoryService } from "../services/category.service";
import { CategoryInterface } from "../models/category.interface";

@Injectable()
export class CategoryLogic {
    constructor(private readonly categoryService: CategoryService) { }
    
    async getCategory(): Promise<CategoryInterface[]> {
        const category = await this.categoryService.getCategory();
        const data =  this.createListCategory(category);
        return data;
    }
    private createListCategory(category:any,parentId=null) {
        const categoryList = [];
    let categories;
    if (parentId == null) {
        categories = category.filter(cat => cat.parentId == undefined);
    } else { 
        categories = category.filter(cat => cat.parentId == parentId);
    }
    for (let cate of categories) { 
        categoryList.push({
            _id: cate.id,
            name: cate.name,
            slug: cate.slug,
            parentId:cate.parentId,
            children:this.createListCategory(category,cate._id)
        });
    }

    return categoryList;
    }
}