import { UserDto } from "../dto/user.dto";
import { UserService } from "../service/user.service";
import { UserSigninDto } from "../dto/user.dto";
import { UserLogic } from "../logic/user.logic";
export declare class UserController {
    private userService;
    private readonly userLogic;
    constructor(userService: UserService, userLogic: UserLogic);
    createUser(res: any, payload: UserDto): Promise<any>;
    signup(res: any, payload: UserSigninDto): Promise<any>;
    testjwt(res: any, req: any): Promise<void>;
    workLogic(res: any, payload: UserSigninDto): Promise<any>;
}
