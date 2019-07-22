import React from 'react'
import { Container, Image, Title} from 'bloomer'
import error_image from "../../assets/404_undraw.svg"

const Error = () => {
  return (
    <div>
      <Container className="error_container">
        <Title className="error_title" isSize={1}>404 - Sorry Not Found</Title>
        <Title className="error_title" isSize={4}>The resource you were looking for doesn't exist.</Title>
        <Image src={error_image} className="error_image" alt="404 error"/>
      </Container>    
    </div>
  )
}

export default Error
