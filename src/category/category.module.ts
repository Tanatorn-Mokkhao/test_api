import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CategoryController } from "./controllers/category.controller";
import { CategoryService } from "./services/category.service";
import { CategoryLogic } from "./logics/category.logic";
@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers:[CategoryService,CategoryLogic]
})


export class CategoryModule {
    
}