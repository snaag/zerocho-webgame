import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
// useMemo: 함수의 return 값을 기억 (useMemo의 두번째 인자인 input이 바뀌기 전까지, 기억한다)
// useCallback: 함수 자체를 기억
import Ball from './Ball';


function getWinNumbers() {
    console.log('getWinNumbers()')
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];

    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);

    return [...winNumbers, bonusNumber];
}

const cycle = 500;

const Lotto = () => {
    const [winBalls, setWinBalls] = useState([]);
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        console.log('useEffect()')
        for (let i = 0; i<winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
                
            }, (i + 1) * cycle);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, cycle * winNumbers.length);

        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]); // [] == componentDidMount

    // componentDidMount
    useEffect(() => {
        console.log('component did mount');
    },[]);

    // componentDidMount X
    // componentDidUpdate O
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // componentDidUpdate (Mount 말고) 때에만 실행할 함수
        }
    },[]);


    useEffect(() => {
        console.log('Create Lotto numbers');
    }, [winNumbers]);

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [winNumbers];
    },[]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="result">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>

            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            <br></br>
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default Lotto;