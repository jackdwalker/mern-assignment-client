import React from 'react';
import './App.css';
import { api } from './studentAPI'
import Secret from './Secret'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Box } from 'bloomer/lib/elements/Box';
import { Title } from 'bloomer/lib/elements/Title';

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
            <Box>
                <Title isSize={1}>Students</Title>
                {this.state.students.map((student, index) => (
                <Title isSize={6}>{student.name}</Title>
                ))}
            </Box>
        </div>
    )
  }
}
