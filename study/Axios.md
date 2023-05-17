Axios란?</br>
Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리.
이미 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할땐 axios를 쓰는 편이라고 보면 된다.
</br></br>
Axios 특징</br>
운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
Promise(ES6) API 사용
요청과 응답 데이터의 변형
HTTP 요청 취소
HTTP 요청과 응답을 JSON 형태로 자동 변경
</br></br>

axios vs fetch
 axios | fetch |
|---|----|
|써드파티 라이브러리로 설치가 필요|	현대 브라우저에 빌트인이라 설치 필요 없음|
XSRF 보호를 해준다.|	별도 보호 없음
data 속성을 사용	|body 속성을 사용
data는 object를 포함한다	|body는 문자열화 되어있다
status가 200이고 statusText가 ‘OK’이면 성공이다	|응답객체가 ok 속성을 포함하면 성공이다
자동으로 JSON데이터 형식으로 변환된다	|.json()메서드를 사용해야 한다.
요청을 취소할 수 있고 타임아웃을 걸 수 있다.	|해당 기능 존재 하지않음
HTTP 요청을 가로챌수 있음	|기본적으로 제공하지 않음
download진행에 대해 기본적인 지원을 함	|지원하지 않음
좀더 많은 브라우저에 지원됨	|Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+이상에 지원</br>
</br>axios 설치(서버)

npm 사용

```
$ npm install axios
```

bower 사용하기:
```
$ bower install axios
```
yarn 사용하기:
```
$ yarn add axios
```
</br>axios 설치(클라이언트) </br>
jsDeliver / unpkg CDN 둘중 택</br>
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
</br>axios 문법 구조 </br>
```javascript
axios({
  url: 'https://test/api/cafe/list/today', // 통신할 웹문서
  method: 'get', // 통신할 방식
  data: { // 인자로 보낼 데이터
    foo: 'diary'
  }
});
```

https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9

