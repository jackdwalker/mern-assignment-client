import React, { Component } from 'react'
import { setState } from '../WithState'
import { NavbarBrand, Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Icon, Title, Container, Button } from 'bloomer'
import { api } from '../../studentAPI';
import "../../styles/nav.scss"

function NavBarEndLoggedOut() {
    return (
        <NavbarEnd>
            <NavbarItem href='/login'>Login</NavbarItem>
            <NavbarItem href='/signup'>
                <Button className="signUpBttn">Sign Up</Button>
            </NavbarItem>
        </NavbarEnd>
    )
}

class NavBarEndLoggedIn extends Component {
    handleClick = (event) => {
        api.get('/auth/logout', {
            withCredentials: true
        })
        .then(result => {
            localStorage.setItem('isLoggedIn', false)
            setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <NavbarEnd>
                <NavbarItem href='/editprofile'>Edit Profile</NavbarItem>
                <NavbarItem onClick={this.handleClick}>Logout</NavbarItem>
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
            <Navbar>
                <Container className="nav_container">
                <NavbarBrand>
                    <NavbarItem className="linkedOut_logo" exact href='/'>
                        <Title isSize={3}><Icon isSize="medium" className="fas fa-link" />  LinkedOut</Title>
                    </NavbarItem>
                    </NavbarBrand>
                    <NavbarMenu>
                        <NavbarStart>
                            <NavbarItem exact href='/'>Home</NavbarItem>
                            <NavbarItem href='/about'>About</NavbarItem>
                            <NavbarItem href='/viewall'>Browse Profiles</NavbarItem>
                        </NavbarStart>
                        {navBarEnd}
                    </NavbarMenu>
                </Container>
            </Navbar>
        )
    }
}