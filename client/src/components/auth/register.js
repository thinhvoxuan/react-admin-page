import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class Register extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: 'thinh',
      lastName: 'voxuan',
      email: 'thinhvoxuan@gmail.com',
      password: 'abc123',
      errorMessage: ''
    }
  }

  renderAlert () {
    if (this.state.errorMessage) {
      return (
        <div>
          <span style={{color: 'red'}}><strong>Error!</strong> {this.state.errorMessage}</span>
        </div>
      )
    }
  }

  submitRegisterFunction (e) {
    e.preventDefault()
    this.props.authStore.register(this.state).then((response) => {
      this.props.route.push('/dashboard')
    }).catch((err) => {
      let message = err.response.data.error
      console.log('message: ', message)
      this.setState({
        errorMessage: message
      })
    })
  }

  changeFirstName (ev) {
    this.setState({firstName: ev.target.value})
  }

  changeLastName (ev) {
    this.setState({lastName: ev.target.value})
  }

  changeEmail (ev) {
    this.setState({email: ev.target.value})
  }

  changePassword (ev) {
    this.setState({password: ev.target.value})
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={this.submitRegisterFunction.bind(this)}>
        {this.renderAlert()}
        <div className='row'>
          <div className='col-md-6'>
            <label>
              First Name
            </label>
            <input
              name='firstName'
              className='form-control'
              type='text'
              value={this.state.firstName}
              onChange={this.changeFirstName.bind(this)} />
          </div>
          <div className='col-md-6'>
            <label>
              Last Name
            </label>
            <input
              name='lastName'
              className='form-control'
              type='text'
              value={this.state.lastName}
              onChange={this.changeLastName.bind(this)} />
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
              type='text'
              value={this.state.email}
              onChange={this.changeEmail.bind(this)} />
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
              type='password'
              value={this.state.password}
              onChange={this.changePassword.bind(this)} />
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
