import React from 'react';

import { Item, Label } from 'semantic-ui-react';

export default class PostItem extends React.Component {
    render(){
        return (
            <Item>
                <Item.Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>{this.props.author}</span>
                    </Item.Meta>
                    <Item.Description>No comments</Item.Description>
                    <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }
}