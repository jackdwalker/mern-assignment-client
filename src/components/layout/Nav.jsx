import React, { Component } from 'react'
import { NavbarBrand, Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Icon, Title} from 'bloomer'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
<Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
<NavbarBrand>
    <NavbarItem exact href='/'><Title isSize={3}><Icon isSize="medium" className="fas fa-link"/>  LinkedOut</Title></NavbarItem>
</NavbarBrand>
<NavbarMenu isActive={""} onClick={""}>
    <NavbarStart>
        <NavbarItem exact href='/'>Home</NavbarItem>
        <NavbarItem href='/about'>About</NavbarItem>
        <NavbarItem href='/viewall'>Browse Profiles</NavbarItem>
    </NavbarStart>
    <NavbarEnd>
        <NavbarItem href='/login'>Login</NavbarItem>
        <NavbarItem href='/signup'>Signup</NavbarItem>
    </NavbarEnd>
</NavbarMenu>
</Navbar>    
)
  }
}