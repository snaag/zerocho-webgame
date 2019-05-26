import React, { Component } from 'react';
import Ball from './Ball';


function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];

    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);

    return [...winNumbers, bonusNumber];
}

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
        const { winBalls } = this.state;

        // 비동기에 변수를 선언하면 closure 문제가 생기는데, es6부터는 문제가 없어졌다
        for (let i = 0; i<this.state.winNumbers.length - 1; i++) {
            // setTimeout은 무조건 사용 후 clear를 해주어야 한다 (push 말고)
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, this.state.winNumbers[i]], // push하지 말고, 예전 state를 사용하는 방식인, 이런식으로 쓰자
                    };
                });
            }, (i+1) * 1000);
        }
        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: this.state.winNumbers[6],
                redo: true,
            });
        }, 7000);
    }

    componentWillUnmount() {
        this.timeouts.forEach((v) => {
            clearTimeout(v);
        }); 

        // for (let i=0; i<this.state.winNumbers.length; i++) {
        //     clearTimeout(this.timeouts[i])
        // }
    }

    onClickRedo() {
        this.setState({
            redo: true,
        });
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