import React, { Component } from 'react';

function getNumbers() { // pick random 4 numbers

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form>
                    <input maxLength={4} />
                </form>
            </>
        );
    }
}

module.exports = NumberBaseball;