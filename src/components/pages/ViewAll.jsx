import React from 'react'
import Bulma from 'bulma'
import { Box, Columns, Container, Column, Select, Content, Title, Button, Pagination, PageControl, PageList, Page, PageEllipsis, PageLink, PanelIcon, PanelBlock, PanelHeading, Panel, Control, Media, MediaContent, MediaLeft, MediaRight, Input, Image, Icon} from "bloomer"

const ViewAll = () => {
  return (
      <Container>
        <Title isSize={3}>View All Profiles</Title>
        <Columns isCentered>
          <Column isSize='1/5'>
                    <Panel>
            <PanelHeading>Search Graduates</PanelHeading>
            <PanelBlock>
                <Control hasIcons='left'>
                    <Input isSize='small' placeholder='Search' />
                </Control>
            </PanelBlock>
            <PanelBlock isActive>
                <PanelIcon className="fas fa-angle-double-right" />
                Internships
            </PanelBlock>
            <PanelBlock>
                <PanelIcon className="fas fa-angle-double-right" />
                Remote
            </PanelBlock>
            <PanelBlock>
                <PanelIcon className="fas fa-angle-double-right" />
                Contract
            </PanelBlock>
            <PanelBlock>
                <PanelIcon className="fas fa-angle-double-right" />
                Full-Time
            </PanelBlock>
            <PanelBlock>
                <PanelIcon className="fas fa-angle-double-right" />
                Part-Time
            </PanelBlock>
            <PanelBlock>
                <Button isOutlined isFullWidth isColor='primary'> Reset Search Filters</Button>
            </PanelBlock>
        </Panel>
          </Column>
          <Column isSize="3/4">
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
                  <div className="tags are-small profileList_techTags">
                      <span className="tag is-rounded is-danger profileList_tag">Ruby</span>
                      <span className="tag is-rounded is-warning">Rails</span>
                      <span className="tag is-rounded is-light">HTML5</span>
                      <span className="tag is-rounded is-light">CSS3</span>
                      <span className="tag is-rounded is-link">Javascript</span>
                  </div>
              </MediaContent>
              <MediaRight>
        <Button isColor='success'>View Profile</Button>
              </MediaRight>
            </Media>
          </Column>
        </Columns>
      </Container>
  )
}

export default ViewAll
