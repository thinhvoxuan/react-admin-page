import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class Login extends Component {
  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      )
    }
  }
  render () {
    console.log('login props: ', this.props)
    return (
      <div>
        <form>
          {this.renderAlert()}
          <div>
            <label>
              Email
            </label>
            <input
              name='email'
              className='form-control'
              component='input'
              type='text' />
          </div>
          <div>
            <label>
              Password
            </label>
            <input
              name='password'
              className='form-control'
              component='input'
              type='password' />
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

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  }
}

export default Login
