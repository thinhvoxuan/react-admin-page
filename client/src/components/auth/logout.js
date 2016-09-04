import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('authStore') @observer
class Logout extends Component {
  componentWillMount () {}

  render () {
    return <div>
             Sorry to see you go!
           </div>
  }
}

export default Logout
