import React from 'react'
import { Container, Hero, HeroBody, Title, Section, Columns, Column, Card, CardImage, CardContent, Content, Image, Media, Button, MediaLeft, MediaContent } from 'bloomer'
import '../../styles/home.scss'

import local_devs_image from "../../assets/undraw_landing_page_q6hh.svg"
import jobReady_image from "../../assets/undraw_software_engineer_lvl5.svg"
import joinNetwork_image from "../../assets/undraw_art_museum_8or4.svg"
import whyUs_image from "../../assets/undraw_road_sign_mfpo.svg"
import expect_image from "../../assets/undraw_online_friends_x73e.svg"
const Home = () => {
    return (
        <div>
                            <div className="bg_rect"></div>

            <Hero className="hero_full_contain" isSize='medium'>
                <div className="hero_back_rect"></div>
                <div className="hero_rectangle"></div>
                <div className="hero_front_rect"></div>
                <div className="hero_small_front_rect"></div>
                <HeroBody>
                <Container className="hero_container">
                <Columns>
                    <Column isSize='1/2'>
                        <Container hasTextAlign='centered'>
                            <Title className="hero_Title" isSize={1}>Coder Academy <br/>Talent Board</Title>
                            <p className="hero_blurb">Matching our Graduates of <br/>Fast-track and Gen-Tech Diplomas <br/>with Internship opportunities <br/>in Brisbane, Melbourne and Sydney</p>
                            <Button isSize={"medium"} className='browseBttn'>Start Browsing</Button>
                        </Container>
                    </Column>
                    <Column isSize='1/2'></Column>
                </Columns>
                </Container>
                </HeroBody>
            </Hero>
            <br /><br />
            <Section>
                <Columns isCentered>
                    <Column isSize='1/4'>
                        <Card>
                            <CardImage>
                            <Image isRatio="3:2" src={local_devs_image} />
                            </CardImage>
                            <CardContent>
                                <Content>
                                    <Title isSize={4}>Local Developers</Title>
                                    Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.        </Content>
                            </CardContent>
                        </Card>
                    </Column>
                    <Column isSize='1/4'>
                        <Card>
                            <CardImage>
                                <Image isRatio="3:2" src={jobReady_image} />
                            </CardImage>
                            <CardContent>
                                <Content>
                                    <Title isSize={4}>Job-ready skills</Title>
                                    Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.        </Content>
                            </CardContent>
                        </Card>          </Column>
                    <Column isSize='1/4'>
                        <Card>
                            <CardImage>
                                <Image isRatio="3:2" src={joinNetwork_image} />
                            </CardImage>
                            <CardContent>
                                <Content>
                                    <Title isSize={4}>Join our network</Title>
                                    Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.        </Content>
                            </CardContent>
                        </Card>          </Column>

                </Columns>
            </Section>

            <br /><br />
            {/* <Section>
                <p style={{ textAlign: "center", textTransform: "uppercase" }}>Testimonials</p>
                <Title hasTextAlign='centered' isSize={2}>What are people saying about our graduates</Title>
                <br /><br />
                <Columns isCentered>
                    <Column isSize='1/4'>
                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            </p>
                                </Content>
                            </MediaContent>
                        </Media>
                    </Column>
                    <Column isSize='1/4'>
                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            </p>
                                </Content>
                            </MediaContent>
                        </Media>
                    </Column>

                    <Column isSize='1/4'>
                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            </p>
                                </Content>
                            </MediaContent>
                        </Media>
                    </Column>
                </Columns>
            </Section> */}
            <Section>
                <Columns isCentered>
                    <Column isSize='1/4' offset="2">
                        <Image isRatio="4:3" src={whyUs_image} />
                    </Column>
                    <Column isSize='1/2'>
                        <Content>
                            <Title isSize={2}>Why Coder Academy grads?</Title>
                            <br />
                            Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
<br /><br />
                            Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
                            
</Content>
                    </Column>
                </Columns>
            </Section>
            <br /><br />
            <Section>
                <Columns isCentered>
                    <Column isSize='1/2'>
                        <Content>
                            <Title isSize={2}>What can you expect?</Title>
                            <br />
                            Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
<br /><br />
                            Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
                            
</Content>
                    </Column>
                    <Column isSize='1/4' offset="2">
                        <Image isRatio="4:3" src={expect_image} />
                    </Column>

                </Columns>
            </Section>
            <br /><br />
        </div>
    )
}

export default Home
