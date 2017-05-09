import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
// import Footer from './Footer'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </div>
    </Router>
  }
}

export default App
