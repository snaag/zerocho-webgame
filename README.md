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

### 1-5. 첫 번째 Q&A
* 대문자로 시작하는 것은 React component, 소문자로 시작하는 것은 HTML tag 이다
    * `<LikeButton/>`, `<div>` 


## ??
* babel
* 화살표 함수
---
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
    * `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plutin-proposal-class-properties`
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

---
## ??
### 2-3. 웹팩 설치하기
* 왜 일일히 `<script src="..."/>` 로 하면 중복이생기는거고, 웹팩을 통해서 하나로 만들면 왜 중복이 없어지는거지?
