import { Document, ObjectId } from "mongoose";


export interface CategoryInterface extends Document {
    readonly name: string;
    readonly parentId?: string;
}


export interface CategoryListInterface extends Document {
    readonly _id: ObjectId;
    readonly name: string;
    readonly parentId?: string;
    readonly children?: CategoryListInterface[];
}