import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer, inject } from 'mobx-react'
import { browserHistory } from 'react-router'

@inject('authStore') @observer
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'thinhvoxuan@gmail.com',
      password: 'abc123'
    }
  }

  submitLoginFunction (e) {
    e.preventDefault()
    this.props.authStore.login(this.state).then((response) => {
      browserHistory.push('/dashboard')
    })
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
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
