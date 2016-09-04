import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

export default function(ComposedComponent) {
  @inject('authStore') @observer
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount () {
      if (!this.props.authenticated) {
        this.context.router.push('/login')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/login')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }
  return Authentication
}
