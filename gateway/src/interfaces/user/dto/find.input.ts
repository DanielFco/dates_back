import { ApiProperty } from "@nestjs/swagger";
import { BaseFindInput } from "../../../common/base-find.input";

export class FindInput extends BaseFindInput {
    @ApiProperty({required: false})
    name?: string;
    
    @ApiProperty({required: false})
    userName?: string;

    @ApiProperty({required: false})
    profileId?: string;
}