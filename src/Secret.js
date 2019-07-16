import React, { Component } from 'react'
import { api } from './studentAPI'
import { Button } from 'bloomer/lib/elements/Button';

export default class Secret extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'Loading...'
    }
  }

  handleClick = (event) => {
    api.get('/secret', {
      withCredentials: true
    }).then(result => {
      console.log(result)
    })
  }


  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Am I authorised</Button>
      </div>
    );
  }
}
