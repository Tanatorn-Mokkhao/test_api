import { UserService } from "../service/user.service";
import { UserSigninDto } from "../dto/user.dto";
import { UserInterface } from "../model/user.interface";
export declare class UserLogic {
    private readonly userService;
    constructor(userService: UserService);
    signin(payload: UserSigninDto): Promise<UserInterface>;
}
