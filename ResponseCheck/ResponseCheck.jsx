const React = require('react');

class ResponseCheck extends React.Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [3,5],
    };
    
    timeout;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                })
            }, Math.floor(Math.random()*1000) + 2000);
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(this.timeout);

            this.setState({
                message: '이런 성급하셨군요! 초록색이 된 이후에 클릭하세요',
            })
        } else if (state === 'now') { // 반응속도 체크
            this.setState({
                state: 'waiting',
                message: '클릭해서 시작하세요',
                result: [],
            })
        }

    };

    renderAverage = () => {
        const { result } = this.state;
        result.length === 0 
        ? null 
        : <div>
            평균 시간: {
                result.reduce((a, c) => a + c) / result.length
            }ms
        </div>
    }

    render() {
        return (
            <>
                <div
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                <div>
                    {this.renderAverage()}
                </div>
            </>
        );
    }
}

module.exports = ResponseCheck;
