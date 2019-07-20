import React from 'react'
import { Section, Columns, Container, Column, Title, Button, PanelIcon, PanelBlock, PanelHeading, Panel, Control, Input, Icon} from "bloomer"
import "../../styles/viewall.scss"

import ProfileEntry from "../layout/ProfileEntry"

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
                <Control>
                    <Input isSize='small' placeholder='Search' />
                </Control>
            </PanelBlock>
            <PanelBlock>
                <Button isOutlined isFullWidth isColor='primary'>Search</Button>
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
