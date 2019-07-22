import React from 'react'
import {Columns, Container, Image, Footer, Field, Label,Input, Control, Button, Title, Icon} from 'bloomer'
import error_image from "../../assets/404_undraw.svg"

const Error = () => {
  return (
    <div>
      adsfdsfds
      <Container className="error_container">
        <Title isSize={3}>404 - Sorry no resource</Title>
        <p>Sorry the page you were looking for doesn't exist.</p>
        <Image src={error_image} ratio="4:3" alt="404 error"/>
      </Container>    
    </div>
  )
}

export default Error
