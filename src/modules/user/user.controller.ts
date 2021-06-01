import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger'

import { AuthUser } from '../../decorators/auth-user.decorator'
import { AuthGuard } from '../../guards/auth.guard'
import { RolesGuard } from '../../guards/roles.guard'
import { UserEntity } from './user.entity'
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service'
import { UserResponse } from './models/UserResponse'

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class UserController {
  @Get('admin')
  @HttpCode(HttpStatus.OK)
  async admin(@AuthUser() user: UserEntity) {
    return `only for you admin: ${user.firstName}`
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @UseInterceptors(AuthUserInterceptor)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserResponse, description: 'current user info' })
  async getCurrentUser(@AuthUser() user: UserEntity) {
    return user
  }
}
