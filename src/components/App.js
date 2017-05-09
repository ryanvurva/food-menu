import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
// import Footer from './Footer'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
          </Switch>
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </div>
    </Router>
  }
}

export default App
