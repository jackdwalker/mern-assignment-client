import React from 'react'
import {Columns,NavbarItem, Container, Column, Footer, Field, Label,Input, Control, Button, Title, Icon} from 'bloomer'
import "../../styles/foot.scss"

const Foot = () => {
  return (
    <div>
      <Footer id='footer'>
    <Container>
<Columns isCentered>
    <Column isSize='1/4'>
    <a className="linkedOut_link" href='/'>
            <Title className="linkedOut_logo" isSize={3}>
                <Icon isSize="medium" className="fas fa-link" />  LinkedOut
            </Title>
    </a>
    </Column>
    <Column isSize='1/4'>
    <Title className="footerTitle" isSize="5">Our Graduates</Title>
    <ul>
        <li><a className="footerLink" href="#">Browse Graduates</a></li>
        <li><a className="footerLink" href="#">Sign Up for Profile</a></li>
        <li><a className="footerLink" href="#">Log into Account</a></li>
        <li><a className="footerLink" href="#">Terms & Conditions</a></li>
    </ul>    
    </Column>
    <Column isSize='1/4'>
    <Title className="footerTitle" isSize="5">About Coder Academy</Title>
    <ul>
        <li><a className="footerLink" href="#">Who we are</a></li>
        <li><a className="footerLink" href="#">Our Courses</a></li>
        <li><a className="footerLink" href="#">Testimonials</a></li>
        <li><a className="footerLink" href="#">Contact us</a></li>
    </ul>      
    </Column>
    <Column isSize='1/3'> 
<Field>
    <Label className="newsLetter_label">Subscribe to Newsletter</Label>
    <Control>
        <Input type="text" placeholder='Text Input' />
    </Control>
        <br />  
        <Control>
        <Button className="submitBttn" isLink>Submit</Button>
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
