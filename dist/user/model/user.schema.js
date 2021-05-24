"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
const user_enum_1 = require("./user.enum");
exports.userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 3 },
    status: { type: String, enum: Object.values(user_enum_1.UserStatus), required: true },
}, { timestamps: true });
//# sourceMappingURL=user.schema.js.map