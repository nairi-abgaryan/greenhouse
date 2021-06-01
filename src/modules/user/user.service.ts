import { Injectable } from '@nestjs/common'
import { FindConditions } from 'typeorm'

import { RegisterRequest } from '../auth/models/RegisterRequest'
import { UserEntity } from './user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  /**
   * Find single user
   */
  findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(findData)
  }

  async createUser(userRegisterDto: RegisterRequest): Promise<UserEntity> {
    const user = this.userRepository.create(userRegisterDto)
    await this.userRepository.save(user)

    return user
  }
}
