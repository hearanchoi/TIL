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
