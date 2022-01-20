import { IUser } from "./user.interface";

export interface IServiceGetAllUsers {
    success: boolean;
    count: number;
    user: IUser[];
}