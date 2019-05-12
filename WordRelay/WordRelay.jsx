import React, { Component } from 'react';
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);


    state = {
        word: '이상아',
        value: '',
        result: '',
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1 === this.state.value[0]]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');

        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    };

    input;

    const onChangeInput = () => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button className="클래스입니다" >입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;