import React, { Component } from 'react';

/* 클래스 */
// constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 때) -> shouldComponentUpdate(true 인 경우) -> rerender -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    rock: '0',
    scissor: '-142px',
    paper: '-284px',
}

class RSP extends Component {
        state = {
            result: '',
            imgCoord: 0,
            score: 0,
        };

        interval;

        // cmpt 첫 렌더링 된 후
        // 비동기 요청 많이 함
        componentDidMount() { 
            const {imgCoord} = this.state;
            this.interval = setInterval(() => {
                if (imgCoord === '0') {

                }
            }, 1000);
        }

        // 리렌더링 후
        componentDidUpdate() {

        }

        // cmpt 제거 직전
        // 위에서 했던 일들을 제거하는 용도
        // didmount와 한 쌍
        // 비동기 요청 정리
        componentWillUnmount() {
            clearInterval(this.interval);
        }

        /* 비동기 요청이란 */
        // setInterval은 수동으로 정리해주지 않으면, 컴포넌트가 없어지더라도 웹사이트를 끌 때 까지 setInterval은 없어지지 않는다
            // 일정 시간마다 반복적으로 작업해주는 것
            // 변수에 setInterval을 넣어준 다음에, clearInterval로 없애준다

    render() {
        const { result, score, imgCoord } = this.state;

        return (
            <>
                <div id="computer" style={{ background: `url(https://steemitimages.com/640x0/https://steemitimages.com/DQmVDkcxCxbuJJtwRiGv2xLoKt1eDMoznW1wYZyqJ9gQgCv/가위6%5B1%5D.png) ${imgCoord} 0`}} />
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score} 점</div>
            </>
        );
    }
    
}

export default RSP;