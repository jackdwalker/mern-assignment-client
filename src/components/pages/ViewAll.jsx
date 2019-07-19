import React, { Component } from 'react'
import { Section, Columns, Container, Column, Title, Button, PanelIcon, PanelBlock, PanelHeading, Panel, Control, Input } from "bloomer"
import "../../styles/viewall.scss"
import { api } from "../../studentAPI"

import ProfileEntry from "../layout/ProfileEntry"
import PageIndex from "../layout/PageIndex"

export default class ViewAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      studentData: {}
    }
  }

  componentDidMount() {
    api.get('/students/all-students')
      .then(result => {
        this.setState({ 
          isLoading: false,
          studentData: result.data
        })
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    let ProfileEntry

    if (this.state.isLoading === true) {
      ProfileEntry = <p>Not Loaded</p>
    } else {
      ProfileEntry = 
      <div>
        <ProfileEntry name={this.state.studentData['name'][0]} />
        <ProfileEntry name={this.state.studentData['name'][1]} />
        <ProfileEntry name={this.state.studentData['name'][2]} />
      </div>
    }


    return (
      <Section isCentered>
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

              {/* Profile List Entry */}
              {ProfileEntry} 

              {/* Pagination */}
              <PageIndex />
            </Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}