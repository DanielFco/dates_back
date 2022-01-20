import { ApiProperty } from "@nestjs/swagger";

export class BaseFindInput {
    @ApiProperty({required: false})
    skip?: number;

    @ApiProperty({required: false})
    take?: number;

    @ApiProperty({required: false})
    sortColumn?: string;

    @ApiProperty({required: false})
    sortDirection?: 'ASC' | 'DESC';
}