const React = require('react');

class ResponseCheck2 extends React.Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [3, 4, 5],
    };

    timeout;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        console.log(state);

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
            }, Math.floor(Math.random() * 1000) + 2000);

        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state:'waiting',
                message: '이런 성급하셨군요',
            });
            
        } else if (state === 'now') { // 반응속도 체크
            this.setState({
                state: 'waiting',
            });
        }
    }

    renderAverage = () => {
        
    }

    render() {
        return (
            <>
                <div id="screen" 
                    className={this.state.state}
                    onClick={this.onCLickScreen}
                >
                    {this.state.message}
                </div>
                
                {
                    this.state.result.length === 0 
                    ? null 
                    : <div>
                        평균 시간: {
                            this.state.result.reduce((a, c) => a + c) / this.state.result.length
                        }ms
                    </div>
                }
            </>
        );
    }
}

module.exports = ResponseCheck2;