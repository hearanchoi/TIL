# 목차

- [JSX](#jsx-소개)

<br>
<br>

## JSX 소개

---

<br>
<strong>JSX</strong>
<br>
<br>
JavaScript를 확장한 문법으로 React "엘리먼트(element)"를 생성한다. React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다.<br>
React는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다. 관심사란 컴퓨터 프로그램 코드에 영향을 미치는 정보의 집합이다. 관심사는 코드 최적화가 필요한 하드웨어의 세세한 부분만큼 포괄적이거나, 시작할 클래스의 이름처럼 구체적일 수 있다.
<br>
<br>
<strong>JSX에 표현식 포함하기</strong><br>
<br>

```JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

<br>
JSX의 중괄호 안에는 Javascript 표현식을 넣을 수 있다. 위에 예시에서는 JavaScript 함수 호출의 결과인 formatName(user)을 h1태그 앨리먼트에 포함했다.
<br>
React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다.
<br>
JSX에서 class는 className, tabindex는 tabIndex가 됨.
<br>
<br>
태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아야 한다.<br>
<br>
JSX 태그는 자식을 포함할 수 있다.
<br><br>
기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않는다. 모든 항목은 렌더링 되기 전에 문자열로 변환된다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.<br><br>

JSX는 객체를 표현하고, Babel은 JSX를 React.createElement() 호출로 컴파일한다.

```JSX
const element = <img src={user.avatarUrl} />;

const element = (

  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// 아래 두예시는 같다.
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

```

<br>

-- 출처 리액트 공식문서 : https://ko.reactjs.org/docs/introducing-jsx.html
