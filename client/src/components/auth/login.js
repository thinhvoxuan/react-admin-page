import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { observer, inject } from 'mobx-react'
import {Login} from '../../../api/api'

@inject('authStore') @observer
class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor (props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  submitLoginFunction (e) {
    e.preventDefault()
    Login(this.state);
  }

  componentWillUpdate(nextProps){
    if (this.props.authStore.isLogged) {
      this.context.router.push('/dashboard')
    }
  }

  renderAlert () {
    if (this.props.authStore.LoginErrorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.authStore.LoginErrorMessage}</span>
        </div>
      )
    }
  }

  changeEmail (ev) {
    this.setState({email: ev.target.value})
  }

  changePassword (ev) {
    this.setState({password: ev.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitLoginFunction.bind(this)}>
          {this.renderAlert()}
          <div>
            <label>
              Email
            </label>
            <input
              value={this.state.email}
              name='email'
              className='form-control'
              component='input'
              type='text'
              onChange={this.changeEmail.bind(this)} />
          </div>
          <div>
            <label>
              Password
            </label>
            <input
              value={this.state.password}
              name='password'
              className='form-control'
              component='input'
              type='password'
              onChange={this.changePassword.bind(this)} />
          </div>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </form>
        <Link to='/forgot-password'> Forgot Password?
        </Link>
      </div>
    )
  }
}

export default Login


wrappedForm(LoginCOntainer, loginFormStore){
  class Wappred extends Component {

    render(){
      return <LoginCOntainer loginFormStore={loginFormStore} ...this.props  />
    }
  }
  return Wrappred
}


import loginFormStore from './'

export default wrappedForm(Login, loginFormStore)
