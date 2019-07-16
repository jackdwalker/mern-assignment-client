import React from 'react'
import "../../styles/profile.scss"
import {Container, Columns, Column, Section, Box, Image, Icon, Content, Title, Button, Tag} from "bloomer"

const Profile = () => {
  return (
    <div>
      <Section>
        <br/><br/>
        <Columns isCentered>
        <Container>
          <Title isSize={2}>About this application</Title>
        </Container>
        </Columns>
  <Columns isCentered>
    <Column isSize='1/4' offset="2">
<Image isRatio="4:3" src="https://via.placeholder.com/640x480" />
    </Column>
    <Column isSize='1/3'>
        <Content>
          <Title isSize={2}>Heading 2</Title>
          <br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
</Content>
    </Column>
        <Column isSize='1/4'>
      Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.

    </Column>

    </Columns>
</Section>

</div>

  )
}

export default Profile