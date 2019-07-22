import React, { Component } from 'react'
import { Box, Content, Title, Button, Media, MediaContent, MediaLeft, MediaRight, Image, Tag, Icon } from "bloomer"
import Gravatar from 'react-gravatar'
import "../../styles/profileEntry.scss"

export default class ProfileEntry extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let bio

    if (this.props.studentData.bio.length > 244) {
      bio = `${this.props.studentData.bio.substring(0, 244)}...`
    } else {
      bio = this.props.studentData.bio
    }

    let seeking

    if (this.props.studentData.seeking[0] != '') {
      seeking = this.props.studentData.seeking.map(seeking =>
        <Title isSize={6} className="profileList_jobType">
          <Icon className="fas fa-check-circle" />
          <span>{seeking}</span>
        </Title>)
    } else {
      seeking = ''
    }

  return (
    <Box className="profileList_entry">
      <Media>
        <MediaLeft>
          <Image className="profileList_image" isSize='128x128' src='https://via.placeholder.com/128x128' />
        </MediaLeft>
        <MediaContent>
          <Content className="profileList_content">
            <div>
              <Title isSize={4} className="profileList_name">{this.props.studentData.name}</Title>
            </div>
            <p className="profileList_blurb">{this.props.studentData.bio.substring(0, 244)}...</p>
          </Content>
          <div className="tags are-small profileList_tagGroup">
            {this.props.studentData.techStack.map(language =>
              <Tag className="is-rounded">{language}</Tag>
            )}
          </div>
        </MediaContent>
        <div className="profileList_right">
          <MediaRight>
            <div className="profileList_jobTypeList">
              {this.props.studentData.seeking.map(seeking =>
                <Title isSize={6} className="profileList_jobType">
                  <Icon className="fas fa-check-circle" />
                  <span>{seeking}</span>
                </Title>
              )}
            </div>
            <div className="profileList_viewProfile">
              <Button className="profileList_viewProfileBttn" href="/profile">View Profile</Button>
            </div>
          </MediaRight>
        </div>
      </Media>
    </Box>
  )
}

}