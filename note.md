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

### 1-5 첫 번째 Q&A
* 대문자로 시작하는 것은 React component, 소문자로 시작하는 것은 HTML tag 이다
    * `<LikeButton/>`, `<div>` 


## ?
* babel
* 화살표 함수
---
### 1-4 JSX와 바벨(babel)
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

### 1-6 구구단 리액트로 만들기
### 1-7 구구단 리액트로 만들기
### 1-8 Fragment와 기타 팁들
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

### 1-10 ref