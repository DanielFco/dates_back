import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule } from '@nestjs/microservices';
import { UsersController } from './controllers/users.controller';
import { ConfigService } from './services/config.service';
import { GatewayService } from './services/gateway.service';

@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: '../.env',
    }),
  ],
  controllers: [UsersController],
  providers: [
    ConfigService,
    GatewayService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');

        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }
  ],
})
export class AppModule {}
