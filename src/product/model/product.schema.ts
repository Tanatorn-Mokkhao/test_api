import * as mongoose from "mongoose";
import { ProductStatus} from "./product.enum";

export const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: { type: Number, required: true },
    qty: {type:Number,required:true},
    status: { type: String, enum: Object.values(ProductStatus) },
    category: { type: mongoose.Schema.Types.ObjectId, ref:"Category"}
})