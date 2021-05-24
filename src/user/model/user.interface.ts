import { Document } from "mongoose";
import { UserStatus } from './user.enum';

export interface UserInterface extends Document {
    
    username: string,
    email: string,
    password:string
    status:UserStatus
}