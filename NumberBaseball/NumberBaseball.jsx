const React = require('react');
import Try from './Try';

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    }
}
class NumberBaseball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            value: '',
            result: getNumbers(), // ex. [1,3,5,7]
            tries: [],
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    fruits = [
        {fruit : '사과', taste : '맛있다'}, 
        {fruit:'바나나', taste:'달다'}, 
        {fruit:'귤', taste:'달아'}
    ];

    onSubmitForm = (e) => {
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런',
                tries: [...this.state.tries, {
                    try: this.state.value, result: '홈런'
                }],

            });

        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes([i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {
                        try: this.state.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다`
                    }]
                })
            }
        }
    }

    onChangeInput = (e) => {

    }


    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}></input>
                    <div>
                        시도: {this.state.tries.length}
                    </div>
                    <ol>
                        {this.fruits.map((v, i) => {
                            return (
                                <Try value={v} index={i}/>
                            );
                        })}
                    </ol>
                </form>
            </>
        );
    }
}

module.exports = NumberBaseball;
