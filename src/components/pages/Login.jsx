import React from 'react'
import {Title, Field, Label, Control, Input, Button} from 'bloomer'

const Login = () => {
  return (
<div className="loginContainer">
    <div className="loginLeft"></div>
    <div className="loginRight">
        <div className="loginBox">
            <Title isSize={4}>Sign into your account</Title>
            <br/>
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
        <br/>

        <Field isGrouped>
            <Control>
                <Button isColor='primary'>Create Profile</Button>
            </Control>
        </Field>
    </div>
    </div>
</div>
  )
}

export default Login
