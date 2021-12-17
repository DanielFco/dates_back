import {Transport} from '@nestjs/microservices';

export class GatewayService {
    private readonly envConfig: {[key: string]: any} = null;

    constructor() {
        this.envConfig = {};
        this.envConfig.port = process.env.API_GATEWAY_PORT
    }
}