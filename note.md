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


## ?
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
<input ref={inputRef} onChange={this.onChangeInput} value={value}/>
```
#### Destructuring
```
const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
```
이런 식으로 쪼개서 객체에 넣는 것을 말함