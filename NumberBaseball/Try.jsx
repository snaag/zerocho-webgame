const React = require('react');
import { Component } from React;

class Try extends Component {
    render() {
        return (
            <div>
                <li key={v.fruit+v.taste}>
                    <b>{v.fruit}</b>
                    <div>contents1</div>
                    <div>contents2</div>
                    <div>contents3</div>
                </li>
            </div>
        );
    }
}

export default Try;