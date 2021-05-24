"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("../service/user.service");
const user_dto_2 = require("../dto/user.dto");
const jwt = require("jsonwebtoken");
const user_logic_1 = require("../logic/user.logic");
let UserController = class UserController {
    constructor(userService, userLogic) {
        this.userService = userService;
        this.userLogic = userLogic;
    }
    async createUser(res, payload) {
        const user = await this.userService.signup(payload);
        return res.status(200).json({ message: "signup successfully", data: user });
    }
    async signup(res, payload) {
        const user = await this.userService.signin(payload);
        if (user.password == payload.password) {
            const token = jwt.sign({ _id: user._id, role: user.status }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return res.status(200).json({ message: "login successfully..!", token: token });
        }
        else {
            return res.status(400).json({ error: "Incorrected password " });
        }
    }
    async testjwt(res, req) {
        console.log(req.headers.authorization);
    }
    async workLogic(res, payload) {
        const user = await this.userLogic.signin(payload);
        if (user != 'invalid') {
            return res.status(200).json({ data: user });
        }
        else {
            return res.status(400).json({ error: "wrong password" });
        }
    }
};
__decorate([
    common_1.Post('signup'),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Post('signin'),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_2.UserSigninDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    common_1.Post('test'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "testjwt", null);
__decorate([
    common_1.Post('logic'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_2.UserSigninDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "workLogic", null);
UserController = __decorate([
    common_1.Controller('User'),
    __metadata("design:paramtypes", [user_service_1.UserService, user_logic_1.UserLogic])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map