import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class FooterTemplate extends Component {
  renderLinks () {
    if (this.props.authStore.isLogged) {
      return [
        <li key={1}>
          <Link to='/'> Home
          </Link>
        </li>,
        <li key={2}>
          <Link to='dashboard'> Dashboard
          </Link>
        </li>,
        <li key={3}>
          <Link to='logout'> Logout
          </Link>
        </li>
      ]
    } else {
      return [
        // Unauthenticated navigation
        <li key={1}>
          <Link to='/'> Home
          </Link>
        </li>,
        <li key={2}>
          <Link to='login'> Login
          </Link>
        </li>,
        <li key={3}>
          <Link to='register'> Register
          </Link>
        </li>
      ]
    }
  }

  render () {
    const d = new Date()
    const year = d.getFullYear()

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <nav>
                <ul className='footer-nav'>
                  {this.renderLinks()}
                </ul>
              </nav>
              <p className='copyright'>
                ©
                {year}, Your Site. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterTemplate
