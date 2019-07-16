import React from 'react'
import "../../styles/profile.scss"
import {Container, Columns, Column, Notification, Section, Box, Image, Icon, Content, Title, Button} from "bloomer"

const Profile = () => {
  return (
    <Container>
      <Columns isCentered>
    <Column isSize='1/3'>
        <Notification isColor='success' hasTextAlign='centered'> 1/3 </Notification>
    </Column>
        <Column isSize='1/2'>
        <Notification isColor='success' hasTextAlign='centered'> 1/2 </Notification>
    </Column>
        <Column isSize='1/4'>
        <Notification isColor='success' hasTextAlign='centered'> 1/4 </Notification>
    </Column>
</Columns>
</Container>
  )
}

export default Profile