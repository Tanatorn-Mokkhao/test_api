"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const mongoose = require("mongoose");
exports.categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    parentId: { type: String },
}, { timestamps: true });
//# sourceMappingURL=category.schema.js.map