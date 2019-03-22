import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsEmail } from "class-validator";
import User from "../users/entity";
@Entity()
export default class Advert extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  // @Length(5, 25)
  @Column("text")
  title: string;

  @IsString()
  // @MinLength(10)
  @Column("text")
  description: string;

  @IsString()
  @Column("text")
  picture: string;

  @Column("integer")
  price: number;

  @IsEmail()
  @Column("text")
  email: string;

  @Column()
  phone_number: number;

  @ManyToOne(_ => User, user => user.adverts, { eager: true })
  user: User;
}
