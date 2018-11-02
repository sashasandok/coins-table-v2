//react
import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

//components
import CoinsTable from '../containers/CoinsTable/CoinsTable'
import NoMatch from '../components/NoMatch/NoMatch'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CoinsTable} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
