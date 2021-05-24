import { Model } from "mongoose";
import { UserDto, UserSigninDto } from "../dto/user.dto";
import { UserInterface } from "src/user/model/user.interface";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserInterface>);
    signup(payload: UserDto): Promise<UserInterface>;
    signin(payload: UserSigninDto): Promise<UserInterface>;
}
