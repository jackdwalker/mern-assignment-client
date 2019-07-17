import React from 'react'
import "../../styles/profile.scss"
import {Container, Columns, Column, Notification, Section, Tag, Box, Image, Icon, Content, Title, Button} from "bloomer"

const Profile = () => {
  return (
    <div>

      <Section>
      <Columns isCentered>
        <Column isSize='1/4'>
          <img className="grad_Photo" src="https://picsum.photos/id/290/480/480" alt={""}/>
          
          <Container isFluid style={{marginTop: "40px"}}>
            <Title isSize={5}>Tech Stack</Title>
          </Container>
        </Column>
        <Column isSize='1/6'>
            <Content>
        <Title isSize={3}>John Smith</Title>

    Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
    <br/><br/>
    Proin sed tellus sed nunc luctus tristique. Curabitur dapibus risus eget urna ullamcorper posuere. Quisque gravida nunc porttitor pellentesque ultricies. Duis ut molestie metus, in fermentum nulla. Vivamus ac porttitor magna. In ultrices aliquam placerat. Nam mattis nunc turpis.
    </Content>

                          <Content style={{float:"right"}}>
        <Button isColor='success' isOutlined>Message Graduate</Button>
</Content>

        </Column>

        <Column isSize="1/4">
          <Title isSize={5}>Tech Stack</Title>
                    <div className="tags are-medium grad_tagGroup">
                        <span className="tag is-danger profileList_tag">Ruby</span>
                        <span className="tag is-warning profileList_tag">Rails</span>
                        <span className="tag is-light profileList_tag">HTML5</span>
                        <span className="tag is-light profileList_tag">CSS3</span>
                        <span className="tag is-link profileList_tag">Javascript</span>
                    </div>
        </Column>

        </Columns>

    </Section>
</div>
  )
}

export default Profile