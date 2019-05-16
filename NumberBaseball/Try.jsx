const React = require('react');
const { Component } = React;

class Try extends React.Component {
    render() {
        // const { v } = this.props;
        const { value, index } = this.props;

        return (
            <React.Fragment>
                <li key={value.fruit + value.taste}>{value.fruit}-{value.taste}</li>
                <p>c1</p>
                <p>c1</p>
            </React.Fragment>
        );
    }
}

export default Try;
