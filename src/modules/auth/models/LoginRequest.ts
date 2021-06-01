import { IsString, IsEmail } from 'class-validator'

export class LoginRequest {
  @IsString()
  @IsEmail()
  readonly email: string

  @IsString()
  readonly password: string
}
