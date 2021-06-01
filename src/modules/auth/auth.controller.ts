import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

import { UserResponse } from '../user/models/UserResponse'
import { UserEntity } from '../user/user.entity'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { LoginRequest } from './models/LoginRequest'
import { LoginResponse } from './models/LoginResponse'
import { RegisterRequest } from './models/RegisterRequest'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    public readonly userService: UserService,
    public readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: LoginResponse,
    description: 'User info with access token',
  })
  async userLogin(@Body() userLoginDto: LoginRequest): Promise<LoginResponse> {
    const user = await this.authService.validateUser(userLoginDto)

    const token = await this.authService.createToken(user)
    return {
      user,
      token,
    }
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserResponse,
    description: 'Successfully Registered',
  })
  async userRegister(
    @Body() userRegisterDto: RegisterRequest,
  ): Promise<UserEntity> {
    return this.userService.createUser(userRegisterDto)
  }
}
