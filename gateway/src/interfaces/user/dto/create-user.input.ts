import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserInput {
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    @ApiProperty()
    first_name: string;
}