import React, { Component } from 'react'
import { Title, Field, Label, Control, Input, Button } from 'bloomer'

export default class Login extends Component {
    
    render() { 
        return (
            <div className="loginContainer">
                <div className="loginLeft"></div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form>
                            <Title isSize={4}>Sign into your account</Title>
                            <br />
                            <Field>
                                <Label>Email</Label>
                                <Control>
                                    <Input className="loginInput" isColor='success' placeholder='' value='Your Coder Academy account' />
                                </Control>
                            </Field>
                            <Field>
                                <Label>Password</Label>
                                <Control>
                                    <Input className="loginInput" isColor='success' type="password" placeholder='' />
                                </Control>
                            </Field>
                            <br />
                            <Field isGrouped>
                                <Control>
                                    <Button isColor='primary'>Create Profile</Button>
                                </Control>
                            </Field>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}