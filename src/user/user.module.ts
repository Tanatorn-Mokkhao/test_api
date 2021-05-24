import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";
import {UserLogic } from "./logic/user.logic";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers:[UserService,UserLogic]

})


export class UserModule {
    
}