import React from 'react';
import WithState from './components/WithState'
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Nav from "./components/layout/Nav"
import Foot from "./components/layout/Foot"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import SignUp from "./components/pages/SignUp"
import LogIn from "./components/pages/Login"
import ViewAll from "./components/pages/ViewAll"
import Profile from "./components/pages/Profile"
import EditProfile from "./components/pages/EditProfile"
import Error from "./components/layout/Error"

export default WithState(() => {
  return (
    <div>
      <Nav />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path="/viewall" component={ViewAll} />
              <Route path="/profile" component={Profile} />
              <Route path="/editprofile" component={EditProfile} />
              <Redirect from="*" to="/error"  componetn={Error}/>
            </Switch>
          </Router>
      <Foot />
    </div>
  )
})