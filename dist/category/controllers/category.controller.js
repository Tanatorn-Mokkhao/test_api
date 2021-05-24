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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("../dto/category.dto");
const category_service_1 = require("../services/category.service");
const category_logic_1 = require("../logics/category.logic");
let CategoryController = class CategoryController {
    constructor(categorySetvice, categoryLogic) {
        this.categorySetvice = categorySetvice;
        this.categoryLogic = categoryLogic;
    }
    async createCategory(res, payload) {
        const category = await this.categorySetvice.createCategory(payload);
        return res.status(200).json({ message: "create successfully", data: category });
    }
    async getCategory(res) {
        const category = await this.categoryLogic.getCategory();
        return res.status(200).json({ data: category });
    }
};
__decorate([
    common_1.Post('create/category'),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, category_dto_1.CategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    common_1.Get('get/category'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
CategoryController = __decorate([
    common_1.Controller('Category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService, category_logic_1.CategoryLogic])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map