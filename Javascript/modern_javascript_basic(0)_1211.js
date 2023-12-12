// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 0. 자바스크립트 기초
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
// 배열의 끝에서 값 하나 제거
fruitBasket.pop();
console.log(fruitBasket); // [ 'melon', 'apple', 'banana', 'orange' ]
// 배열의 시작에서 값 하나를 제거
fruitBasket.shift();
console.log(fruitBasket); // [ 'apple', 'banana', 'orange' ]

// type of 를 사용해서 자료형 확인하기
const str = "hello";
console.log(typeof(str)); //string

const num = 12;
console.log(typeof(num)); //number

const arr = [ 1, 2, 3];
console.log(typeof(arr)); // object 배열은 원시 자료형이 아니라 객체다.

const obj =  {prop: 'value'};
console.log(typeof(obj)); //object

console.log(typeof(null)); // object null은 원시 자료형이나 자바스크립트의 버그이다.

// 함수 
// 함수 정의 (function definition)
function greet(name){  // 첫 행의 괄호한의 변수는 매개변수(parameter)이다.
    console.log("hello " + name); // 중괄호 안의 코드는 명령문(statement)이다.
}
greet("hera"); //hello hera
// 원시 자료형이 함수에 전달 될 때는 참조가 아니라 값의 형태로 전달된다.
// 이는 해당 값에 대한 변경 사항이 전역적으로 반영되지 않음을 의미한다.
// 반면 원시 자료형이 아닌 객체나 배열을 함수에 전달할 때는 참조로 전달된다.
// 즉 해당 값에 대한 수정 사항이 원래의 객체에 반영된다. 
let myInt = 1;

function increase(value) {
    return value += 1;
}

console.log(myInt); //1
console.log(increase(myInt)); //2
console.log(myInt); //1
// 이 예제에서는 정수의 값을 증가시켰지만, 원래 변수에는 영향을 주지 않았다.
// 다음은 객체를 사용한 예다
let myCar = {
    maker:"bmw",
    color:"purple"
};
console.log(myCar); // { maker: 'bmw', color: 'purple' }

function changeColor(car8){
    car8.color = "yellow";
}

changeColor(myCar);
console.log(myCar);//{ maker: 'bmw', color: 'yellow' }
console.log(myCar); // { maker: 'bmw', color: 'yellow' }
// 참조로 했을 경우에는 원래 객체도 수정된다. 

// 함수를 선언하는 또 다른 방법은 함수 표현식(function expression)
const greeter = function greet1(name){
    console.log("hello " + name);
};
greeter("hera"); //hello hera
// 여기서는 greeter라는 const에 greet 함수를 할당했다. 함수 표현식을 사용하여 
// 익명 함수 (anonymous function)를 만들 수도 있다. 아래는 익명함수의 예이다.
const greeter1 = function(name) {
    console.log("hello " + name);
}
greeter("hera"); // hello hera
// greet1을 제거하여 익명함수를 만들었다. ES6에서 도입된 화살표 함수(arrow function)를
// 사용해서 다른 방법으로 선언할 수도 있다.
const greeter2 = (name1) => {
    console.log("hello " + name1);
};
greeter2("hera"); //hello hera
// 이런 예에서 function 키워드가 아예 사라지고 , 매개변수 뒤에 뚱뚱한 화살표(=>)가
// 있는 것을 볼 수 있다. 화살표 함수의 특징은 2장에서...

// 함수 스코프와 this 키워드의 이해
// 스코프(scope)
// 변수의 스코프란 변수에 접근할 수 있는 위치를 제어한다. 전역 스코프(global scpoe)를 가지는 변수는 코드의 어느곳에나
// 접근할 수 있다. 블록 스코프(block scpoe)를 가지는 변수는 변수가 선언된 블록 내부에서만 접근 할 수 있다.
// 여기서 블록(block)은 함수, 루프, 혹은 중괄호({})로 구분되는 모든 영역을 의미한다.
// var 키워드 사용
var myInt1 = 1;

if(myInt1 === 1 ) {
    var mySecondInt = 2;
    console.log(mySecondInt); //2
}
console.log(mySecondInt); //2
// var로 선언된 변수 mySecondInt는 블록 스코프를 가지지 않기 때문에 블록 외부에서도 그 값에 접근가능하다.
// let 키워드 사용
var myInt2 = 1;

if(myInt2 === 1 ){
    let mySecondInt2 = 2;
    console.log(mySecondInt2); //2
}
//console.log(mySecondInt2); // mySecondInt2 is not defined
// 이번에는 블록 스코프 외부에서 변수에 접근할 수 없으며, 접근을 시도하면  mySecondInt2 is not defined 오류가
// 발생하는 것을 볼 수 있다. let 또는 const 키워드로 선언된 변수는 선언된 위치에서 해당하는 블록 스코프를 가지게
// 된다. 스코프에 대한 자세한 내용은 1장에서...

