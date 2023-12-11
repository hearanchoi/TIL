// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// HTML 페이지에 삽입시
//<script type="text/javascript">[My Script Here]</script>
// 외부파일 참조시
{/* <script src='/home/script.js'></script> */}
// script 태그 안에 코드를 작성하기보다는 파일에 넣어서 브라우저가 가져오는 파일 수에
// 관계없이 한 번에 다운로드하고 캐시하게 하는 것이 좋다. 캐시된 버전의 파일을 사용할 수 
// 있으므로 성능상의 이점도 있다.

//변수
//ES6(ES2015) 이전
var username1 = 'Alberto Montalesi';
//오늘날
let username2 = 'Alberto Montalesi';
const username3 = 'Alberto Montalesi';
//const 키워드로 생성된 변수는 상수(constant)이므로 그값을 덮어쓸 수 없다.
const age1 = 26;
// age = 27;
// TypeError: Assignment to constant variable.
// 보다시피 const로 선언한 변수에는 새 값을 할당할 수 없다.
let height = 190;
height = 189;

//var와 let 모두 재할당 가능한데 let을 사용해야 하는이유? ->1장 나옴
// 값을 재할당해야 하는 상황이 아니라면 항상 const를 사용
// 나중에 디버그하지 않고 실수로 재할당 하려고 할때 오류가 발생하므로
// 잘못된 변수를 참조했다는 사실을 알 수 있음.

// 변수 명명법
// 변수명은 숫자로 시작 금지
//let 1apple = 'one apple';
// 변수명에는 공백, 기호, 마침표가 들어갈 수 없음
// let hello! = 'hello!';
// 그 외에도 예약어 사용 안됨
// ex) abstract, arguments, await, boolean, break,  byte, with, package 등
// 나쁜 예
let cid = 12; // cid가 뭐지..?
// 좋은 예
let client10 = 12; // 아 .. client 10 이구나/
// 나쁜 예
let id = 12; // 무슨 Id? userID? dog ID? cat ID?
// 좋은 예
//let userID = 12; // 구체적으로!
// camelCase(캐멀케이스)와 snake_case(스네이크케이스)
// 나쁜 예
let lastloggedin = ''; // 읽기 어려움
// 좋은 예
let lastLoggedIn = ''; // cammelCase
let last_logged_in = ''; // snake_case

// 자료형
// 자바스크립트는 동적언어이다(dynamic language) 즉, 정적언어와는 달리 변수를 정의할
// 필요는 없다.
// 문자열일까? 숫자열일까?
var userID;
userID = 12; // 숫자를 할당해보자 
console.log(typeof userID); // number
userID = 'user1' // 문자열을 할당해보자
console.log(typeof userID); // string
// 자바스크립트는 6개의 원시 자료형 + 객체로 이루어져 있다. 
// 원시 자료형은 (primitive) 객체가 아닌 자료형으로 메서드를 가지지 않는다.
// string : 문자열,  number: 숫자, boolean: 불리언, null : 널,
// undefiend: 정의되지 않음, symbol: 심벌 , ES6에서 추가되었다.
// string : 텍스트 데이터 나타날 때 사용 ex ) 이름, 주소 등
let userName4 = 'Alberto';
console.log(userName4); // Alberto
// number : 숫자로 된 값 나타낼 때 사용, 자바스크립트에는 정수만을 표현하는 자료형이 없다.
let age = 25;
// boolean : ture, false 값을 나타낼 때 사용.
let married = false;
// null은 '값이 없음'을 나타내고 undefined는 '정의되지 않은 값'을 나타낸다. 
// symbol(심벌)은 고유하고 변경할 수 없는 값을 나타낸다. ES6에 추가된 자료형으로 
// 원시 자료형 중 가장 최근에 추가된 것이다. -> 11장

// 객체(object)
// 앞서 설명한 6개의 원시 자료형은 하나의 값만 담을 수 있지만, 객체는 
// 여러 속성의 모음을 저장하는데 사용할 수 있다. 
// 차의 속성을 저장하는 간단한 객체
const car = {
    wheels : 4,
    color : 'red',
    drive : function() {
        console.log("wroom wroom")
    }
};
// 각 속성에는 키와 값이 있다. 키의 자료형은 string 자료형이지만 값의 자료형은
// 모든 자료형이 될 수 있으며, 심지어 함수가 될 수도 있다. 값이 함수이면 메서드를 
// 호출하는 셈이 된다.
console.log(Object.keys(car)[0]); // wheels
console.log(typeof Object.keys(car)[0]); // string
car.drive(); // wroom wroom

// 빈 객체 생성하기 
// 빈 객체를 생서알 때에는 속성을 선언할 필요가 없다. 2가지 방법이 있다.
const car1 = new Object(); //1 
const car2 = {}; //2 
// 두번째 방법이 더 일반적으로 사용되는데, 이를 객체 리러털 (object literal)이라고도 한다.
car2.color ='red'; // 점 표기법(dot notation)을 사용해서 객체car2에 새 속성추가 
console.log(car2); //{ color: 'red' }
// 객체의 속성에 접근하기 점표기법과 대괄호 표기법 (bracket notation)
const car3 = {
    wheels: 4,
    color: 'red',
};
console.log(car3.wheels); //4
console.log(car3['color']); // red