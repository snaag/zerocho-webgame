const React = require('react');

class ResponseCheck extends React.Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [],
    };
    
    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout(() => {
                this.startTime = new Date();
                console.log("start: ",this.startTime);

                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                });
            }, Math.floor(Math.random()*1000) + 2000);
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(this.timeout);

            this.setState({
                state:'waiting',
                message: '이런 성급하셨군요! 초록색이 된 이후에 클릭하세요',
            })
        } else if (state === 'now') { // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            });
            console.log("end: ",this.endTime);
            console.log(this.state.result);
        }

    };
    componentDidUpdate() {

    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 
        ? <div>~_~</div> 
        : <div>평균 시간: {
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

// export default ResponseCheck;
module.exports = ResponseCheck;
