import { Route, Router, browserHistory, IndexRedirect } from 'react-router'
import React from 'react'
import App from '../components/App'

export default () => {
  return(
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRedirect to='/home' />
        </Route>
      </Router>
    )
}
