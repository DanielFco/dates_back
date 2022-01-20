import { firstValueFrom, toArray } from 'rxjs';
import { Controller, Get, Inject, Query } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiTags } from "@nestjs/swagger";
import { PaginatedResponse } from "src/common/paginated-response.dto";
import { FindInput } from "src/interfaces/user/dto/find.input";
import { IServiceGetAllUsers } from "src/interfaces/user/service-get-all-users.interface";
import { IUser } from 'src/interfaces/user/user.interface';
import { GatewayService } from 'src/services/gateway.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        private readonly gatewayService: GatewayService
    ) {}

    @Get()
    public async getUsers(@Query() query: FindInput) {

        return this.gatewayService.allUsers();
    }
}