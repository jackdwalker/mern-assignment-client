import React, { Component } from 'react'
import { setState } from '../WithState'
import { api } from '../../studentAPI'
import { Title, FieldBody, Radio, Select, FieldLabel, TextArea, Field, Label, Control, Input, Button } from 'bloomer'
import { thisExpression } from '@babel/types';
import "../../styles/login.scss"

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            linkedInURL: '',
            websiteURL: '',
            twitterURL: '',
            githubURL: '',
            bio: '',
            fieldOfInterest: 'frontEnd',
            techStack: '',
            seeking: '',
            location: 'brisbane',
            hireable: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSingleSelect = (event) => {
        console.log(event.target.options)
        this.setState({
            [event.target.name]: Array.from(event.target.options).filter(o => o.selected).map(o => o.value)[0]
        })
    }

    handleMultipleSelect = (event) => {
        this.setState({
            [event.target.name]: Array.from(event.target.options).filter(o => o.selected).map(o => o.value)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.confirmPassword) {
            api.post('/auth/register',
                {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name,
                    linkedInURL: this.state.linkedInURL,
                    websiteURL: this.state.websiteURL,
                    twitterURL: this.state.twitterURL,
                    githubURL: this.state.githubURL,
                    bio: this.state.bio,
                    fieldOfInterest: this.state.fieldOfInterest,
                    techStack: this.state.techStack,
                    seeking: this.state.seeking,
                    location: this.state.location,
                    hireable: this.state.hireable
                },
                {
                    withCredentials: true
                })
                .then(result => {
                    localStorage.setItem('isLoggedIn', true)
                    setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
                    this.props.history.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            alert('Passwords do not match, please try again')
        }
    }

    render() {
        return (
            <div className="signupContainer" >
                <div className="signupLeft">
                </div>
                <div className="signupRight">
                    <div className="signupBox">
                        <Title className="signup_Title" isSize={4}>Create a Graduate Profile</Title>
                        <br />
                        <form onSubmit={this.handleSubmit}>

                            {/* FULL NAME */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Full Name</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='Full Names' value={this.state.name} name="name"
                                                onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* EMAIL */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Email</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='Contact email address' value={this.state.email}
                                                name="email" onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* PASSWORD */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Password</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="password" placeholder="We won't look. Promise!" value={this.state.password}
                                                name="password" onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* CONFIRM PASSWORD */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Confirm Password</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="password" placeholder="We won't look. Promise!" value={this.state.confirmPassword}
                                                name="confirmPassword" onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* PERSONAL WEBSITE */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Personal Website</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='Personal website URL' name="websiteURL"
                                                value={this.state.websiteURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* GITHUB */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Github</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='http://...' name="githubURL"
                                                value={this.state.githubURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* LINKEDIN */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>LinkedIn</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='LinkedIn URL' name="linkedInURL"
                                                value={this.state.linkedInURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* TWITTER */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Twitter</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="signupInput" type="text" placeholder='Your Twitter account handle' name="twitterURL"
                                                value={this.state.twitterURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* BIO */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Bio</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field>
                                        <Control>
                                            <TextArea className="signupInput" placeholder='Your goals, achievements in the course, what you are interested in, the direction you want to take your career'
                                                name="bio" value={this.state.bio} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* UPLOAD IMAGE FILE */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Photo:</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <div class="file has-name">
                                        <label class="file-label">
                                            <input class="file-input" type="file" name="resume" />
                                            <span class="file-cta">
                                                <span class="file-icon">
                                                    <i class="fas fa-upload"></i>
                                                </span>
                                                <span class="file-label">
                                                    Select JPG / PNG
                                            </span>
                                            </span>
                                            <span class="file-name">
                                                filename.png
                                        </span>
                                        </label>
                                    </div>
                                </FieldBody>
                            </Field>

                            {/* FIELD OF INTEREST */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Field of Interest</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field>
                                        <Control>
                                            <Select name="fieldOfInterest" value={this.state.fieldOfInterest} onChange={this.handleSingleSelect}>
                                                <option id="frontend" value="frontEnd">Front-end</option>
                                                <option id="backend" value="backEnd">Back-end</option>
                                                <option id="frontBack" value="both">I like both</option>
                                            </Select>
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* TECH STACK */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Tech Stack</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <div class="select is-multiple">
                                        <select multiple size="3" name="techStack" value={this.state.techStack} onChange={this.handleMultipleSelect}>
                                            <option value="ruby">Ruby</option>
                                            <option value="html">HTML</option>
                                            <option value="css">CSS</option>
                                            <option value="javascript">Javascript</option>
                                            <option value="mongo">Mongo</option>
                                            <option value="express">Express</option>
                                            <option value="react">React</option>
                                            <option value="node">Node</option>
                                        </select>
                                    </div>
                                </FieldBody>
                            </Field>

                            {/* SEEKING */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Seeking</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <div class="select is-multiple">
                                        <select multiple size="3" name="seeking" value={this.state.seeking} onChange={this.handleMultipleSelect}>
                                            <option value="internship">Internship</option>
                                            <option value="fullTime">FT Onsite</option>
                                            <option value="partTime">PT Onsite</option>
                                            <option value="contract">Contract</option>
                                            <option value="remote">Remote</option>
                                            <option value="unavailable">Unavailable</option>
                                        </select>
                                    </div>
                                </FieldBody>
                            </Field>

                            {/* LOCATION */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Location</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field>
                                        <Control>
                                            <Select name="location" value={this.state.location} onChange={this.handleSingleSelect}>
                                                <option value="brisbane">Brisbane</option>
                                                <option value="melbourne">Melbourne</option>
                                                <option value="sydney">Sydney</option>
                                            </Select>
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* HIREABLE */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Hireable?</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Control>
                                        <Radio name="hireable" value="yes" onClick={this.handleChange}> Yes </Radio>
                                        <Radio name="hireable" value="no" onClick={this.handleChange}> No </Radio>
                                    </Control>
                                </FieldBody>
                            </Field>

                            <br />

                            {/* SUBMIT BUTTON */}
                            <Field isGrouped>
                                <Control>
                                    <Button isColor='primary' type="submit">Create Profile</Button>
                                </Control>
                            </Field>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}