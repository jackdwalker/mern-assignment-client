import React, { Component } from 'react'
import { Box, Content, Title, Button, Media, MediaContent, MediaLeft, MediaRight, Tag, Icon } from "bloomer"
import Gravatar from 'react-gravatar'
import "../../styles/profileEntry.scss"

export default class ProfileEntry extends Component {
  render() {
    let bio

    if (this.props.studentData.bio.length > 244) {
      bio = `${this.props.studentData.bio.substring(0, 244)}...`
    } else {
      bio = this.props.studentData.bio
    }

    let seeking

    if (this.props.studentData.seeking[0] !== '') {
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
            <Gravatar className="profileList_image" md5={this.props.studentData.gravatar} size={128} />
          </MediaLeft>
          <MediaContent>
            <Content className="profileList_content">
              <div>
                <Title isSize={4} className="profileList_name">{this.props.studentData.name}</Title>
              </div>
              <p className="profileList_blurb">{bio}</p>
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
                {seeking}
              </div>
              <div className="profileList_viewProfile">
                <Button className="profileList_viewProfileBttn" studentData={this.props.studentData} href={`/profile/${this.props.studentData._id}`}>View Profile</Button>
              </div>
            </MediaRight>
          </div>
        </Media>
      </Box>
    )
  }
}