import { TokenResponse } from './TokenResponse'
import { UserResponse } from '../../user/models/UserResponse'

export class LoginResponse {
  user: UserResponse
  token: TokenResponse

  constructor(user: UserResponse, token: TokenResponse) {
    this.user = user
    this.token = token
  }
}
