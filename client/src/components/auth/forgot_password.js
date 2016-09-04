import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class ForgotPassword extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount () {
    if (this.props.authenticated) {
      this.context.router.push('/dashboard')
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.authenticated) {
      this.context.router.push('/dashboard')
    }
  }

  handleFormSubmit (formProps) {
    this.props.getForgotPasswordToken(formProps)
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

  render () {
    const { handleSubmit } = this.props

    return (
      <form>
        <div>
          {this.renderAlert()}
          <label>
            Email
          </label>
          <Field
            name='email'
            className='form-control'
            component='input'
            type='text' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Reset Password
        </button>
      </form>
    )
  }
}

export default ForgotPassword
