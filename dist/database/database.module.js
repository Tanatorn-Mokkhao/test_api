"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/model/user.schema");
const database_option_1 = require("./database.option");
const category_schema_1 = require("../category/models/category.schema");
const product_schema_1 = require("../product/model/product.schema");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRootAsync({
                useClass: database_option_1.MongooseOption
            }), mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.userSchema },
                { name: 'Category', schema: category_schema_1.categorySchema },
                { name: 'Product', schema: product_schema_1.productSchema }
            ])],
        exports: [mongoose_1.MongooseModule]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map