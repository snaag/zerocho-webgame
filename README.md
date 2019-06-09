## Lecture Note
### 1-2. 첫 리액트 컴포넌트
* Webpack은 쪼개진 .js 파일을 하나로 합쳐준다
#### .js 파일을 불러올 때
1. `<script src="[file.js]"></script>`
2. `<script> [...] </script>`
* 배포할때 `development` 를 `production` 으로 바꾸면 됨
```
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
#### Component 만들고, 그리기
* class 하나가 component 하나
* component가 들어갈 HTML tag 만들기
    ```
    const e = React.createElement;
    ```
* Component 만들기
    ```
    class LikeButton extends React.Component {
        constructor(props) {
            super(props);
        }
    
        render() {
            return e('button', null, 'Like');
        }
    }
    ```
* Component 그리기
    ```
    React.DOM.render(e(LikeButton), document.querySelector('#root));
    ```

### 1-3. HTML 속성과 상태(state)
* React component는 기본적으로 root가 필요하다
* 바뀔 여지가 있는 부분이 상태(state) 이다
    * 예를 들어, 버튼을 눌렀을 때 버튼의 텍스트가 바뀐다면 그 텍스트는 상태라고 볼 수 있다
    * 이렇게 constructor의 this.state 안에 넣어준다
    ```
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }
    ```

    ```
    return e('button', 
        {onClick: () => {this.setState({liked: true})}, type:'submit'}, 
        this.state.liked === true ? 'Liked':'Like'); 
    ```

### 1-5. 첫 번째 Q&A
* 대문자로 시작하는 것은 React component, 소문자로 시작하는 것은 HTML tag 이다
    * `<LikeButton/>`, `<div>` 

### 1-4. JSX와 바벨(babel)
* Tag를 사용해서 더 보기 쉽게 할 수 있다
```
return e('button', 
{onClick: () => {this.setState({liked: true})}, type:'submit'}, 
this.state.liked === true ? 'Liked':'Like'); 
```
```
ReactDOM.render(e(LikeButton), document.querySelector('#root'));  
```
를
```
return <button type="submit"
onClick={() => { this.setState({ liked: true }) }}>Like</button>
```
```
ReactDOM.render(<LikeButton />, document.querySelector('#root'));
```
```
const e = React.createElement; 지우기
```

이렇게 바꾼다

#### JSX
* javascript + XML
#### 바밸(babel)
* 최신 또는 실험적인 문법을 쓸 수 있도록 도와준다
    * `<script crossorigin src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> ` 추가
    * `<script type="text/babel">` 추가
    * JSX 사용 가능
* Babel이 JSX를 createElement로 바꿔준다

### 1-6. 구구단 리액트로 만들기
### 1-7. 구구단 리액트로 만들기
### 1-8. Fragment와 기타 팁들
### `Info.html`
* onChange를 여러 tag에서 쓰는 경우
```
<input type="number" name="age" value={this.state.age} onChange={this.onChange}/>
<input type="text" name="name" value={this.state.name} onChange={this.onChange} />
```
```
onChange = (e) => { 
    this.setState({ [e.target.name]: e.target.value }); }
```
* `name` 필드를 추가해주고, 거기에 property의 이름을 써준다
* `onChange`에서 `setState`할 때 `[e.target.name]` 을 추가한다

### `like_liked.html`
* 조건문 한줄에 쓰기
    * `{this.state.like ? 'Like':'Liked'}`

### 1-9 함수형 setState
* setState
    * 이전 state의 값을 사용할 경우, 함수형 setState를 쓰자
    ```
    this.setState({
        result: (this.state.value).concat('  정답'),
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
    });
    ```
    ```
    this.setState((prevState) => {
        return {
            result: (prevState.value).concat('  정답'),
            first:  Math.ceil(Math.random()*9),
            second: Math.ceil(Math.random()*9),
            value:  '',
            };
        });
    ```

### 1-10. ref
* DOM에 직접 접근하고 싶을 때 사용
* [DOM에 직접 접근이 필요한 상황](https://velopert.com/1148)
    1. input / textarea 등에 포커스를 해야 할때 (강의 부분)
    2. 특정 DOM 의 크기를 가져와야 할 때
    3. 특정 DOM 에서 스크롤 위치를 가져오거나 설정을 해야 할 때
    4. 외부 라이브러리 (플레이어, 차트, 캐로절 등) 을 사용 할 때

* `this.input.focus();`
    * focus를 하고 싶을 때
* `input;`
    * render 함수 바로 위에
* `<input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}/>`
    * focus를 주고 싶은 tag

### `focus.html`
* `this.setState` 
    * 1
    ```
    this.setState({
    
     });
    ```

     * 2
    ```
    this.setState((prevState) => {
        return {
    
        };
    });
    ```
* ref
    * focus를 주고 싶은 tag에게
        * `this.input = f;`
    * focus를 주고 싶은 시점
        * `this.input.focus();`
    * render 함수 위에
        * `input;`

---
### 2-1. React Hooks 사용하기
#### component 선언


* 함수에서 state와 ref를 쓸 수 있게 한 것
    * (React는 class보다 hooks를 더 권장한다)

#### component 만들기
1. 화살표함수로 component를 만들어준다
```
const Post = () => {

}
```

2. 초기값 넣고 `setState` 함수 만들어주기
```
const Post = () => {
    const [title, setTitle] = React.useState('');
    const [context, setContext] = React.useState('');
    const [data, setData] = React.useState('');
}
```

3. `render` 함수 부분 만들기
```
return (
    <React.Fragment>
        <h1>Post</h1>
        <form onSubmit={onSubmitForm}>
            <input type="text" name="title" value={title} onChange={onChangeInput} ref={inputRef}/>
            <input type="text" name="context" value={context} onChange={onChangeInput}/>
        </form>
        {data}
    </React.Fragment>
);
```
4. 나머지 함수 작성 (`onSubmitForm`, `onChangeInput`)
```
const onSubmitForm = (e) => {
    e.preventDefault();
    setTitle('');
    setContext('');
    setData(data+title+' '+context+'/')
}

