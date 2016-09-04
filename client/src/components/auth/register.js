import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class Register extends Component {
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
    const { handleSubmit } = this.props

    return (
      <form>
        {this.renderAlert()}
        <div className='row'>
          <div className='col-md-6'>
            <label>
              First Name
            </label>
            <input name='firstName' className='form-control' type='text' />
          </div>
          <div className='col-md-6'>
            <label>
              Last Name
            </label>
            <input name='lastName' className='form-control' type='text' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label>
              Email
            </label>
            <input name='email' className='form-control' type='text' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label>
              Password
            </label>
            <input name='password' className='form-control' type='password' />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    )
  }
}

export default Register
