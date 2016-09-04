import React, { Component } from 'react'
import cookie from 'react-cookie'

import UserInfo from './user-info'

class ViewProfile extends Component {
  componentWillMount () {
    // Fetch user data prior to component mounting
    const userId = cookie.load('uid')
    this.props.fetchUser(userId)
  }

  render () {
    return (
      <UserInfo profile={this.props.profile.email} />
    )
  }
}

export default ViewProfile
