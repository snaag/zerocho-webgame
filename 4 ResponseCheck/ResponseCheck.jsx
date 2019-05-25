const React = require('react');
// import { useState } from 'react';


const ResponseCheck = () => {
    // Hooks에서는 this.aa  ~  .aa 의 모든 것이 const
    const [state, setState] = React.useState('waiting');
    const [message, setMessage] = React.useState('클릭해서 시작하세요');
    const [result, setResult] = React.useState([]);
    const timeOut = React.useRef(null);
    const startTime = React.useRef(null);
    const endTime = React.useRef(null);

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');

            timeOut.current = setTimeout(() => {
                startTime.current = new Date();
                setState('now');
                setMessage('지금 클릭');
            }, Math.floor(Math.random()*1000) + 2000);
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout);

            setState('waiting');
            setMessage('성급하셨군요');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();

            setState('waiting');
            setMessage('클릭해서 시작');
            setResult((prevResult) => {
                return [...prevResult, endTime.current-startTime.current];
            });
        }
    };

    const renderAverage = () => {
        return result.length === 0 
        ? <div>~_~</div> 
        : <div>평균 시간: {
                result.reduce((a, c) => a + c) / result.length
            }ms
            <br></br>
            <button onClick={onReset}>Reset</button>
            
        </div>
    };
    

    const onReset = () => {
        setResult([]);
    };


    return (
        <>
                <div
                    id="screen"
                    className={state}
                    onClick={onClickScreen}
                >
                    {message}
                </div>
                <div>
                    {renderAverage()}
                </div>
            </>
    );
};



// export default ResponseCheck;
module.exports = ResponseCheck;
