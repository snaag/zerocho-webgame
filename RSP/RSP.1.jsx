import React, { Component } from 'react';

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

const cycle = 100;
const cycleWait = 500;

class RSP extends Component {
        state = {
            result: '',
            imgCoord: 0,
            score: 0,
        };
 
        interval;

        changeHand = () => {
            const {imgCoord} = this.state;

            if (imgCoord === rspCoords.rock) {
                this.setState({
                    imgCoord: rspCoords.scissor,
                });
            } else if (imgCoord === rspCoords.paper) {
                this.setState({
                    imgCoord: rspCoords.rock,
                });
            } else if (imgCoord === rspCoords.scissor) {
                this.setState({
                    imgCoord: rspCoords.paper,
                });
            }
        };

        // cmpt 첫 렌더링 된 후
        // 비동기 요청 많이 함
        componentDidMount() { 
            this.interval = setInterval(this.changeHand, cycle);
        }


        // 리렌더링 후
        componentDidUpdate() {
        }


        onClickBtn = (choice) => () => {
            clearInterval(this.interval);

            const { imgCoord } = this.state;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;

            if (diff === 0) {
                this.setState({
                    result: 'DRAW!',
                });
            } else if([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: 'You WIN!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: 'You LOSE..',
                        score: prevState.score - 1,
                    };
                });
            }
            setTimeout(() => {
                this.interval = setInterval(this.changeHand, cycle)
            }, cycleWait);

        };

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
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score} 점</div>
            </>
        );
    }
    
}

export default RSP;