import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UserService } from "../service/user.service";
import { UserSigninDto } from "../dto/user.dto";
import * as jwt from "jsonwebtoken";
import { UserLogic } from "../logic/user.logic";
@Controller('User')
export class UserController {
    constructor(private userService: UserService,private readonly userLogic:UserLogic) {
    }

    @Post('signup')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Res() res, @Body() payload: UserDto) {
        const user = await this.userService.signup(payload);
        return res.status(200).json({message:"signup successfully",data:user})
    }

    @Post('signin')
    @UsePipes(new ValidationPipe({ transform: true }))
    async signup(@Res() res, @Body() payload: UserSigninDto) {
        const user = await this.userService.signin(payload);
        if (user.password == payload.password) {

            const token = jwt.sign({ _id: user._id, role: user.status }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return res.status(200).json({ message:"login successfully..!" ,token:token});
        }
        else {
            return res.status(400).json({ error:"Incorrected password " });
        }
       
    }
    @Post('test')
    async testjwt(@Res() res, @Req() req) {
        console.log(req.headers.authorization);
    }
    @Post('logic')
    async workLogic(@Res() res, @Body() payload: UserSigninDto) {
        const user = await this.userLogic.signin(payload);
        return res.status(200).json({ data: user });
    }
}
