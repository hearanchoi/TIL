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
// 여러 단어로 이뤄진 속성의 경우 점 표기법을 사용할 수 없다.
const car4 = {
    wheels: 4,
    color: 'blue',
    "goes fast": true
};
// console.log(car4.goes fast);//SyntaxError
console.log(car4['goes fast']); //true
// 여러 단어로 된 속성을 사용하려면 해당 이름을 따옴표로 묶어야 하기 때문에 대괄호 표기법으로만 접근 가능
// 키를 사용해서 객체의 속성에 접근할 때도 대괄호 표기법 사용
// ex) 사용자가 자동차를 찾을때, 애플리케이션에는 사용자에게 좋아하는 자동차를 알려달라고 한다.
// 사용자가 선택한 브랜드는 적절한 모델을 출력하기 위한 키가 된다.
const cars = {
    ferrari: 'california',
    porsche: '911',
    bugatti: 'veyron',
};
// 사용자 입력
const key = 'ferrari';
console.log(cars.key); //undefined
console.log(cars['key']) //undefined
console.log(cars[key]); // california
// 이와 같이 변수에 저장된 키를 통해 객체의 속성에 접근하려면 대괄호 표기법을 사용해야 한다.
// key는 문자열이 아닌 변수 이름이므로 따옴표 표기를 해서는 안된다.

// 객체의 복사
// 원시 자료형과는 달리 객체를 복사할 때는 참조방식이 쓰인다. 
let car6 = {
    color: 'pink'
};
let secondCar = car6;

car6.wheels = 4;
console.log(car6); //{ color: 'pink', wheels: 4 }
console.log(secondCar); // { color: 'pink', wheels: 4 }
console.log(car6 == secondCar); // true
console.log(car6 === secondCar); // true
// 항등 연산자(== ,equality)를 사용하던 완전 항등 연산자(===. strict equality)를 사용하든 ture이다.
// 즉 두 객체가 동일하다는 의미이다. 반면 빈 객체끼리 비교해보자
const emptyObj1 = {};
const emptyObj2 = {};

console.log(emptyObj1 == emptyObj2); // false
console.log(emptyObj1 === emptyObj2); //false

// 동일한 속성을 가진 객체끼리 비교 
const obj1 = {a: 1};
const obj2 = {a: 1};

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
// 동일한 객체를 비교할때만 true를 반환받을 수 있음을 볼 수 있다.
// 자바스크립트에서 객체의 복사본을 만드는 빠른 방법 중 하나는 Object.assign()을 사용하는 방법이다.
const car7 = {
    color: 'yellow'
};
const thirdCar = Object.assign({}, car7);
car7.wheels = 4;
console.log(car7); // { color: 'yellow', wheels: 4 }
console.log(thirdCar); // { color: 'yellow' }
// 이렇게 하면 car7를 업데이트 해도 thirdCar에는 영향을 주지 않는다. Object.assign()의 첫 번째 인수(arguments)는 복사본에 해당하는
// 객체이고, 두 번째 인수는 원본에 해당하는 객체이다.  이 예에서는 빈 객체를 복사본으로 넣고 car7를 원본으로 넣었다.

// 배열
// 배열이란 순서대로 값을 저장하는 객체이다. 항목으로 이뤄진 목록만 저장할때는 객체 대신 배열을 사용하면 된다.
const fruitBasket = [ 'apple', 'banana', 'orange'];
// 이렇게 만들어진 배열의 각 항목의 값에 접근할 때는 인덱스(index)를 사용하면 된다. 배열의 인덱스는 0부터 시작한다.
console.log(fruitBasket[0]); //apple
console.log(fruitBasket[1]); //banana
// 배열에 대해 호출 할 수 있는 많은 메서드가 있다.
// 배열의 길이 확인하기
console.log(fruitBasket.length); //3
// 배열의 끝에 새 값을 추가하기
fruitBasket.push('pear');
console.log(fruitBasket); // [ 'apple', 'banana', 'orange', 'pear' ]
// 배열의 시작에 새 값을 추가하기
fruitBasket.unshift('melon');
console.log(fruitBasket); // [ 'melon', 'apple', 'banana', 'orange', 'pear' ]
