import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { browserHistory } from 'react-router'

@inject('authStore') @observer
class Logout extends Component {
  componentWillMount () {
    this.props.authStore.logout()
    browserHistory.push('/login')
  }
  render () {
    return <div>
             Sorry to see you go!
           </div>
  }
}

export default Logout
