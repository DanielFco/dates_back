import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 30,
        unique: true
    })
    user_name: string;

    @Column('varchar', { length: 100 })
    first_name: string;

    @Column('varchar', { length: 100 })
    last_name: string;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
      }
}