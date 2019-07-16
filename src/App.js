import React from 'react';
import './App.scss';
import { api } from './studentAPI'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import {Box, Title} from "bloomer"
import Nav from "./components/layout/Nav"
import Foot from "./components/layout/Foot"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import SignUp from "./components/pages/SignUp"
import LogIn from "./components/pages/Login"
import ViewAll from "./components/pages/ViewAll"
import Profile from "./components/pages/Profile"

export default class App extends React.Component {
  state = {
    students: [],
    studentName: ""
  }

  componentDidMount = () => {
    api.get('/students').then(result => {
      console.log(result.data)
      this.setState({
        students: result.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <Nav />
          {/* <Box>
            <Title isSize={1}>Students</Title>
            {this.state.students.map((student, index) => (
              <Title isSize={6}>{student.name}</Title>
            ))}
          </Box> */}
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn} />
                <Route path="/viewall" component={ViewAll} />
                <Route path="/profiles" component={Profile} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
        <Foot />
      </div>
    )
  }
}
