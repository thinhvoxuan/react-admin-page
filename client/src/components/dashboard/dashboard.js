import React, { Component } from 'react'
import { Link } from 'react-router'
import cookie from 'react-cookie'

class Dashboard extends Component {

  constructor (props) {
    super(props)
  }

  isRole (roleToCheck, toRender) {
    let user = cookie.load('user')
    if (!user)
      return false

    let userRole = user.role

    if (userRole == roleToCheck) {
      return toRender
    }

    return false
  }

  adminMenu () {
    return (
      <div className='admin-menu'>
        <Link to='/admin'> Admin
        </Link>
      </div>
    )
  }

  ownerMenu () {
    return (
      <div className='trainer-menu'>
        Owner menu coming soon.
      </div>
    )
  }

  clientMenu () {
    return (
      <div className='client-menu'>
        Client menu coming soon.
      </div>
    )
  }

  render () {
    return (
      <div>
        <Link to='/dashboard/inbox'> Inbox
        </Link> |
        <Link to='/profile/edit'> Edit Profile
        </Link> |
        <Link to='/billing/settings'> Billing
        </Link>
        {this.isRole('Admin', this.adminMenu())}
        {this.isRole('Owner', this.ownerMenu())}
        {this.isRole('Client', this.clientMenu())}
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default Dashboard
