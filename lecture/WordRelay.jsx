const React = require('react');
const { Component } = React;

const WordRelay = () => {
    const [word, setWord] = React.useState('상아');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕!');
            setWord(value);
            setValue('');
        } else {
            setResult('땡!');
            setValue('');
        }

        inputRef.current.focus();
    }


    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label id="label" htmlFor="wordInput">글자를 입력하세요</label><br></br>
                <input id="wordInput" htmlFor="wordInput" onChange={onChangeInput} ref={inputRef} value={value}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
};


module.exports = WordRelay;