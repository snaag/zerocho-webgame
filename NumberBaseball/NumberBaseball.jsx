const React = require('react');
const { useState } = React;

// Pick random 4 numbers (Not duplicate)
function getNumbers() {
    return [1,3,5,8];
}

const NumberBaseball = () => {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [tries, setTries] = [];

    const onSubmitForm = (e) => {

    }

    const onChangeInput = (e) => {

    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}></input>
                <div>
                    시도: {tries.length}
                </div>
                <ul>
                    {['like','likes'].map(() => {
                        return (
                            <li>like</li>
                        );
                    })}
                </ul>
            </form>
        </>
    );
};

module.exports = NumberBaseball;