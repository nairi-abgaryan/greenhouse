import { UserEntity } from '../user.entity'

export class UserResponse {
  firstName: string

  lastName: string

  username?: string

  email: string

  phone: string

  constructor(user: UserEntity) {
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.phone = user.phone
  }
}
