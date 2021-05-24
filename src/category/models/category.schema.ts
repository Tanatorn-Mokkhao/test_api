import * as mongoose from "mongoose";



export const categorySchema = new mongoose.Schema({

    name: { type: String, required: true },
    parentId: { type: String },

}, {timestamps:true});