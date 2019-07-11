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
        <Columns isGapless>
            <Column isSize={{ mobile: 12, default: 8 }} isGapless className="background-primary is-full-vh">
                <Navbar className="background-primary">
                    <NavbarBrand className="background-primary">
                        <span class="font-secondary">Logo</span>
                    </NavbarBrand>
                </Navbar>
                <Column className="has-text-centered">
                    <Title isSize={3} className="font-secondary">
                        Welcome
                    </Title>
                    <Subtitle isSize={6} className="font-secondary">
                        Please sign in to continue
                    </Subtitle>
                    <Field>
                        <Label className="font-secondary">Email Address</Label>
                        <Control>
                            <Input type="email" placeholder="The place that holds your e-mail" className="font-secondary transparent-background" />
                        </Control>
                    </Field>
                    <Field>
                        <Label className="font-secondary">Password</Label>
                        <Control>
                            <Input type="password" placeholder="We won't watch. Promise (:" className="font-secondary transparent-background fuck-you" />
                        </Control>
                    </Field>
                    <Button isColor="primary" isOutlined className="is-rounded">Submit</Button>
                </Column>
            </Column>
            <Column isSize={{ mobile: 0, default: 4}}>
            </Column>
        </Columns>
    );
}