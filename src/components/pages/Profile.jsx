import React from 'react'
import "../../styles/profile.scss"
import {Container, Columns, Column, Notification, Section, Tag, Box, Image, Icon, Content, Title, Button} from "bloomer"
import {Link} from "react-router-dom"

const Profile = () => {
  return (
    <div>
      <Section>
        <Columns isCentered>
        </Columns>
  <Columns isCentered>
    <Column isSize='1/4' offset="2">
      <Image isRatio="4:3" src="https://via.placeholder.com/640x480" />
      <Box style={{marginTop: "20px"}}>
        <Title isSize={4}>
          Student Name
          </Title>
        <Title isSize={6}>Seeking</Title>
          <div className="tags are-medium profile_techGroup">
            <Tag isColor='light' isSize='medium'>Internship</Tag>
            <Tag isColor='light' isSize='medium'>Full Time</Tag>
          </div>
          <div className="profile_linkGroup">
            <a className="profile_githubLink" href="http://www.github.com/rachelwong">
              <Icon isSize="large" className="fab fa-github fa-2x" />
            </a>
            <a className="profile_websiteLink" href="http://www.google.com">
              <Icon isSize="large" className="fas fa-chevron-circle-right fa-2x" />
            </a>
            <a className="profile_emailLink" href="mailto:hello.rachelwong@gmail.com">
              <Icon isSize="large" className="fas fa-envelope-open-text fa-2x" />
            </a>
          </div>
      </Box>
    </Column>
    <Column isSize='1/2'>
        <Content>
            <p>Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sagittis, malesuada ligula a, placerat dui. Nullam venenatis mauris vitae erat hendrerit, in condimentum diam varius. Praesent in rutrum augue, a eleifend odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc sed ligula id dui luctus pharetra. Praesent porttitor orci eu dolor dapibus, non dignissim dolor tincidunt. Cras pharetra placerat urna ac vestibulum. In hac habitasse platea dictumst. Praesent gravida facilisis hendrerit.</p>
        </Content>
    </Column>
    <Column isSize='1/4'>
      <Box>
        <Title isSize={6}>Tech Stack</Title>
          <div className="tags are-medium profile_techGroup">
            <span className="tag is-primary">Javascript</span>
            <span className="tag is-warning">Ruby</span>
            <span className="tag is-danger">Rails</span>
            <span className="tag is-light">CSS</span>
            <span className="tag is-light">HTML</span>
          </div>
      </Box>
    </Column>
    </Columns>
</Section>

</div>
  )
}

export default Profile