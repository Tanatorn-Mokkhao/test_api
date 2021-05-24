import * as mongoose from "mongoose";
import { UserStatus } from "./user.enum";

export const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 3 },
    status: {type:String,enum:Object.values(UserStatus),required: true},
}, {timestamps:true})