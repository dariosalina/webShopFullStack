import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, IsEmail, MinLength } from "class-validator";
import { Exclude } from "class-transformer";
import Advert from "../adverts/entity";
import * as bcrypt from "bcrypt";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column("text")
  first_name: string;

  @IsString()
  @Column("text")
  last_name: string;

  @IsEmail()
  @Column("text", { nullable: false })
  email: string;

  @IsString()
  @MinLength(5)
  @Column("text", { nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;
  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }

  @OneToMany(_ => Advert, advert => advert.user)
  adverts: Advert[];
}
