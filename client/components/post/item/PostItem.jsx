import React from 'react';

export default class PostItem extends React.Component {
    render(){
        return (
            <li>{ this.props.title }</li>
        )
    }
}