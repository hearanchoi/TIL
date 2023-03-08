## event

---

<br>
<strong>evnet 기능 </strong>
<br>
<br>
Header컴포넌트 링크 선택시 -> 함수 호출하여 알럿창 경고 뜨게하기!
<br><br>

```JSX

function Header(props){
    return <header>
        <h1><a href="/" onClick={(event)=>{
            // OnClick C는 대문자!
            event.preventDefault(); //리로드 x 한번만 실행 되게함
            props.onChangeMode();
        }}>{props.title}</a></h1>
        </header>
}

function App() {

    const topics = [
        {id:1, title:'html', body:'html is...'},
        {id:2, title:'css',  body:'css is...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return(
        <div>
        <Header title="WEB" onChangeMode={()=>{
            alert('Header'); // 헤더 클릭시 알럿창!
        }}></Header>
        <Nav topics={topics}></Nav>
        <Article title="Welcome" body="Hello, Web"></Article>
        <div>
    )
}

export default App;
```

출력 결과
<br>

![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%2010.52.29.png)
<br><br>

<br>
리스트 링크 클릭시 -> 알럿창에 아이디값 (1,2,3) 이 뜨게하기
<br><br>

```JSX


function Nav(props){
    const lis = []
    for(let i=0; i<porps.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/' +t.id} onClick={event => { // 파라미터가 하나일때 ()생략 가능
            event.preventDefault();
            props.onChangeMode(event.target.id);
            // target은 event가 일어난 태그
        }}>{t.title}</a></li>)
    }

    return <nav>
    <ol>
        {lis}  // 여기서 출력
    </ol>
    </nav>
}

function App() {

    const topics = [
        {id:1, title:'html', body:'html is...'},
        {id:2, title:'css',  body:'css is...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return(
        <div>
        <Header title="WEB" onChangeMode={()=>{
            alert('Header');
        }}></Header>
        <Nav topics={topics} onChangeMode={(id)=>{
            alert(id);// 알럿창에 아이디가 뜨게
        }}></Nav>
        <Article title="Welcome" body="Hello, Web"></Article>
        <div>
    )
}

export default App;
```

출력 결과
<br>

![title](/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-03-08%20%EC%98%A4%ED%9B%84%2011.07.03.png)
<br><br>

##### 공부 출처: 생활코딩 react 2022 개정판
