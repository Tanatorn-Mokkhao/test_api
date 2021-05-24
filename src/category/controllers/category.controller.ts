import {Body, Controller, Get, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { CategoryDto } from "../dto/category.dto";
import { CategoryService } from "../services/category.service";

import { CategoryLogic } from "../logics/category.logic";

@Controller('Category')
export class CategoryController {
    constructor(private readonly categorySetvice:CategoryService,private readonly categoryLogic:CategoryLogic) {
        
    }
    @Post('create/category')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createCategory(@Res() res, @Body() payload: CategoryDto) {
        const category = await this.categorySetvice.createCategory(payload);
        return res.status(200).json({message:"create successfully",data:category})
    }
    @Get('get/category')
    async getCategory(@Res() res) {
        const category = await this.categoryLogic.getCategory();
        return res.status(200).json({ data: category });
    }
}