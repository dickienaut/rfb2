import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import ContactState from './context/contact/ContactState.js'
import AuthState from './context/auth/AuthState.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'

import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
