import React from 'react'
import "../../styles/Error.scss"
import { Section, Title, Image } from "bloomer"
import Notify from '../../assets/undraw_notify_88a4.svg'

const Unauthorised = () => {
  return (
    <div>
      <Section className='unauthorised_container'>
        <Title className='unauthorised_title' isSize={1}>401 - Unauthorised error</Title>
        <Title className='unauthorised_title' isSize={4}>Unable to view this page</Title>
        <Image className='notify_image' src={Notify}/>
      </Section>

    </div>
  )
}

export default Unauthorised
