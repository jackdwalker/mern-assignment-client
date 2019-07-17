import React, { Component } from 'react'
import { setState } from '../WithState'
import { NavbarBrand, Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Icon, Title } from 'bloomer'
import { api } from '../../studentAPI';

function NavBarEndLoggedOut() {
    return (
        <NavbarEnd>
            <NavbarItem href='/login'>Login</NavbarItem>
            <NavbarItem href='/signup'>Signup</NavbarItem>
        </NavbarEnd>
    )
}

class NavBarEndLoggedIn extends Component {
    handleClick = (event) => {
        event.preventDefault()

        api.get('/auth/logout', {
            withCredentials: true
        })
        .then(result => {
            localStorage.setItem('isLoggedIn', false)
            setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <NavbarEnd>
                <NavbarItem href='/'>Edit Profile</NavbarItem>
                <NavbarItem href='/' onClick={this.handleClick}>Logout</NavbarItem>
            </NavbarEnd>
        )
    }
}

export default class Nav extends Component {

    render() {
        let navBarEnd

        if (localStorage.getItem('isLoggedIn') === 'true') {
            navBarEnd = <NavBarEndLoggedIn />
        } else {
            navBarEnd = <NavBarEndLoggedOut />
        }

        return (
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarBrand>
                    <NavbarItem exact href='/'><Title isSize={3}><Icon isSize="medium" className="fas fa-link" />  LinkedOut</Title></NavbarItem>
                </NavbarBrand>
                <NavbarMenu isActive={""} onClick={""}>
                    <NavbarStart>
                        <NavbarItem exact href='/'>Home</NavbarItem>
                        <NavbarItem href='/about'>About</NavbarItem>
                        <NavbarItem href='/viewall'>Browse Profiles</NavbarItem>
                    </NavbarStart>
                    {navBarEnd}
                </NavbarMenu>
            </Navbar>
        )
    }
}