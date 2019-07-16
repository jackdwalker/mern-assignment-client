import React from 'react'
import {Title, FieldBody, Radio, Select, FieldLabel, TextArea, Field, Label, Control, Input, Button} from 'bloomer'

const SignUp = () => { 
  return (
<div className="signupContainer" >
    <div className="signupLeft">
        <img src="/src/assets/tech-meeting-flatlay.jpg" alt="test"/>
    </div>
        <div className="signupRight">
        <div className="signupBox">
        <Title isSize={3}>Create a Profile</Title>
        <br/>
        
        {/* GIVEN NAMES */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Given Names*</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='Given Names' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* SURNAME */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Surname*</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='Surname' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* EMAIL */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Email*</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='Contact email address' value=""/>
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
                        <Input className="signupInput" type="password" placeholder='' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* PASSWORD CONFIRM */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Confirm Password</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="password" placeholder='' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* WEBSITE */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Github</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='http://...' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* LinkedIn */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>LinkedIn</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='LinkedIn URL' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* Twitter */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Twitter</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="signupInput" type="text" placeholder='Your Twitter account handle' value=""/>
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
                        <TextArea className="signupInput" placeholder='Your goals, achievements in the course, what you are interested in, the direction you want to take your career' />
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
                        <Select>
                            <option id="frontend" value="">Front-end</option>
                            <option id="backend" value="">Back-end</option>            
                            <option id="frontBack" value="">I like both</option>
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
                <select multiple size="3">
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
                <select multiple size="3">
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
                        <Select>
                            <option value="">Brisbane</option>
                            <option value="">Melbourne</option>            
                            <option value="">Sydney</option>
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
                    <Radio name="hireable"> Yes </Radio>
                    <Radio name="hireable"> No </Radio>
                </Control>
            </FieldBody>
        </Field>
        <br/>
        {/* SUBMIT BUTTON */}
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

export default SignUp