const onChangeInput = (e) => {
    if(e.target.name === "title") {
        setTitle(e.target.value);
    } else if(e.target.name === "context") {
        setContext(e.target.value);
    }
    inputRef.current.focus();
}
```

#### ref 사용하기
* ref가 필요할 때 === DOM에 접근할 떄
```
const inputRef = React.useRef(null); // 추가
```
```
this.input.focus(); // 를
inputRef.current.focus(); // 로 바꿔서 사용
```
tag의 ref에는 `React.useRef(null)`을 넣어준다
```
<input ref={inputRef} onChange={onChangeInput} value={value}/>
```
#### Destructuring
```
const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
```
이런 식으로 쪼개서 객체에 넣는 것을 말함

### 2-2. Class와 Hooks 비교하기
* Hooks를 쓰면 코드가 비교적 간결해진다
* Hooks가 Class보다 조금 더 느릴 수 있다
    * state가 바뀌었을 때 class의 경우 render 함수만 재실행 되지만
    * hooks의 경우 함수 전체가 재실행 되기 때문이다

* `className`, `htmlFor`

### 2-3. 웹팩 설치하기
### 2-4. 모듈 시스템과 웹팩 설정
### 2-5. 웹팩으로 빌드하기
#### 웹팩을 쓰는 이유
* 여러개의 .js 파일을 하나의 .js 파일로 만들어주는 것
    * 하나의 html파일에 모든 컴포넌트를 넣는 것은 무리이다
    * 그렇다고 `<script src="..."/>` 하면 중복이 생길 수 있다 (??)
    * 따라서 .js 파일을 하나의 파일로 만들어, html이 실행할 수 있게 해주며,
    * 최신 문법을 옛날 브라우저에서도 적용할 수 있게 해준다
* .js 로 만들어졌다
* Node를 알아야 한다

    * Node === .js 실행기 이기 때문이다

* `npm init`
* `package.json`
    * 안에 필요한 package 기입해줌
    * `dependencies`: 실제 서비스에서만 쓰이는 것
    * `devDependencies`: 개발
* `npm i react react-dom`

    * `package.json`에 react, react-dom 추가됨
* `npm i -D webpack webpack-cli`
    * `-D`: `webpack`이랑 `webpack-cli`를 다운받을건데, 개발용으로만 쓸거야
    * (webpack은 실제 서비스에는 필요가 없다)
* `webpack.config.js`

    * `module.exports`
* `client.jsx`

    * 스크립트(`<script>`)로 react, reactDom을 사용하지 않고 저장해서 불러오도록 한다
* `.jsx` 파일로 컴포넌트들을 쪼개서 만들 경우
    * 파일을 쪼개는 경우에는 이것을 꼭 작성해줘야 한다
    ```
    // WordRelay.jsx

    const React = require('react');
    const { Component } = React;
    // 쪼갠 파일에서 필요로 하는 패키지나 라이브러리

    /*
    class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',
    }; 

    render() {
        return <h1>{this.state.text}</h1>
        }
    }
    */

    module.exports = WordRelay;
    // 쪼갠 파일을 밖에서도 쓸 수 있게 해주는 명령
    ```
    * 앞서 `exports` 한 파일을 사용하는 법
    ```
    // client.jsx
    const WordRelay = require('./WordRelay');
    ```

* 쪼갠 파일들을 하나의 파일로 만드는 법
    * (`<script src>` 에는 1개의 파일만 넣을 수 있음)
    * `webpack.config.js` !!
        ```
        const path = require('path'); // 경로를 쉽게 조작할 수 있도록 해줌

        module.exports = {
            name: 'wordrelay-setting', // 00의 설정
            mode: 'development', // 개발용 이라는 뜻, 실사용에서는 production이라고 함
            devtool: 'eval', // 빠르게 한다는 뜻
            resolve: {
                extension: ['.js', '.jsx']
            },
            
            entry: { // 입력 (입력 파일들을 넣어서)
                // app: ['./client.jsx', './WordRelay.jsx'],
                // 하지만 client.jsx에서 WordRelay를 불러오기 때문에,
                // app: ['./client.jsx'] 라고 쓸 수 있다
                // + extension을 추가해서 굳이 확장자를 매번 쓰지 않아도 된다
                app: ['./client],
            }, 

            module: {
                rules: [{
                    test: /\.jsx?/, // '규칙'을 적용할 파일. js, jsx파일에 적용하겠다
                    loader: 'babel-loader', // 그 '규칙'
                    options: {
                        presets: [{'@babel/preset-env', '@babel/preset-react'}],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                }],
            },
            // entry에 있는 파일을 읽고, 그 파일들에 module을 적용한 후
            // output으로 뺸다

            output: { // 출력 (이 하나의 출력 파일을 만들겠다)
                path: path.join(__dirname, 'dist'), // 현재 경로 + 'dist' === 현재경로/dist (폴더)
                filename: 'app.js,
            },
        };
        ```
    * `entry`, `output` 잘 작성하기
* babel 설치하기
    * `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties`
        * `core`
            * 기본적인 바벨
            * 최신 문법을 모든 환경에서 잘 작동하도록 바꿔주는 것
        * `preset-env`
            * 환경에 맞게 바꿔주는 것
        * `preset-react`
        *   .jsx를 .js 바꿔주는 것
        * `babel-loader`
            * 바벨과 웹팩을 연결해준다
* 웹팩 실행

    * `npx webpack`

### 2-6. 구구단 웹팩으로 빌드하기
```
npm init // package.json 생성. npm을 초기화한다.
npm i react react-dom // node_modules/, package-lock.json 생성
npm i -D webpack webpack-cli
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader // babel 설치
```

* `webpack.config.js` 생성
    * webpack의 설정에 대한 모든 정보가 담겨있는 파일

    ```
    const path = require('path');

    module.exports = {
        mode: 'development',
        devtool: 'eval',
        resolve: {
            extensions: ['.jsx', '.js'],
        },

        entry: {
            app: './client',
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [],
                },
            }],
        },
        output: {
            filename: 'app.js',
            path: path.join(__dirname, 'dist'),
        },
    }

    ```
* `GuguDan.jsx`
* `client.jsx`
* `index.html`
```
npm run dev
```

### 2-7. @babel/preset-env와 plugins
* preset: plugin의 모임
    * ex. @babel/preset-env, /preset-react
* plugins

### 2-8.
### 2-9. webpack-dev-server와 hot-loader
* `webpack-dev-server`, `hot-loader`
    * 걸어놓은 파일에 변동 사항이 생겼을 때 자동으로 다시 webpack 빌드를 시켜주는 것
    * 
    ```
    //client.jsx
    const WordRelay = require('./WordRelay');
    const Hot = hot(WordRelay);
    ReactDom.render(<Hot />, document.querySelector('#root)); 
    ```
    이런 코드가 있을 때, `WordRelay.jsx`에 변동 사항이 생기면 자동으로 `webpack` 빌드를 시켜주는 것
1. `webpack-dev-server`, `hot-laoder`를 다운받는다

    * `npm i -D webpack-dev-server react-hot-loader`
2. `webpack.config.js`의 `plugins`에 아래 내용을 추가한다
    * ```react-hot-loader/babel```
    * 
    ```
    // webpack.config.js 전체
    const path = require('path');

    module.exports = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel'
            ],
        },
        exclude: path.join(__dirname, 'node_modules'),
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist',
    },
    };
    ```
3. `package.json`의 `script`에 이 key-value를 추가해준다
    * `"dev": "webpack-dev-server"`
    *
    ```
    // package.json 전체
    {
        "name": "lecture",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "dev": "webpack-dev-server"
        },
        "author": "snaag",
        "license": "MIT",
        "dependencies": {
            "react": "^16.8.6",
            "react-dom": "^16.8.6"
        },
        "devDependencies": {
            "@babel/core": "^7.4.4",
            "@babel/plugin-proposal-class-properties": "^7.4.4",
            "@babel/preset-env": "^7.4.4",
            "@babel/preset-react": "^7.0.0",
            "babel-loader": "^8.0.6",
            "react-hot-loader": "^4.8.4",
            "webpack": "^4.31.0",
            "webpack-cli": "^3.3.2",
            "webpack-dev-server": "^3.3.1"
        }
    }

    ```
4. 파일을 걸어준다
    *
    ```
    // client.jsx
    const React = require('react');
    const ReactDom = require('react-dom');
    const { hot } = require('react-hot-loader/root');

    const WordRelay = require('./WordRelay');

    const Hot = hot(WordRelay);

    ReactDom.render(<Hot />, document.querySelector("#root"));
    ```

### 2-10. 끝말잇기 Hooks로 전환하기
---
### 3-1. import와 require비교
#### import
* require, import 둘이 유사
    * 최근에는 import를 더 사용
    * require
        * node의 모듈 시스템
    * import(, exports)
        * react에서 사용
    ```
    export const AA = 'hello'
    import { AA } from './a';

    export default AA;
    import AA from './a';
    ```

    * babel이 있어서 require와 import 모두를 쓸 수 있는 것

### 3-2. 리액트 반복문 (map)
#### map
* React에서 반복문을 쓰는 방법
```
{['사과', '바나나', '귤'].map((v) => {
        return (
            <li>{v}</li>
        );
    })}
