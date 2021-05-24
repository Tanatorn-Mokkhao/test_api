import * as mongoose from "mongoose";
import { Injectable } from "@nestjs/common";

import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";


@Injectable()
export class MongooseOption implements MongooseOptionsFactory {
    
    createMongooseOptions(): MongooseModuleOptions {
        mongoose.set('debug', { color: false });
        mongoose.set('useFindAndModify', false);



        return {
            uri: 'mongodb+srv://admin:mart12299@cluster0.hifyh.mongodb.net/authenticate?retryWrites=true&w=majority',
            useNewUrlParser:true
        }
    }
}