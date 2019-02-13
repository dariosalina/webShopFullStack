import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, IsInt, MinLength, IsEmail,} from 'class-validator'

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

  @IsInt()
  @Column()
  price: number

  @IsEmail()
  @Column('text')
  email: string

  @IsInt()
  @Column()
  phone_number: number

}