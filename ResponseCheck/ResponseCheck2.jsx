const React = require('react');

class ResponseCheck2 extends React.Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [3, 4, 5],
    };

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