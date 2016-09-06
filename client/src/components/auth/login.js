import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  submitLoginFunction (e) {
    e.preventDefault()
    this.props.authStore.login(this.state).then((response) => {
      this.props.route.push('/dashboard')
    }).catch((err) => {
      this.setState({
        errorMessage: 'Wrong email or password'
      })
    })
  }

  renderAlert () {
    if (this.state.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.state.errorMessage}</span>
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
