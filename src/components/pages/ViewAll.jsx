import React from 'react'
import Bulma from 'bulma'
import { Section, Columns, Container, Column, Title, Button, PanelIcon, PanelBlock, PanelHeading, Panel, Control, Input} from "bloomer"
import "../../styles/viewall.scss"

import ProfileEntry from "../layout/ProfileEntry"
import PageIndex from "../layout/PageIndex"

const ViewAll = () => {
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
          <ProfileEntry />
          <ProfileEntry />
          <ProfileEntry />

          {/* Pagination */}
          {/* <PageIndex /> */}
          </Column>
        </Columns>
      </Container>
      </Section>
  )
}

export default ViewAll
