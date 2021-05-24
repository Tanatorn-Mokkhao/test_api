import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto, UserSigninDto } from "../dto/user.dto";
import { UserInterface } from "src/user/model/user.interface";
import { UserStatus } from "../model/user.enum";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {
        

    }
    async signup(payload: UserDto): Promise<UserInterface> {
        payload.status = UserStatus.USER;
        const add = new this.userModel(payload);
        return add.save();
    }
    async signin(payload: UserSigninDto): Promise<UserInterface> {
        
        const user = await this.userModel.findOne({ email: payload.email });
        return user;
    }
    
}