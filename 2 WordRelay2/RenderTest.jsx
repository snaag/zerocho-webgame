const React = require('react');
const { PureComponent, memo } = React;

class RenderTest extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    onClick = () => {
        this.setState({
            array: [...this.state.array, 1],
        });
    }

    render() {
        console.log('Rendering', this.state);
        return (
            <>
                <button onClick={this.onClick}>클릭</button>
                <h1>{this.state.array.length}</h1>
                <h1>{this.state.string}</h1>
                <h1>{this.state.number}</h1>
            </>
        );
    }
}

module.exports = RenderTest;