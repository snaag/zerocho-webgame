const React = require('react');
import { Component } from 'react';

class Try extends Component {
    render() {
        const { v } = this.props;
        return (
            <div>
                <li key={v.fruit+v.taste}>
                    <b>{v.fruit}</b>
                    <b>{v.taste}</b>
                </li>
            </div>
        );
    }
}

export default Try;
