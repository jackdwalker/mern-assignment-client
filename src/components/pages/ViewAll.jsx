import React, { Component } from 'react'
import { Section, Columns, Container, Column, Title, Button, PanelBlock, PanelHeading, Panel, Control, Input } from "bloomer"
import "../../styles/viewall.scss"
import { api } from '../../studentAPI'
import Loader from '../layout/Loader'

import ProfileEntry from "../layout/ProfileEntry"

export default class ViewAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,  
      studentData: {}, 
      filter: ""
   }
  }  

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
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

    if (this.state.isLoading === true) {
      profileEntry = <Loader />
    } else if (this.state.filter !== '') {
      let regexp = new RegExp(this.state.filter, 'i')
      let filteredResults = Array.from(this.state.studentData).filter(student => regexp.test(Object.values(student)))
      profileEntry = filteredResults.map(student => <ProfileEntry studentData={student} />)
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
                    <Input isSize='small' placeholder='Name, keywords, tech stack' value={this.state.filter}
                    onChange={this.updateFilter} />
                  </Control>
                </PanelBlock>
                <PanelBlock>
                  <Button className="searchBttn" type="submit" isFullWidth isColor='primary'>Search</Button>
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