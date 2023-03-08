## props

---

<br>
<strong>props  사용법</strong>
<br>
<br>
props를 사용할때 {}를 꼭 써줘야 한다.
<br><br>

```JSX
function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
        </article>
}

function App() {
    return(
        <div>
        <Article title="Welcome" body="Hello, Web"></Article>
        <Article title="Hi" body="Hello, React"></Article>
        <div>
    )
}

export default App;
```

출력 결과
<br>

![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%209.51.52.png)
<br><br>
<strong>props로 동적인 리스트 출력하기</strong>
<br><br>

```JSX

function Nav(props){
    const lis = [] //  for문으로 반복하여 배열에 담기 고유한 키 와(id) 값으로 넣어야한다 .
    for(let i=0; i<porps.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read/' +t.id}>{t.title}</a></li>)
    }

    return <nav>
    <ol>
        {lis}  // 여기서 출력
    </ol>
    </nav>
}

function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
        </article>
}

function App() {



    const topics = [
        {id:1, title:'html', body:'html is...'},
        {id:2, title:'css',  body:'css is...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return(
        <div>
        <Header title="WEB"></Header>
        <Nav topics={topics}></Nav>
        <Article title="Welcome" body="Hello, Web"></Article>

        <div>
    )
}

export default App;
```

출력 결과
<br>
![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%2010.37.19.png)

##### 공부 출처: 생활코딩 react 2022 개정판
