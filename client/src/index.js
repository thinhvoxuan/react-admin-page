import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import cookie from 'react-cookie'
import routes from './routes'
import ReactGA from 'react-ga'

import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import userStore from './stores/userStore'
import authStore from './stores/authStore'

useStrict(true)

// Import stylesheets
import './public/stylesheets/base.scss'

// Initialize Google Analytics
ReactGA.initialize('UA-000000-01')

function logPageView () {
  ReactGA.pageview(window.location.pathname)
}

const stores = { userStore, authStore}

ReactDOM.render(
  <Provider { ... stores }>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  document.querySelector('.wrapper'))
