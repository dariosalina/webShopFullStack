import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, MinLength, IsEmail,} from 'class-validator'

@Entity()
export default class Adverts extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(5, 25)
  @Column('text')
  title: string

  @IsString()
  @MinLength(10)
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  picture: string

  @IsString()
  @Column()
  price: string

  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @Column()
  phone_number: string

}