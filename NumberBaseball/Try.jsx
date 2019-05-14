const React = require('react');
import { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b>
                <div>contents1</div>
                <div>contents2</div>
                <div>contents3</div>
            </li>
        );
    }
}

export default Try;