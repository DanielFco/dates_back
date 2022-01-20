import { ApiProperty } from "@nestjs/swagger";

export class PaginatedResponse<T> {
    @ApiProperty()
    payload: T[];

    @ApiProperty()
    count: number;

    @ApiProperty()
    success: boolean;

    constructor(payload: T[], count: number, success: boolean) {
        this.success = success;
        this.payload = payload;
        this.count = count;
    }
}