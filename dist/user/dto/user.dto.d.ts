import { UserStatus } from '../model/user.enum';
export declare class UserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    status: UserStatus;
}
export declare class UserSigninDto {
    readonly email: string;
    readonly password: string;
}
