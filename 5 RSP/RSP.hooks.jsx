import React, { Component } from 'react';
const { useState, useRef, useEffect, memo } = React;

/* 클래스 */
// constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 때) -> shouldComponentUpdate(true 인 경우) -> rerender -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    rock: 0,
    scissor: '398px',
    paper: '199px',
}

const scores = {
    rock: 0,
    scissor: 1,
    paper: -1,
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const cycle = 300;
const cycleWait = 500;

// LayoutEffect
// 화면 resizing과 같은 레이아웃의 변화를 감지하기 전 사용
// 전

// useLayoutEffect
// 화면 resizing과 같은 레이아웃의 변화를 감지한 후 사용
// 후


// class의 didmount, didupdate, willunmount와 달리, hooks의 useEffect는 중복이 가능하다
// 각 state의 변경에 대응할 수 있다
    // useEffect(() => {}, [imgCoord, score]);
    // useEffect(() => {}, [imgCoord]);


// Hooks는 라이프사이클이 없다!
const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.rock);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {
        console.log('다시 실행');
        // componentDidMount, componentDidUpdate, componentWillUnmount와 '완전히' 1:1대응이 되지는 않지만, '비슷한' 역할을 한다
        // 셋을 하나로 합쳐놓았다고 생각할 수 있다
        interval.current = setInterval(changeHand, cycle);

        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    },  [imgCoord]); // [] 안에 넣은 값들이 변경이 일어났을 때, useEffect 함수가 실행된다
    // 따라서 관련있는 값을 넣어야 한다 (당연히!)

    const changeHand = () => {
        if (imgCoord === rspCoords.rock) 
            setImgCoord(rspCoords.scissor);
        
        else if (imgCoord === rspCoords.paper) 
            setImgCoord(rspCoords.rock);
        
        else if (imgCoord === rspCoords.scissor) 
            setImgCoord(rspCoords.paper);
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
            setResult('DRAW');
        } else if([-1, 2].includes(diff)) {
            setResult('You WIN!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('You LOSE...');
            setScore((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, cycle)
        }, cycleWait);
    };

    return (
        <>
            <div id="computer" style={{ background: `url(https://steemitimages.com/640x0/https://steemitimages.com/DQmVDkcxCxbuJJtwRiGv2xLoKt1eDMoznW1wYZyqJ9gQgCv/가위6%5B1%5D.png) ${imgCoord} 0`}} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score} 점</div>
        </>
    );
};


export default RSP;