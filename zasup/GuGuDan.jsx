const React = require('react');
const { Component } = React;

class GuGuDan extends Component {
    state = {
        text: 'Hi',
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

module.exports = GuGuDan;