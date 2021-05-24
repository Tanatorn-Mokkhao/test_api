"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOption = void 0;
const mongoose = require("mongoose");
const common_1 = require("@nestjs/common");
let MongooseOption = class MongooseOption {
    createMongooseOptions() {
        mongoose.set('debug', { color: false });
        mongoose.set('useFindAndModify', false);
        return {
            uri: 'mongodb+srv://admin:mart12299@cluster0.hifyh.mongodb.net/authenticate?retryWrites=true&w=majority',
            useNewUrlParser: true
        };
    }
};
MongooseOption = __decorate([
    common_1.Injectable()
], MongooseOption);
exports.MongooseOption = MongooseOption;
//# sourceMappingURL=database.option.js.map