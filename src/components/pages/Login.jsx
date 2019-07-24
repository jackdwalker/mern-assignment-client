import React, { Component } from 'react'
import { setState } from '../WithState'
import { Title, Field, Label, Icon, Control, Input, Button } from 'bloomer'
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
        },
        {
            withCredentials: true
        })        
        .then(result => {
            localStorage.setItem('isLoggedIn', true)
            setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
            this.props.history.push('/#')
        })
        .catch(error => {
            if(error.response.status === 401) {
                alert('Invalid username or password please try again')
            }
        })
    }
    
    render() { 
        return (
            <div className="loginContainer">
                <div className="login_back_rect"></div>
                <div className="login_front_rect"></div>
                <div className="login_laptop">
                    <Icon className="loginGradCap fas fa-laptop-code fa-2x" />
                </div>
                <div className="login_gradcap">
                   <Icon className="loginLaptop fas fa-graduation-cap fa-2x" />
                </div>

                <div className="loginLeft">
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form onSubmit={this.handleSubmit}>
                            <Title className="login_Title" isSize={2}>Log in to your account</Title>
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
                                    <Button className="loginBttn" isColor='primary' type='submit' to="/">Log In</Button>
                                </Control>
                            </Field>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}