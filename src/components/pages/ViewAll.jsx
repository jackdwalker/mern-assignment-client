import React, { Component } from 'react'
import Bulma from 'bulma'
import { Section, Columns, Container, Column, Title, Button, PanelIcon, PanelBlock, PanelHeading, Panel, Control, Input } from "bloomer"
import "../../styles/viewall.scss"
import { api } from '../../studentAPI'

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
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    let profileEntry

    if (this.state.isLoading === 'true') {
      profileEntry = <p>Not Loaded</p>
    } else {
      profileEntry = Array.from(this.state.studentData).map(student => <ProfileEntry studentData={student} />)
    }

    return (
      <Section className="profileList_container" isCentered>
        <div className="profileList_backRect"></div>
        <Container>
          <Title className="profileList_title" isSize={3}>View All Graduate Profiles</Title>
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
              {profileEntry}

              {/* Pagination */}
              {/* <PageIndex /> */}
            </Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}