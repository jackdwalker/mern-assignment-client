import React from 'react'
import {Columns, Container, Column, Footer, Field, Label,Input, Control, Button, Title, Icon} from 'bloomer'
import "../../styles/foot.scss"
import error_image from "../../assets/404_undraw.svg"

const Error = () => {
  return (
    <div>
      <Container className="error_container">
        <Title isSize={3}>404 - Sorry no resource</Title>
        <p>Sorry the page you were looking for doesn't exist.</p>
        <img src={error_image} alt="404 error"/>
      </Container>
    </div>
  )
}

export default Error
