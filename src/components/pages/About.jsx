import React from 'react'
import {Section, Container, Column, Title, Columns, Image, Content } from "bloomer"
import about_image1 from "../../assets/undraw_code_typing_7jnv.svg"
import about_image2 from "../../assets/undraw_selection_92i4.svg"
import '../../styles/about.scss'

const About = () => {
  return (
    <div>
      <Section>
          <div className="about_back_rect"></div>
          <div className='about_front_rect'></div>
        <Container className="about_container">
        <Title className="about_headTitle" isSize={2}>About Coder Academy</Title>
        </Container>
        <br/><br/>
  <Columns isCentered>
    <Column isSize='1/4' offset="2">
<Image isRatio="4:3" src={about_image1} />
    </Column>
    <Column isSize='1/2'>
        <Content>
          <Title className="about_title" isSize={2}>What we do</Title>
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
          <Title className="about_title" isSize={2}>What we offer</Title>
          <br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
<br/><br/>
Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.

</Content>
    </Column>
    <Column isSize='1/4' offset="2">
<Image isRatio="4:3" src={about_image2} />
    </Column>
    
    </Columns>
            <br/><br/>

</Section>

    </div>
  )
}

export default About
