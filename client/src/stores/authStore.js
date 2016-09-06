import { observable, computed, action } from 'mobx'
import { loginUser, registerUser, logoutUser, getForgotPasswordToken, resetPassword } from '../api/api'

import cookie from 'react-cookie'
class AuthStore {

  @observable me
  @observable token

  constructor () {
    this.me = null
    this.token = cookie.load('token')
  }

  @computed
  get isLogged () {
    return this.token != null && this.token.length > 0
  }

  @action
  setToken (token) {
    this.token = token
    cookie.save('token', this.token, { path: '/' })
  }

  @action
  login (credential) {
    return loginUser(credential).then((response) => {
      this.setToken(response.data.token)
      return response
    })
  }

  @action
  register (credential) {
    return registerUser(credential).then((response) => {
      this.setToken(response.data.token)
      return response
    })
  }

  @action
  logout () {
    this.token = null
    cookie.remove('token', { path: '/' })
  }

  @action
  register (information) {
    return registerUser(information).then((response) => {
      return response
    })
  }
}

const authStore = new AuthStore()

export default authStore
// export that for unit test
export { AuthStore }
