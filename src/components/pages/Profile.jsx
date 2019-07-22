import React, { Component } from 'react'
import "../../styles/profile.scss"
import { Columns, Column, Section, Tag, Image, Icon, Content, Title, Button } from "bloomer"
import { api } from '../../studentAPI'
import Gravatar from 'react-gravatar'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      studentData: {}
    }
  }

  componentDidMount() {
    api.get(`/students${this.props.location.pathname}`)
      .then(result => {
        this.setState({
          isLoading: false,
          studentData: result.data
        })
      })
      .catch(error => {
        console.log(error)
        console.log(this.props.location)
      })
  }

  render() {

    {/* Seeking Status Conditional Rendering */ }
    let seeking

    if (this.state.studentData.seeking) {
      seeking = this.state.studentData.seeking.map(seeking =>
        <Tag isColor='light' isSize='medium'>{seeking}</Tag>
      )
    } else {
      seeking = ''
    }

    {/* Tech Stack Conditional Rendering*/ }
    let techStack

    if (this.state.studentData.techStack) {
      techStack = this.state.studentData.techStack.map(language =>
        <Tag>{language}</Tag>
      )
    } else {
      techStack = ''
    }

    {/* Github Conditional Render */ }

    {/* Twitter Conditional Render */ }

    {/* LinkedIn Conditional Render*/ }

    {/* Personal Website Conditional Render */ }

    {/* Contact Email Conditional Render */ }

    {/* Whole Profile Conditional Rendering */ }
    let profile

    if (this.state.isLoading === 'true') {
      profile = <p>Not Loaded</p>
    } else {
      profile =
        <Section className="profile_Container">
          <div className="profile_backrect"></div>
          <div className="profile_frontrect"></div>
          <Columns isCentered>
            <Column isSize='1/4' offset="2">
              <Gravatar md5={this.state.studentData.gravatar} size={640} />
              <div>
                <Title className="profile_name" isSize={3}>
                  Student Name
                </Title>
                <Title isSize={6} className="profile_smalltitle">Seeking</Title>
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
              </div>
            </Column>
            <Column isSize='1/2'>
              <Content className="profile_bio">
                <p>Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum sagittis, malesuada ligula a, placerat dui. Nullam venenatis mauris vitae erat hendrerit, in condimentum diam varius. Praesent in rutrum augue, a eleifend odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc sed ligula id dui luctus pharetra. Praesent porttitor orci eu dolor dapibus, non dignissim dolor tincidunt. Cras pharetra placerat urna ac vestibulum. In hac habitasse platea dictumst. Praesent gravida facilisis hendrerit.</p>
              </Content>
            </Column>
            <Column isSize='1/4'>
              <div>
                <Title isSize={6} className="profile_smalltitle">Tech Stack</Title>
                <div className="tags are-medium profile_techGroup">
                  <span className="tag is-primary">Javascript</span>
                  <span className="tag is-warning">Ruby</span>
                  <span className="tag is-danger">Rails</span>
                  <span className="tag is-light">CSS</span>
                  <span className="tag is-light">HTML</span>
                </div>
                <Title isSize={6} className="profile_smalltitle">Field of Interest</Title>
                <Tag isColor='light' isSize='medium'>Front-end</Tag>
              </div>
            </Column>
          </Columns>
        </Section>
    }

    return (
      <div>
        {profile}
      </div>
    )
  }
}