import React from 'react'
import './App.css'
import 'bloomer'
import { Columns } from 'bloomer/lib/grid/Columns';
import { Container } from 'bloomer/lib/layout/Container';
import { Column } from 'bloomer/lib/grid/Column';
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar';
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand';
import { Title } from 'bloomer/lib/elements/Title';
import { Content } from 'bloomer/lib/elements/Content';
import { Button } from 'bloomer/lib/elements/Button';
import { Section } from 'bloomer/lib/layout/Section';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Input } from 'bloomer/lib/elements/Form/Input';

export default function LoginSignUp() {
    return (
       <Column className="has-text-centered big-margin-top">
            <Title isSize={3} className="font-primary">Welcome!</Title>
            <Subtitle isSize={6} className="font-primary">Please register to continue</Subtitle>
            <Field className="small-margin-top">
                <Label className="font-primary">Email Address</Label>
                <Control>
                    <Input type="email" placeholder="The place that stores your e-mail" />
                </Control>
            </Field>
            <Field>
                <Label className="font-primary">Password</Label>
                <Control>
                    <Input type="email" placeholder="We won't look, promise!" />
                </Control>
            </Field>
            <Field>
                <Label className="font-primary">Confirm Password</Label>
                <Control>
                    <Input type="email" placeholder="We won't look, promise!" />
                </Control>
            </Field>
            <Button className="font-primary small-margin-top" isOutlined>Submit</Button>
       </Column>
    );
}