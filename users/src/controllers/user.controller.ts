import { Controller, Query } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { User } from "../entities/user.entity";
import { FindInput } from "../dto/find.input";
import { CreateUserInput } from "../dto/create-user.input";
import { UserService } from "../services/user.service";

@Controller('user')
export class UserController {
    constructor ( private readonly userService: UserService){}

    @MessagePattern({ msg: 'user.create' })
    public async create(data: CreateUserInput) : Promise<User> {
        return this.userService.create(data);
    }

    @MessagePattern({ msg: 'user.list' })
    public async findAll(query: FindInput) : Promise<[User[], number]> {
        return await this.userService.paginate(
          query.name,
          query.userName,
          query.skip,
          query.take,
          query.sortColumn,
          query.sortDirection
        );
    }

    @MessagePattern({ msg: 'user.update' })
    public async update(id: string, data: CreateUserInput): Promise<User> {
      return this.userService.update(+id, data);
    }

    @MessagePattern({ msg: 'user.delete' })
    public async remove(id: string) {
      return this.userService.remove(+id);
    }
}