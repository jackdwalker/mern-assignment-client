import React from 'react'
import {Columns, Container, Column, Footer, Field, Label,Input, Control, Button} from 'bloomer'

const Foot = () => {
  return (
    <div>
      <Footer id='footer'>
    <Container>
<Columns isCentered>
    <Column isSize='1/4'>
    <ul>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
    </ul>    
    </Column>
    <Column isSize='1/4'>
    <ul>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
        <li><a href="#">Test Link</a></li>
    </ul>      
    </Column>
    <Column isSize='1/3'> 
<Field>
    <Label>Subscribe to Newsletter</Label>
    <Control>
        <Input type="text" placeholder='Text Input' />
    </Control>
        <br />  
        <Control>
        <Button isLink>Submit</Button>
    </Control>
</Field>
    </Column>
</Columns>    
</Container>
</Footer>
    </div>
  )
}

export default Foot