import React, { Component } from 'react'
import { Section, Columns, Container, Column, Title, Button, PanelBlock, PanelHeading, Panel, Control, Input } from "bloomer"
import "../../styles/viewall.scss"
import { api } from '../../studentAPI'

import ProfileEntry from "../layout/ProfileEntry"

export default class ViewAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,  
      studentData: {}, 
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
              <Panel className="searchpanel">
                <PanelHeading>Search Graduates</PanelHeading>
                <PanelBlock>
                  <Control hasIcons='left'>
                    <Input isSize='small' placeholder='Name, keywords, tech stack' />
                  </Control>
                </PanelBlock>
                <PanelBlock>
                  <Button className="searchBttn" type="submit" isFullWidth isColor='primary'> Search</Button>
                </PanelBlock>
              </Panel>
            </Column>
            <Column isSize="3/4">
              {profileEntry}
            </Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}