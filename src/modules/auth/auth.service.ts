import { Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserEntity } from '../user/user.entity'
import { UserService } from '../user/user.service'
import { LoginRequest } from './models/LoginRequest'
import { TokenResponse } from './models/TokenResponse'
import { hash } from 'typeorm/util/StringUtils'
import { ContextService } from '../../providers/context.service'

@Injectable()
export class AuthService {
  private static authUserKey = 'user_key'

  constructor(
    public readonly jwtService: JwtService,
    public readonly userService: UserService,
  ) {}

  async createToken(user: UserEntity): Promise<TokenResponse> {
    return new TokenResponse({
      expiresIn: 60,
      accessToken: await this.jwtService.signAsync({ id: user.uuid }),
    })
  }

  async validateUser(userLoginDto: LoginRequest): Promise<UserEntity> {
    const user = await this.userService.findOne({
      email: userLoginDto.email,
      password: hash(userLoginDto.password),
    })

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  static setAuthUser(user: UserEntity) {
    ContextService.set(AuthService.authUserKey, user)
  }

  static getAuthUser(): UserEntity {
    return ContextService.get(AuthService.authUserKey)
  }
}
