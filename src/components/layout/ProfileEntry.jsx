import React from 'react'
import { Box, Content, Title, Button, Media, MediaContent, MediaLeft, MediaRight, Image, Icon} from "bloomer"
import "../../styles/viewall.scss"

const ProfileEntry = () => {
  return (
            <Box className="profileList_entry">
              <Media>
                <MediaLeft>
                    <Image className="profileList_image" isSize='128x128' src='https://via.placeholder.com/128x128' />
                </MediaLeft>
                <MediaContent>
                    <Content>
                      <div>
                        <Title isSize={4} className="profileList_name">Student Name</Title>
                        <Title isSize={6} className="profileList_gradType">Fast-Track Graduate</Title>
                      </div>
                        <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed eros quis est eleifend imperdiet sit amet quis est. Pellentesque id molestie metus. Cras imperdiet ut odio in tristique. Aenean nec lectus velit... (more) </p>
                    </Content>
                    <div className="tags are-small profileList_tagGroup">
                        <span className="tag is-rounded is-danger profileList_tag">Ruby</span>
                        <span className="tag is-rounded is-warning profileList_tag">Rails</span>
                        <span className="tag is-rounded is-light profileList_tag">HTML5</span>
                        <span className="tag is-rounded is-light profileList_tag">CSS3</span>
                        <span className="tag is-rounded is-link profileList_tag">Javascript</span>
                    </div>
                </MediaContent>
                <div className="profileList_right">
                  <MediaRight>
                    <div className="profileList_jobTypeList">
                        <Title isSize={6} className="profileList_jobType">
                          <Icon className="fas fa-check-circle" />
                          <span>Internship</span>
                        </Title>
                        <Title isSize={6} className="profileList_jobType">
                          <Icon className="fas fa-check-circle" />
                          <span>Full-time</span>
                        </Title>
                      </div>
                    <div className="profileList_viewProfileBttn">
                      <Button isColor='success'>View Profile</Button>
                    </div>
                  </MediaRight>
                </div>

                </Media>
            </Box>

  )
}

export default ProfileEntry
