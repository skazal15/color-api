import { IsString,IsInt } from "class-validator";

export class getColor{
    @IsInt()
    id: number;
    @IsString()
    name:string;
}