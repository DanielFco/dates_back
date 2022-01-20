import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserController } from "./controllers/user.controller";
import { ConfigService } from "./services/config.service";
import { UserService } from "./services/user.service";

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '../.env',
      })],
    controllers: [UserController],
    providers: [UserService, ConfigService]
})
export class UserModule {}