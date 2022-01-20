import { BadGatewayException, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserInput } from "src/dto/create-user.input";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private readonly configService: ConfigService
    ) {}

    async create(data: CreateUserInput): Promise<User> {
        const user = new User(data);

        try {
            return await this.usersRepository.save(user);
        } catch (error) {
            throw error;
        }
    }

    async paginate(
      name = '',
      username = '',
      skip = 0,
      take = 10,
      sortColumn = 'first_name',
      sortDirection?: 'ASC' | 'DESC'
    ) : Promise<[User[], number]> {
      const query = this.usersRepository.createQueryBuilder('User')
      .where("User.first_name || ' ' || User.last_name ILIKE :name", { name: `%${name}%` })
      .andWhere('User.user_name ILIKE :username', { username: `%${username}%` });

      const [data, count] = await query
      .orderBy(`${User.name}.${sortColumn}`, sortDirection ? sortDirection : 'ASC')
      .skip(skip)
      .take(take)
      .getManyAndCount();

      return [data, count];
    }
    
    async update(id: number, data: CreateUserInput): Promise<User> {
      const user = await this.usersRepository.findOne(id);

      if(!user) {
        throw new NotFoundException('UserNotFound');
      }

      try {
        return await this.usersRepository.save(this.usersRepository.merge(user, data));
      } catch (error) {
        throw error;
      }
    }

    async remove(id: number): Promise<any> {
      const user = await this.usersRepository.findOne(id);

      if(!user) {
        throw new NotFoundException('UserNotFound');
      }

      return await this.usersRepository.softDelete({id});
    }
}