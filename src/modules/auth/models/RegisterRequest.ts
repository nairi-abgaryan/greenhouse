import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator'
import { Column } from 'typeorm'

export class RegisterRequest {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string

  @IsString()
  @IsNotEmpty()
  readonly lastName: string

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @IsString()
  @MinLength(6)
  readonly password: string

  @Column()
  @IsOptional()
  phone: string
}
