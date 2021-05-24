import { Body, Controller, Get, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductDto, SearchProductDto } from "../dto/product.dto";
import { ProductService } from "../service/product.service";



@Controller('Product')
export class ProductController {
    constructor(private readonly productService: ProductService) {
        
    }
    @Post('create')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createProduct(@Res() res, @Body() payload: ProductDto) {
        const product = await this.productService.createProduct(payload);
        return res.status(200).json({ data: product });
    }
    @Get('get')
    async getProduct(@Res() res) {
        const product = await this.productService.getProduct();
        return res.status(200).json({ data: product });
    }
    @Post('search')
    async searchProduct(@Res() res, @Body() payload: SearchProductDto) {
        const product = await this.productService.searchProduct(payload);
        return res.status(200).json({ data: product });
    }
}