import React, { Component } from 'react'
import { setState } from '../WithState'
import { Title, Field, Label, Control, Input, Button } from 'bloomer'
import { api } from '../../studentAPI'
import "../../styles/login.scss"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        api.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        }, {
            withCredentials: true
        })        
        .then(result => {
            localStorage.setItem('isLoggedIn', true)
            setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
            this.props.history.push('/')
        })
        .catch(function(error){
            console.log(error)
        })
    }
    
    render() { 
        return (
            <div className="loginContainer">
                <div className="loginLeft"></div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form onSubmit={this.handleSubmit}>
                            <Title className="login_Title" isSize={4}>Sign into your account</Title>
                            <br />
                            <Field>
                                <Label>Email</Label>
                                <Control>
                                    <Input className="loginInput" isColor='success' type="email" name="email"
                                    onChange={this.handleChange} value={this.state.email}
                                    placeholder="Your Coder Academy email account" />
                                </Control>
                            </Field>
                            <Field>
                                <Label>Password</Label>
                                <Control>
                                    <Input className="loginInput" isColor='success' type="password"  name="password"
                                    onChange={this.handleChange} value={this.state.password}
                                    placeholder="We won't look, promise!" />
                                </Control>
                            </Field>
                            <br />
                            <Field isGrouped>
                                <Control>
                                    <Button className="loginBttn" isColor='primary' type='submit'>Log In</Button>
                                </Control>
                            </Field>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}