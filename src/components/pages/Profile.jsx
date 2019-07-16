import React from 'react'
import {Container, Columns, Column, Box, Content, Title, Button} from "bloomer"

const Profile = () => {
  return (
    <Container>
      <Title isSize={2}>Student Name</Title>
      <Columns isCentered>
    <Column isSize='1/4'>
        <Content hasTextAlign='centered'> isOneQUARTER </Content>
    </Column>
    <Column isSize='2/3'>
        <Content hasTextAlign='centered'> isTwoThirds </Content>
    </Column>
</Columns>
    </Container>
  )
}

export default Profile