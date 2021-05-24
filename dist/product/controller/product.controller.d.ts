import { ProductDto } from "../dto/product.dto";
import { ProductService } from "../service/product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(res: any, payload: ProductDto): Promise<any>;
    getProduct(res: any): Promise<any>;
}