// this 키워드
const myCar1 = {
    color:'red',
    logColor: function(){
        console.log(this.color);
    },
};
myCar1.logColor(); // red
// 이 예에서 this 키워드가 myCar1 객체를 참조한다는 것을 알 수 있다.
// this의 값은 함수가 호출되는 방식에 따라 다르다. 앞의 예에서 함수는 객체의 매서드로 호출 되었다.
function logThis() {
    console.log(this);
}
//logThis(); //Object [global] { ..
// 이 함수는 전역 범위에서 호출했으므로 this 값은 ..? 책에서는 Window 객체를 참조한다고 나와있다.
// 스트릭트 모드 (strict mode)로 설정하면 실수로 window 객체를 참조하는 것을 방지할 수 있다.
// 스트릭트 모드를 설정하려면 자바스크립트 파일의 시작 부분에 'use strict' ; 를 삽입하면 된다.
// 이렇게 하면 자바스크립트에 보다 엄격한 규칙을 적용할 수 있다. 엄격한 규칙 중에는 전역 객체의 값을 Window 객체 대신에
// undefined로 설정하는 규칙이 있어서 , 전역 범위로 정의된 this 키워드의 값도 undefined가 된다.
// this의 값을 수동으로 설정하고자 할때는 .bind()를 사용할 수 있다.
const myCar3 = {
    color: 'pink',
    logColor1: function(){
        console.log(this.color);
    },
};

const unboundGetColor = myCar3.logColor1;
console.log(unboundGetColor());// undefined
const boundGetColor = unboundGetColor.bind(myCar3);
console.log(boundGetColor()); // pink
// unboundGetColor를 myCar3의 logColor 메서드와 동일하게 설정했다.
// unboundGetColor를 호출하면 this.color를 찾으려고 하지만 전역 범위의 this가 호출
// 되기 때문에 그 값은 Window객체가 되고, 이 객체에는 color가 없으므로 결과는 undefined가 된다.
// .bind()를 사용하여 boundGetColor의 this 키워드가 괄호 안의 객체, 즉 여기서는 myCar3를 참조함을 알린다.
// boundGetColor를 호출하면 의도했던 결과를 얻게 된다.
// this 키워드의 값을 설정하는 데 사용할 수 있는 또 다른 방법으로는 .call()과 .apply() 두 가지
// 방법이 있다. 두 메서드 모두 주어진 this의 값으로 함수를 호출한다는 점에서 비슷하지만, 받아들이는 인수가 약간 다르다.
// .call()은 인수의 목록을 받는 반면, .apply()는 하나의 인수 배열을 받는다.
// .call()을 사용하는 예제
function Car9(maker, color) {
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar4(maker, color) {
    Car9.call(this, maker, color); // 인수의 목록
    this.age = 5;
}

const myNewCar = new MyCar4('bmw', 'red');
console.log(myNewCar.carMaker); // bmw
console.log(myNewCar.carColor); // red
// .call()에 MyCar4객체를 전달하여 this.carMaker가 MyCar의 인수로 전달한 maker로 설정되도록
// 했다. color도 마찬가지로 처리했다.
// .appy()를 사용한 예제
function Car10(maker, color) {
    this.carMaker = maker;
    this.carColor = color;
}
function MyCar5(maker, color) {
    Car10.apply(this, [maker, color]); // 인수의 배열
    this.age = 5;
}
const myNewCar1 = new MyCar5('ferrari', 'blue');
console.log(myNewCar1.carMaker); //ferrari
console.log(myNewCar1.carColor); //blue
// 결과는 동일했지만, .apply()는 인수 목록이 담긴 배열을 받는다.
// 함수에 필요한 인수의 수를 모르거나 알 필요가 없을 때에는 .apply()를 주로 쓰게 된다.
// 이런 경우에 .call()은 인수를 개별적으로 전달해야 하므로 사용할 수 없다.
// .apply()는 배열을 전달할 수 있고, 배열에 포함된 원소의 수에 관계없이 함수 내부로 전달할 수 있다.
const ourFunction = function(item, method, args) {
    method.apply(args);
};
ourFunction(item, method, ['argument1', 'argument2']);
ourFunction(item, method, ['argument1', 'argument2', 'argument3']);
// 이런 예와 같이 전달하는 인수의 수에 관계없이 .apply()가 호출될 때 개별적으로 각 인수가 적용된다.

//Quiz
// 1 - 4(3은왜..?) // 정답은 3임 변수에는 문장부호를 아예 포함할 수 없기 때문
// 2 - 4
// 3 - 3
// 4 - 3
// 5 - 4