import React, { Component } from 'react';
import Ball from './Ball';


function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];

    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);

    return [...winNumbers, bonusNumber];
}

const cycle = 100;


class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(), // 당첨 숫자들
        winBalls: [],
        bonus: null, // 보너스 공
        redo: false,
    };

    timeouts = [];

    // 최초 실행시 실행되는 함수
    componentDidMount() {
        this.runTimeouts();
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        this.timeouts.forEach((v) => {
            clearTimeout(v);
        }); 

        this.runTimeouts();
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevPros, prevState) {
        const { winBalls } = this.state;
 
        if (winBalls.length === 0) 
            this.runTimeouts();

        console.log('componentDidUpdate');
    }

    runTimeouts = () => {
        console.log('runTimeouts');

        const { winBalls, winNumbers } = this.state;

        // 비동기에 변수를 선언하면 closure 문제가 생기는데, es6부터는 문제가 없어졌다
        for (let i = 0; i<winNumbers.length - 1; i++) {
            // setTimeout은 무조건 사용 후 clear를 해주어야 한다 (push 말고)
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]], // push하지 말고, 예전 state를 사용하는 방식인, 이런식으로 쓰자
                    };
                });
            }, (i+1) * cycle);
        }
        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: winNumbers[6],
                redo: true,
            });
        }, cycle*winNumbers.length);
    }

    

    onClickRedo = () => {
        // 초기화
        this.setState({
            winNumbers: getWinNumbers(), // 당첨 숫자들
            winBalls: [],
            bonus: null, // 보너스 공
            redo: false,
        });
        this.timeouts=[];
    }

    // state에 변경이 일어나면 호출되는 render 함수
    render() {
        const { winBalls, bonus, redo } = this.state;
        return (
            <>
                <div>당첨 숫자</div>
                <div id="result">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>

                <div>보너스!</div>
                {bonus && <Ball number={bonus} />}
                <br></br>
                {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
            </>
        );
    }
}

export default Lotto;