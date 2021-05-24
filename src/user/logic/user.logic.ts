// import { Injectable } from "@nestjs/common";
// import { UserService } from "../service/user.service";
// import { UserSigninDto } from "../dto/user.dto";
// import { UserInterface } from "../model/user.interface";

// @Injectable()
// export class UserLogic {
//     constructor( private readonly userService:UserService ) {
        
//     }
//     async login(payload: UserSigninDto): Promise<UserInterface> {
//         const user = await this.userService.signin(payload);
        
//         return user;
//     }


// }

import { Injectable } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { UserSigninDto } from "../dto/user.dto";
import { UserInterface } from "../model/user.interface";
@Injectable()
export class UserLogic {
    constructor(private readonly userService: UserService) { }
    

    async signin(payload: UserSigninDto):Promise<UserInterface>{
        const user = await this.userService.signin(payload);
        return user;
    }

}