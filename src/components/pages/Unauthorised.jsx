import React from 'react'
import "../../styles/Unauthorised.scss"
import { Section, Columns, Container, Column, Title, Button, PanelBlock, PanelHeading, Panel, Control, Input, Image } from "bloomer"
import Notify from '../../assets/undraw_notify_88a4.svg'

const Unauthorised = () => {
  return (
    <div>
      <Section className='unauthorised_container'>
        <Title className='unauthorised_title' isSize={1}>401 unauthorised error</Title>
        <Title className='unauthorised_title' isSize={4}>unable to view this page</Title>
        <Image className='notify_image' src={Notify}/>
      </Section>

    </div>
  )
}

export default Unauthorised
