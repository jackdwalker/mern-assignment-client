import React, { Component } from 'react'
import "../../styles/profile.scss"
import { Columns, Column, Section, Tag, Box, Icon, Content, Title } from "bloomer"
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

    {/* Seeking Status Conditional Rendering */}
    let seeking

    if (this.state.studentData.seeking) {
      seeking = this.state.studentData.seeking.map(seeking =>
        <Tag isColor='light' isSize='medium'>{seeking}</Tag>
      )
    } else {
      seeking = ''
    }

    {/* Tech Stack Conditional Rendering*/}
    let techStack

    if (this.state.studentData.techStack) {
      techStack = this.state.studentData.techStack.map(language =>
        <Tag>{language}</Tag>  
      )
    } else {
      techStack = ''
    }

    {/* Github Conditional Render */}

    {/* Twitter Conditional Render */}

    {/* LinkedIn Conditional Render*/}

    {/* Personal Website Conditional Render */}

    {/* Contact Email Conditional Render */}

    {/* Whole Profile Conditional Rendering */}
    let profile

    if (this.state.isLoading === 'true') {
      profile = <p>Not Loaded</p>
    } else {
      profile =
        <Section>
          <Columns isCentered>
          </Columns>
          <Columns isCentered>
            <Column isSize='1/4' offset="2">
              <Gravatar md5={this.state.studentData.gravatar} size={640} />
              <Box style={{ marginTop: "20px" }}>
                <Title isSize={4}>
                  {this.state.studentData.name}
                </Title>
                <br />
                <Title isSize={6}>Seeking</Title>
                <div className="tags are-medium profile_techGroup">
                  {seeking} 
                </div>
                <div className="profile_linkGroup">
                  <a className="profile_githubLink" href={this.state.studentData.githubURL} target="_blank">
                    <Icon isSize="large" className="fab fa-github fa-2x" />
                  </a>
                  <a className="profile_websiteLink" href={this.state.studentData.websiteURL} target="_blank">
                    <Icon isSize="large" className="fas fa-chevron-circle-right fa-2x" />
                  </a>
                  <a className="profile_emailLink" href="/#">
                    <Icon isSize="large" className="fas fa-envelope-open-text fa-2x" />
                  </a>
                </div>
              </Box>
            </Column>
            <Column isSize='1/2'>
              <Content>
                <p>{this.state.studentData.bio}</p>
              </Content>
            </Column>
            <Column isSize='1/4'>
              <Box>
                <Title isSize={6}>Tech Stack</Title>
                <div className="tags are-medium profile_techGroup">
                  {techStack}
                </div>
                <Title isSize={6}>Field of Interest</Title>
                <Tag isColor='light' isSize='medium'>{this.state.studentData.fieldOfInterest}</Tag>
              </Box>
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