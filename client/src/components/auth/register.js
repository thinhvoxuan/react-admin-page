import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

const renderField = field => (
  <div>
    <input className='form-control' {...field.input}/>
    {field.touched && field.error && <div className='error'>
                                       {field.error}
                                     </div>}
  </div>
)

function validate (formProps) {
  const errors = {}

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name'
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name'
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }

  return errors
}

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
            <input
              name='firstName'
              className='form-control'
              component={renderField}
              type='text' />
          </div>
          <div className='col-md-6'>
            <label>
              Last Name
            </label>
            <input
              name='lastName'
              className='form-control'
              component={renderField}
              type='text' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label>
              Email
            </label>
            <input
              name='email'
              className='form-control'
              component={renderField}
              type='text' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label>
              Password
            </label>
            <input
              name='password'
              className='form-control'
              component={renderField}
              type='password' />
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
