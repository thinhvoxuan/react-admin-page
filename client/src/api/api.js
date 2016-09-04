import axios from 'axios'
import cookie from 'react-cookie'
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index'

export function loginUser ({ email, password }) {
  return axios.post(`${API_URL}/auth/login`, { email, password})
    .catch((error) => {
      errorHandler(error.response)
    })
}

export function registerUser ({ email, firstName, lastName, password }) {
  axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password})
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' })
      cookie.save('user', response.data.user, { path: '/' })
      browserHistory.push('/dashboard')
    })
    .catch((error) => {
      errorHandler(error.response)
    })
}

export function logoutUser (error) {
  cookie.remove('token', { path: '/' })
  cookie.remove('user', { path: '/' })
  browserHistory.push('/login')
}

export function getForgotPasswordToken ({ email }) {
  axios.post(`${API_URL}/auth/forgot-password`, { email})
    .then(response => {
      browserHistory.push('/login')
    })
    .catch((error) => {
      errorHandler(error.response)
    })
}

export function resetPassword (token, { password }) {
  return function (dispatch) {
    axios.post(`${API_URL}/auth/reset-password/${token}`, { password})
      .then(response => {
        browserHistory.push('/login')
      })
      .catch((error) => {
        errorHandler(error.response)
      })
  }
}

export function protectedTest () {
  return function (dispatch) {
    axios.get(`${API_URL}/protected`, {
      headers: { 'Authorization': cookie.load('token') }
    })
      .then(response => {
        console.log('response: ', response)
      })
      .catch((error) => {
        errorHandler(error.response)
      })
  }
}
