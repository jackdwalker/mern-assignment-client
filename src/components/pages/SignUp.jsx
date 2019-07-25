import React, { Component } from 'react'
import { setState } from '../WithState'
import { api } from '../../studentAPI'
import { Title, Icon, FieldBody, Select, FieldLabel, TextArea, Field, Label, Control, Input, Button } from 'bloomer'
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
            fieldOfInterest: 'Front-End',
            techStack: '',
            seeking: '',
            location: 'Brisbane'
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
                    alert('Email has already been registered, please try again.')
                })
        } else {
            alert('Passwords do not match, please try again')
        }
    }

    render() {
        return (
            <div className="signupContainer" >
                <div className="signUp_back_rect"></div>
                <div className="signUp_back_low_rect"></div>
                <div className="signup_small_rect">
                    <Icon className="signupgithub fab fa-github fa-4x" />
                </div>
                <div className="signupLeft">

                </div>
                <div className="signupRight">
                    <div className="signupBox">
                                            <div className="signup_title_container">
                     <Title className="signup_Title" isSize={2}>Create a Graduate Profile</Title>
                     <p className="signup_blurb">Showcase your best work with the other Coder Academy cohorts</p>
                     </div>
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
                                            <Input className="signupInput" type="text" placeholder='Full Twitter URL' name="twitterURL"
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

                            {/* FIELD OF INTEREST */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Field of Interest</Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field>
                                        <Control>
                                            <Select name="fieldOfInterest" value={this.state.fieldOfInterest} onChange={this.handleSingleSelect}>
                                                <option id="frontend" value="Front-End">Front-end</option>
                                                <option id="backend" value="Back-End">Back-end</option>
                                                <option id="frontBack" value="Front-End/Back-End">I like both</option>
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
                                            <option value="Ruby">Ruby</option>
                                            <option value="HTML">HTML</option>
                                            <option value="CSS">CSS</option>
                                            <option value="Javascript">Javascript</option>
                                            <option value="Mongo">Mongo</option>
                                            <option value="Express">Express</option>
                                            <option value="React">React</option>
                                            <option value="Node">Node</option>
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
                                            <option value="Internship">Internship</option>
                                            <option value="Full Time">FT Onsite</option>
                                            <option value="Part Time">PT Onsite</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Unavailable">Unavailable</option>
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
                                                <option value="Brisbane">Brisbane</option>
                                                <option value="Melbourne">Melbourne</option>
                                                <option value="Sydney">Sydney</option>
                                            </Select>
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            <br />

                            {/* SUBMIT BUTTON */}
                            <Field isGrouped>
                                <Control>
                                    <Button isColor='primary' className="createProfileBttn" type="submit">Create Profile</Button>
                                </Control>
                            </Field>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}