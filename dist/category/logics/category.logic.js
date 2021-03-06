"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryLogic = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../services/category.service");
let CategoryLogic = class CategoryLogic {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategory() {
        const category = await this.categoryService.getCategory();
        const data = this.createListCategory(category);
        return data;
    }
    createListCategory(category, parentId = null) {
        const categoryList = [];
        let categories;
        if (parentId == null) {
            categories = category.filter(cat => cat.parentId == undefined);
        }
        else {
            categories = category.filter(cat => cat.parentId == parentId);
        }
        for (let cate of categories) {
            categoryList.push({
                _id: cate.id,
                name: cate.name,
                slug: cate.slug,
                parentId: cate.parentId,
                children: this.createListCategory(category, cate._id)
            });
        }
        return categoryList;
    }
};
CategoryLogic = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryLogic);
exports.CategoryLogic = CategoryLogic;
//# sourceMappingURL=category.logic.js.map