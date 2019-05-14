const React = require('react');
const { useState } = React;
import Try from './Try';

// Pick random 4 numbers (Not duplicate)
function getNumbers() {
    return [1,3,5,8];
}

const NumberBaseball = () => {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [tries, setTries] = useState([]);

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
                    {[
                        {fruit : '사과', taste : '맛있다'}, 
                        {fruit:'바나나', taste:'달다'}, 
                        {fruit:'귤', taste:'달아'}
                    ].map((v, i) => {
                        return (
                            <Try />
                        );
                    })}
                </ul>
            </form>
        </>
    );
};

module.exports = NumberBaseball;