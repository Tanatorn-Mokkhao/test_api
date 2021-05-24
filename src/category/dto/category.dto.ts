import { IsNotEmpty } from "class-validator";



export class CategoryDto {
    @IsNotEmpty()
    readonly name: string
    

    readonly parentId?:string
}