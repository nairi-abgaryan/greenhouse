import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserService } from '../user/user.service'
import { JWT_SECRET_KEY } from '../../conf'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(public readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET_KEY,
    })
  }
}
