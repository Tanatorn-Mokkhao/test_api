import { IsEmail, IsNotEmpty } from "class-validator";
import { UserStatus } from '../model/user.enum';


export class UserDto {
    
    @IsNotEmpty()
    readonly username: string
    
    @IsNotEmpty()
    @IsEmail()
    readonly email: string



    @IsNotEmpty()
    readonly password: string;

 
     status: UserStatus;
    

}



export class UserSigninDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string



    @IsNotEmpty()
    readonly password: string;
}
