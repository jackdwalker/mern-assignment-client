import React from 'react'
import {Section, Container, Column, Title, Columns, Image, Content } from "bloomer"

const About = () => {
  return (
    <div>
      <Section>
        <Container>
        <Title isSize={2}>About this application</Title>
        </Container>
        <br/><br/>
  <Columns isCentered>
    <Column isSize='1/4' offset="2">
<Image isRatio="4:3" src="https://via.placeholder.com/640x480" />
    </Column>
    <Column isSize='1/2'>
        <Content>
          <Title isSize={2}>Heading 2</Title>
          <br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
<br/><br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
</Content>
    </Column>
    </Columns>
</Section>
<br/><br/>
<Section>
  <Columns isCentered>
    <Column isSize='1/2'>
        <Content>
          <Title isSize={2}>Heading 3</Title>
          <br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
<br/><br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.

</Content>
    </Column>
    <Column isSize='1/4' offset="2">
<Image isRatio="4:3" src="https://via.placeholder.com/640x480" />
    </Column>
    
    </Columns>
</Section>

    </div>
  )
}

export default About
