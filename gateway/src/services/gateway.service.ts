import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { read } from "fs";
import { map } from "rxjs/operators";

@Injectable()
export class GatewayService {
    constructor(@Inject('USER_SERVICE') private readonly clientUserService: ClientProxy){}

    allUsers() {
        const pattern = { cmd: 'user.create' };
        const payload = {};

        return this.clientUserService.send<string>(pattern, payload).pipe(map((message: string) =>({message})),);
    }
}