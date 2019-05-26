import React, { memo } from 'react';

// 이렇게 함수를 함수로 한번 더 감싸는 것을 고차함수라 한다
// memo는 class component에서의 pure component와 같다
const Ball = memo(({ number }) => {
    let background;

    if (number <= 10)
        background='red';
    else if (number <= 20)
        background='orange';
    else if (number <= 30)
        background='yello';
    else if (number <= 40)
        background='blue';
    else 
        background='green';
    

    return (
        <div className="ball" style={{ background }}>{number}</div>
    );
});

export default Ball;