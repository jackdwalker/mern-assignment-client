import React, { Component } from 'react'
import "../../styles/profile.scss"
import { Columns, Column, Section, Tag, Icon, Content, Title } from "bloomer"
import { api } from '../../studentAPI'
import Loader from '../layout/Loader'
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

    // Seeking Status Conditional Rendering
    let seeking

    if (this.state.studentData.seeking) {
      seeking = this.state.studentData.seeking.map(seeking =>
        <Tag isColor='light' isSize='medium'>{seeking}</Tag>
      )
    } else {
      seeking = ''
    }

    // Tech Stack Conditional Rendering
    let techStack

    if (this.state.studentData.techStack) {
      techStack = this.state.studentData.techStack.map(language =>
        <Tag>{language}</Tag>
      )
    } else {
      techStack = ''
    }

    // Github Conditional Render
    let github

    if (this.state.studentData.githubURL !== '') {
      github =
        <a className="profile_iconLink" href={this.state.studentData.githubURL}>
          <Icon isSize="large" className="fab fa-github fa-2x" />
        </a>
    } else {
      github = ''
    }

    // Twitter Conditional Render
    let twitter

    if (this.state.studentData.twitterURL !== '') {
      twitter =
        <a className="profile_iconLink" href={this.state.studentData.twitterURL}>
          <Icon isSize="large" className="fab fa-twitter fa-2x" />
        </a>
    } else {
      twitter = ''
    }

    // LinkedIn Conditional Render
    let linkedIn

    if (this.state.studentData.linkedInURL !== '') {
      linkedIn =
        <a className="profile_iconLink" href={this.state.studentData.linkedInURL}>
          <Icon isSize="large" className="fab fa-linkedin-in fa-2x" />
        </a>
    } else {
      linkedIn = ''
    }

    // Personal Website Conditional Render
    let personalWebsite
    if (this.state.studentData.websiteURL !== '') {
      personalWebsite =
        <a className="profile_iconLink" href={this.state.studentData.websiteURL}>
          <Icon isSize="large" className="fas fa-code fa-2x" />
        </a>
    } else {
      personalWebsite = ''
    }

    // Contact Email Conditional Render
    let email

    if (this.state.studentData.email !== '') {
      email =
        <a className="profile_iconLink" href={`mailto:${this.state.studentData.email}`}>
          <Icon isSize="large" className="fas fa-envelope-open-text fa-2x" />
        </a>
    } else {
      email = ''
    }

    // Whole Profile Conditional Render
    let profile

    if (this.state.isLoading === true) {
      profile =
        <Section className="profile_Container">
          <div className="profile_backrect"></div>
          <div className="profile_frontrect"></div>
          <Loader />
        </Section>
    } else {
      profile =
        <Section className="profile_Container">
          <div className="profile_backrect"></div>
          <div className="profile_frontrect"></div>
          <Columns isCentered>
            <Column isSize='1/4' offset="2">
              <Gravatar className="profile_image" md5={this.state.studentData.gravatar} size={640} />
              <div>
                <Title className="profile_name" isSize={3}>{this.state.studentData.name}</Title>
                <Title className="profile_location" isSize={5}>{this.state.studentData.location}</Title>
                <Title isSize={6} className="profile_smalltitle">Seeking</Title>
                <div className="tags are-medium profile_techGroup">
                  {seeking}
                </div>
                <div className="profile_linkGroup">
                  {personalWebsite}
                  {github}
                  {twitter}
                  {linkedIn}
                  {email}
                </div>
              </div>
            </Column>
            <Column isSize='1/2'>
              <Content className="profile_bio">{this.state.studentData.bio}</Content>
            </Column>
            <Column isSize='1/4'>
              <div>
                <Title isSize={6} className="profile_smalltitle">Tech Stack</Title>
                <div className="tags are-medium profile_techGroup">
                  {techStack}
                </div>
                <Title isSize={6} className="profile_smalltitle">Field of Interest</Title>
                <Tag isColor='light' isSize='medium'>{this.state.studentData.fieldOfInterest}</Tag>
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