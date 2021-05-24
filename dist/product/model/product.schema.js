"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose = require("mongoose");
const product_enum_1 = require("./product.enum");
exports.productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    status: { type: String, enum: Object.values(product_enum_1.ProductStatus) },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
});
//# sourceMappingURL=product.schema.js.map