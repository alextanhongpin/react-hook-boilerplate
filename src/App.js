import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Lazy-load pages.
const Home = React.lazy(() => import('component/page/Home'))
const NoMatch = React.lazy(() => import('component/page/NoMatch'))

class App extends Component {
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch className='App'>
          <Route exact path='/' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    )
  }
}

export default App
