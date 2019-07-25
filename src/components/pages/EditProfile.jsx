import React, { Component } from 'react'
import setState from '../WithState'
import { Title, FieldBody, Icon, Select, FieldLabel, TextArea, Field, Label, Control, Input, Button } from 'bloomer'
import "../../styles/login.scss"
import { api } from '../../studentAPI';

export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentData: {}
        }
    }

    componentDidMount() {
        api.get('/students/edit-profile', 
        {
            withCredentials: true
        })
            .then(result => {
                this.setState({ studentData: result.data })
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.props.history.push('/401')
                }
            })
    }

    handleChange = (event) => {
        this.setState({
            studentData: {...this.state.studentData, [event.target.name]: event.target.value }
        })
    }

    handleSingleSelect = (event) => {
        console.log(event.target.options)
        this.setState({
            studentData: {...this.state.studentData, [event.target.name]: Array.from(event.target.options).filter(o => o.selected).map(o => o.value)[0] }
        })
    }

    handleMultipleSelect = (event) => {
        this.setState({
            studentData: {...this.state.studentData, [event.target.name]: Array.from(event.target.options).filter(o => o.selected).map(o => o.value) }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        api.post('/students/update-profile', {
            name: this.state.studentData.name,
            linkedInURL: this.state.studentData.linkedInURL,
            websiteURL: this.state.studentData.websiteURL,
            twitterURL: this.state.studentData.twitterURL,
            githubURL: this.state.studentData.githubURL,
            bio: this.state.studentData.bio,
            fieldOfInterest: this.state.studentData.fieldOfInterest,
            techStack: this.state.studentData.techStack,
            seeking: this.state.studentData.seeking,
            location: this.state.studentData.location,
            _id: this.state.studentData._id
        },
        {
            withCredentials: true
        })
        .then(result => {
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                this.props.history.push('/401')
            }
        })
    }

    handleDeleteProfile = (event) => {
        event.preventDefault()

        let deleteConfirmation = window.confirm('DANGER: Are you sure you want to delete your account? There is no going back!')
        if (deleteConfirmation) {
            api.post('/students/delete-profile', 
            {
                _id: this.state.studentData._id
            },
            {
                withCredentials: true
            })
            .then(result => {
                localStorage.setItem('isLoggedIn', false)
                setState({ isLoggedIn: localStorage.getItem('isLoggedIn') })
                this.props.history.push('/')
                window.location.reload()
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.props.history.push('/401')
                }
            })
        }
    }

    render() {
        return (
            <div className="editProfileContainer" >
                <div className="editProfile_back_rect"></div>
                <div className="editProfile_front_rect"></div>
                <div className="editProfile_haticon">
                    <Icon className="edit_wizardHat fas fa-hat-wizard fa-3x" />
                </div>
                <div className="editProfile_giticon">
                    <Icon className="edit_githubalt fab fa-github-alt fa-3x" />
                </div>
                <div className="editProfileLeft">
                </div>
                <div className="editProfileRight">
                    <div className="editProfileBox">
                        <div className="editProfile_rect"></div>

                        <Title className="editProfile_Title" isSize={2}>Edit Your Profile</Title>
                        <br />

                        <form onSubmit={this.handleSubmit}>
                            {/* FULL NAME */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Full Name: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="editProfileInput" type="text" placeholder='Given Names' name="name"
                                            value={this.state.studentData.name} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* WEBSITE */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Personal Website: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="editProfileInput" type="text" placeholder='http://...' name="websiteURL"
                                            value={this.state.studentData.websiteURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* GITHUB  */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Github: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="editProfileInput" type="text" placeholder='Github URL' name="githubURL"
                                            value={this.state.studentData.githubURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* LINKEDIN */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>LinkedIn: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="editProfileInput" type="text" placeholder='LinkedIn URL' name="linkedInURL"
                                            value={this.state.studentData.linkedInURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* TWITTER */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Twitter: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field isGrouped>
                                        <Control isExpanded>
                                            <Input className="editProfileInput" type="text" placeholder='Full Twitter URL' name="twitterURL"
                                            value={this.state.studentData.twitterURL} onChange={this.handleChange} />
                                        </Control>
                                    </Field>
                                </FieldBody>
                            </Field>

                            {/* BIO */}
                            <Field isHorizontal>
                                <FieldLabel isNormal>
                                    <Label>Bio: </Label>
                                </FieldLabel>
                                <FieldBody>
                                    <Field>
                                        <Control>
                                            <TextArea className="editProfileInput" placeholder='Your goals, achievements in the course, what you are interested in, the direction you want to take your career'
                                                name="bio" value={this.state.studentData.bio} onChange={this.handleChange} />
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

                            {/* SUBMIT BUTTON */}
                            <Field isGrouped className="editProfileButton">
                                <Control className="editProfileButton">
                                    <Button className="saveProfileBttn" isColor='primary' type="submit">Save Profile</Button>
                                </Control>
                                <Control className="editProfileButton">
                                    <Button className="deleteProfileBttn" isColor='primary' onClick={this.handleDeleteProfile}>Delete Profile</Button>
                                </Control>
                            </Field>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}