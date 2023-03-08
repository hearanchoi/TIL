## State

---

<br>
<strong>클릭시 상세 보기 및 본문 변경</strong>
<br>
<br>
poops와 state의 차이점 : 
props은 component를 사용하는 외부자를 위한 데이터고 state는 component를 만드는 내부자를 위한 데이터다.
<br><br>

```JSX
import {useState} from 'react';
// useState라는 hook은  리액트에서 기본으로 제공하는 함수이다 .


function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
        </article>
}

function App() { // App함수는 다시 실행되지 않기 때문에 리턴값이 반영되지 않는다 . 그래서 useState라는 hook을 사용해야 한다.


//  const _mode = useState('WELCOME'); // 0번째 원소
//  const mode = _mode[0];
//  const setMode = _mode[1];
const [mode , setMode] = useState('WELCOME');

 const topics = [
        {id:1, title:'html', body:'html is...'},
        {id:2, title:'css',  body:'css is...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return(
        <div>
        <Header title="WEB" onChangeMode={()=>{
            setMode('WELCOME'); //setMode가 되는 순간 APP 다시 실행
        }}></Header>
        <Nav topics={topics} onChangeMode={(id)=>{
            setMode('READ');//setMode가 되는 순간 APP 다시 실행
        }}></Nav>
        <Article title="Welcome" body="Hello, Web"></Article>
        <div>
    )
}

export default App;
```

useState는 배열이다. 0번째 원소는 상태의 값을 읽을때 쓰는 데이터다, 1번째 데이터는 그 상태의 값을 변경할 때 사용하는 함수이다. <br/>
![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%2011.29.54.png)
출력 결과
<br>

![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%209.51.52.png)
<br><br>
<strong>props로 동적인 리스트 출력하기</strong>
<br><br>
