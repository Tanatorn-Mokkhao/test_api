import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
export declare class MongooseOption implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions;
}