```
### 3-3. 리액트 반복문 (key)
* key, value
```
{[
    {fruit : '사과', taste : '맛있다'}, 
    {fruit:'바나나', taste:'달다'}, 
    {fruit:'귤', taste:'달아'}
    ].map((v, i) => {
        return (
            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
        );
})}
```
### 3-4. 컴포넌트 분리와 props
#### props
* component 간에 state를 주고받을때 사용
##### 반복문을 다른 파일로 빼보자

* 
```
// NumberBaseball.jsx
{[
    {fruit : '사과', taste : '맛있다'}, 
    {fruit:'바나나', taste:'달다'}, 
    {fruit:'귤', taste:'달아'}
    ].map((v, i) => {
        return (
            <Try value={v}/>
        );
})}
```
```
// Try.jsx
const React = require('react');
import { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b>
                <div>contents1</div>
                <div>contents2</div>
                <div>contents3</div>
            </li>
        );
    }
}

export default Try;
```
### 3-5.
### 3-6.
### 3-7.
### 3-8.
### 3-9.
### 3-10. shouldComponentUpdate
* setState만 호출하면 render함수의 모든 부분이 재실행된다
* 따라서, 값이 변경될 때만 렌더링을 하려고 할 때 `shouldComponentUpdate` 안에서 비교
```
shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
        return true;
    }
    return false;
}
```

### 3-11. PureComponent와 React.memo
* array 
    * `array: [...this.state.array, 1]`
#### PureComponent
* `const { PureComponent } = React;`
* `Component` + `shouldComponentUpdate`
* `state`에 변동이 있는 경우에만 렌더링 함수 실행
* 그러나 state 변경에 따른 rendering을 커스텀하기 위해 custom을 사용한다

#### React.memo
* Hooks에서의 purecomponent와 비슷한 역할
* 
```
const RenderTest = memo(({ }) => {
    return (
        <div>
            
        </div>
    );
});
```

###  3-12. React.createRef
* class
* 
```
inputRef = createRef();
this.inputRef.current.focus();
```
* hooks에서의 사용법과 유사
* 예전 방식은 커스텀이 보다 용이하고, 이 방식은 간단하게 구현한다는 차이점이 있다

### 3-13. props와 state 연결하기
* props는 부모만 바꿀 수 있도록 한다
    * 만일 자식이 props를 바꿔야 할 필요가 있는 경우,
    * 자식이 props를 state로 따로 뺀 다음, 거기서 바꿀 수 있도록 한다
    * 즉 부모로부터 받은 props를, 자식이 state에 저장하면 된다
    * 
    ```
    state = {
        result: this.props.result,
        try: this.props.try,
    }
    ```
#### Context
* 거리가 먼 자식에게 props를 전달해주고 싶을 때 사용
    * Redux가 context의 응용이다
    * (예를 들어, A-B-C-D-E-F-G가 있을 때 A->G에게 props를 전달해 주고 싶을 경우)

---
### (part 4 : ref의 응용에 대해 집중적으로 배움)
### 4-1. React 조건문
* `.jsx` 안에서 `for`, `if`를 못쓴다
#### IF
* { 임의의 식 === 값 ? 방법 1 : 방법 2}
    * 임의의 어떤 식이 값과 같을 경우(조건이 참일 경우), 방법 1을 수행한다
    * 임의의 어떤 식이 값과 같지 않을 경우(조건이 거짓일 경우), 방법 2를 수행한다
* 예시
    * 
    ```
    {
        this.state.result.length === 0 ? null :
        <div>
            평균 시간: {
                this.state.result.reduce((a, c) => a + c) / this.state.result.length
            }ms
        </div>
    }
    ```
### 4-2. setTimeout 넣어 반응속도체크
### 4-3. 성능 체크와 Q&A
### 4-4. 반응속도체크 Hooks로 전환하기
* ref vs. setState
    * ref: 값이 바뀌어도 render 함수가 재실행되지 않는다
        * (값의 변화가 많으나 화면에는 영향을 주지 않는 것)
        * current로 접근해야 한다
        *
        ```
        const timeOut = React.useRef(null);

        timeOut.current = setTimeout(() => {
                startTime.current = new Date();
                setState('now');
                setMessage('지금 클릭');
            }, Math.floor(Math.random()*1000) + 2000);
        ```
    * setState: 값이 바뀌면 render 함수가 재실행된다

### 4-5. return 내부에 for과 if 쓰기
* .jsx 안에서는 for, if를 사용할 수 없다
* 따라서 바로실행함수를 만들어서 그 안에 for, if를 사용할 수 있다
    *
    ```
    {(() => {
        // 내용
    })()}
    ```
---
### 5-1. 리액트 라이프사이클 소개
* constructor -> render -> ref -> `componentDidMount`
* (setState/props 바뀔 때) -> `shouldComponentUpdate`(true 인 경우) -> rerender -> `componentDidUpdate`
* 부모가 나를 없앴을 때 -> `componentWillUnmount` -> 소멸

### 5-2. `setInterval`과 라이프사이클 연동하기
* `setInterval` 쌍이 필요한 이유
    * `setInterval` 쌍이란?
        - `setInterval()`, `clearInterval()` 쌍을 말함
        - (actual term은 아니고 그냥 쉽게기억할려고 내가 이름붙인거)
    * 필요한 이유는?
        - `componentDidMount()`과 같은 함수 안에서 선언된 경우
        - 해당 함수가 끝난다고 해도, `setInterval()`은 사라지지 않기 때문에 메모리누수가 발생한다
        - 이를 줄이기 위해 `setInterval()`을 `clearInterval()`로 없애주어야 한다
        - (그리고 `clearInterval()`은 `componentWillUnmount()`에서 선언된다)
    * `setInterval`의 선언은 꼭 `componentDidMount()`함수가 아니어도 되고 (일반 함수여도 된다), `clearInterval()`은 동일하게 `componentWillUnmount()` 에서 이루어져야 한다
    * 예시
        -
        ```
        componentDidMount() { 
            this.interval = setInterval(() => {
                const {imgCoord} = this.state;

                console.log(imgCoord);

                if (imgCoord === rspCoords.rock) {
                    console.log("imgCoord is SCISSOR");
                    this.setState({
                        imgCoord: rspCoords.scissor,
                    });
                } else if (imgCoord === rspCoords.paper) {
                    console.log("imgCoord is ROCK");
                    this.setState({
                        imgCoord: rspCoords.rock,
                    });
                } else if (imgCoord === rspCoords.scissor) {
                    console.log("imgCoord is PAPER");
                    this.setState({
                        imgCoord: rspCoords.paper,
                    });
                }
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }
        ```


### 5-3. 가위바위보 게임 만들기
#### 버튼을 클릭한 후에도, 게임이 계속 시작되도록 만들려고 하는 경우
* 똑같은 일을 반복하는 경우에는, 함수로 빼준다
    * 
    ```
    changeHand = () => {
            const {imgCoord} = this.state;

            if (imgCoord === rspCoords.rock) {
                this.setState({
                    imgCoord: rspCoords.scissor,
                });
            } else if (imgCoord === rspCoords.paper) {
                this.setState({
                    imgCoord: rspCoords.rock,
                });
            } else if (imgCoord === rspCoords.scissor) {
                this.setState({
                    imgCoord: rspCoords.paper,
                });
            }
        };

    // this를 사용하기 때문에, 화살표 함수를 사용하였음
    ```
* `componentDidMount`와 `componentDidUpdate`
    * `componentDidMount`
        - 최초 렌더링 이후 단 한번만 실행
        - 그래서 초기화로 많이 쓰임
    * `componentDidUpdate`
        - 그 이후 렌더링 된 이후 매번 실행됨

* 방법 1.
    * 게임을 실행하는 함수를, 초기화를 위해 `componentDidMount`에 넣어주고,
    * 이후에도 반복하도록 하기 위해 `componentDidUpdate`에도 넣어준다
* 방법 2.
    * 버튼 클릭에 관한 함수의 맨 아래에 함수를 호출해준다
    * `this.interval = setInterval(this.changeHand, 500)` 이렇게


### 5-4. 고차 함수와 Q&A
* 고차함수
    * 이렇게 바꿔보자
    *
    ```
    onClick={() => this.onClickBtn('rock')

    onClickBtn = (choice) => {
            clearInterval(this.interval);

            const { imgCoord } = this.state;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;

            if (diff === 0) {
                this.setState({
                    result: 'DRAW!',
                });
            } else if([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: 'You WIN!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: 'You LOSE..',
                        score: prevState.score - 1,
                    };
                });
            }
            setTimeout(() => {
                this.interval = setInterval(this.changeHand, cycle)
            }, cycleWait);
        };
    ```

    를 이렇게
    
    ```
    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>

    onClickBtn = (choice) => () => {
            clearInterval(this.interval);

            const { imgCoord } = this.state;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;

            if (diff === 0) {
                this.setState({
                    result: 'DRAW!',
                });
            } else if([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: 'You WIN!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: 'You LOSE..',
                        score: prevState.score - 1,
                    };
                });
            }
            setTimeout(() => {
                this.interval = setInterval(this.changeHand, cycle)
            }, cycleWait);
        };
    ```

### 5-5. Hooks와 useEffect
### 5-6. 클래스와 Hooks 라이프사이클 비교
* `useEffect`?
    * `Hooks`에서는 `componentDidMount`, `componentDidUpdate`, `componentWillMount`가 따로 없다
    * 이를 가능하게 하는 것이 `useEffect` 이다
    * `useEffect` 사용 예시
    ```
    // class의 didmount, didupdate, willunmount와 달리, hooks의 useEffect는 중복이 가능하다
    // 각 state의 변경에 대응할 수 있다
    // useEffect(() => {}, [imgCoord, score]);
    // useEffect(() => {}, [imgCoord]);

    useEffect(() => {
        console.log('다시 실행');
        // componentDidMount, componentDidUpdate, componentWillUnmount와 '완전히' 1:1대응이 되지는 않지만, '비슷한' 역할을 한다
        // 셋을 하나로 합쳐놓았다고 생각할 수 있다
        interval.current = setInterval(changeHand, cycle);

        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    },  [imgCoord]);
    ```
* `class` to `Hooks` (위쪽이 `class`, 아래쪽이 `hooks`)

    * `state` 초기화
    ```
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.rock);
    const [score, setScore] = useState(0);
    const interval = useRef();
    ```

    ```
    state = {
            result: '',
            imgCoord: 0,
            score: 0,
        };
    ```

    * changeHand 함수
    ```
    const changeHand = () => {
        if (imgCoord === rspCoords.rock) 
            setImgCoord(rspCoords.scissor);
        
        else if (imgCoord === rspCoords.paper) 
            setImgCoord(rspCoords.rock);
        
        else if (imgCoord === rspCoords.scissor) 
            setImgCoord(rspCoords.paper);
    };
    ```

    ```
    changeHand = () => {
            const {imgCoord} = this.state;
    
            if (imgCoord === rspCoords.rock) {
                this.setState({
                    imgCoord: rspCoords.scissor,
                });
            } else if (imgCoord === rspCoords.paper) {
                this.setState({
                    imgCoord: rspCoords.rock,
                });
            } else if (imgCoord === rspCoords.scissor) {
                this.setState({
                    imgCoord: rspCoords.paper,
                });
            }
        };
    ```

    * onClickBtn 함수
    ```
    onClickBtn = (choice) => () => {
            clearInterval(this.interval);
    
            const { imgCoord } = this.state;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;
    
            if (diff === 0) {
                this.setState({
                    result: 'DRAW!',
                });
            } else if([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: 'You WIN!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: 'You LOSE..',
                        score: prevState.score - 1,
                    };
                });
            }
            setTimeout(() => {
                this.interval = setInterval(this.changeHand, cycle)
            }, cycleWait);
    
        };
    ```

    ```
    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
    
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
    
        if (diff === 0) {
            setResult('DRAW');
        } else if([-1, 2].includes(diff)) {
            setResult('You WIN!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('You LOSE...');
            setScore((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, cycle)
        }, cycleWait);
    };
    ```

    * return component
    ```
    render() {
        const { result, score, imgCoord } = this.state;
    
        return (
            <>
                <div id="computer" style={{ background: `url(https://steemitimages.com/640x0/https://steemitimages.com/DQmVDkcxCxbuJJtwRiGv2xLoKt1eDMoznW1wYZyqJ9gQgCv/가위6%5B1%5D.png) ${imgCoord} 0`}} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score} 점</div>
            </>
        );
    }
    ```

    ```
    <>
        <div id="computer" style={{ background: `url(https://steemitimages.com/640x0/https://steemitimages.com/DQmVDkcxCxbuJJtwRiGv2xLoKt1eDMoznW1wYZyqJ9gQgCv/가위6%5B1%5D.png) ${imgCoord} 0`}} />
        <div>
            <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
            <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
            <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score} 점</div>
    </>
    ```

* 추가 정보
    * `LayoutEffect`, `setLayoutEffect`
        * `LayoutEffect`
            - 화면 resizing과 같은 레이아웃의 변화를 감지하기 전 사용
        * `setLayoutEffect`
            - 화면 resizing과 같은 레이아웃의 변화를 감지한 후 사용
        

---
### 6-1. 로또 추첨기 컴포넌트
### 6-2. setTimeout 여러 번 사용하기
* setTimer를 배열로 선언하고 초기화해보기
```
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
```

* `PureComponent`(class), `memo`(functional component)

    * 
    ```
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
    ```

### 6-3. `componentDidUpdate`
* `prevState`와 `thisState`를 비교하여, 참이면(바뀌었으면) render함수를 실행하고, 거짓이면(바뀌지않았다면) 아무것도 하지 않는다
    * 
    ```
    componentDidUpdate(prevPros, prevState) {
            const { winBalls } = this.state;
    
            if (winBalls.length === 0) 
                this.runTimeouts();

            console.log('componentDidUpdate');
        }
    ```

### 6-4. useEffect로 업데이트 감지하기
* Class Component에서 사용하던 Life cycle을 기존의 FC(Functional component)에서도 사용하기 위해 도입된 것이 `Hooks`
* 그리고 그 Life cycle을 컨트롤할 수 있는 함수가 `useEffect` 이다
* Example
```javascript
useEffect(() => {
        console.log('component did mount');
    },[]);


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
``` 
* 형태
```javascript
useEffect(() => {
    내용
},[input이라고 하며, 이 곳에 있는 state에 변경이 일어났을 경우 useEffect 함수의 내용 부분이 재실행된다]);
```
* 따라서 기존의 Class Component보다 임의의 state 변경 시 마다 다른 역할을 주기에 보다 용이하다

### 6-5. useMemo와 useCallback
* 둘의 공통점은 뭔가를 기록한다는 것
* useMemo : 함수의 `return` 값을 기록
    * 
    ```javascript
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    ```
* useCallback : 함수 `자체` 를 기록
    * 
    ```javascript
    const onClickRedo = useCallback(() => {
            console.log('onClickRedo');
            setWinNumbers(getWinNumbers());
            setWinBalls([]);
            setBonus(null);
            setRedo(false);
            timeouts.current = [winNumbers];
        },[]);
        ```
* 언제까지? `useEffect` 함수 처럼, `input` 인자에 들어있는 state의 변경 전 까지! 

### 6-6. Hooks에 대한 자잘한 팁들
* FC에서의 componentDidMount
    *
    ```javascript
    useEffect(() => {
            console.log('component did mount');
        },[]);
    ```
* FC에서의 componentDidUpdate 
    *
    ```javascript
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // componentDidUpdate (Mount 말고) 때에만 실행할 함수
        }
    },[]);
    ```

---
* `package`
```
npm init
npm i react react-dom
npm i -D webpack webpack-cli
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i -D react-hot-loader webpack-dev-server
```

* `client.jsx`
```
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import [JSX_FILE_NEWNAME] from './[JSX_FILE]';

const Hot = hot([JSX_FILE_NEWNAME]);

ReactDom.render(<Hot />, document.querySelector('#root'));
```

* `index.html`
```
<!DOCTYPE html>
<head>
    <meta charset='utf-8'>
    <title>Lotto number Gatcha machine</title>
    <style></style>
</head>
<body>
    <div id='root'></div>
    <script src='./dist/app.js'></script>
</body>
</html>
```

* `webpack.config.js`
```
const path = require('path');

module.exports = {
  name: '[NAME]',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel'
        ],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
};
```
