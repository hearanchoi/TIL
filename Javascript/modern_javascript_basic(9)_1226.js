// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 9. 스프레드 연산자와 레스트 매개변수
// 스프레드 연산자
// MDN은 스프레드 문법을 다음과 같이 설명한다. 스프레드 문법을 사용하면 0개 이상의 인수(함수 호출용)
// 또는 원소(배열 리터럴용)가 예상되는 위치에서 배열 표현식 또는 문자열과 같은 이터러블
// 항목을 확장하거나 0개 이상의 키/값 쌍 (객체 리터럴용)이 예상되는 위치에서 객체 표현식을
// 확장할 수 있다.

// 배열의 결합
const veggie = ["tomato", 'cucumber', 'beans'];
const meat = ["pork", 'beef', 'chicken'];

const menu = [...veggie, 'pasta', ...meat];
console.log(menu); 
//[
//     'tomato',  'cucumber',
//     'beans',   'pasta',
//     'pork',    'beef',
//     'chicken'
//   ]
// 여기서 ...이 바로 스프레드 문법으로, veggie와 meat 배열의 모든 개별 원소를 풀어서 
// menu 배열에 넣었고, 동시에 그 사이에 새 항목을 추가했다.

// 배열의 복사 
// 스프레드 문법은 배열의 복사본을 생성할 때 매우 유용하다.
const newVeggie = veggie; // 이건 참조 
// veggie 배열의 복사본을 생성한 것처럼 보이지만, 다음을 보자.
veggie.push('peas');
console.log(veggie); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
// 이 코드에서는 기존 배열(veggie)을 수정하자 새 배열(newVeggie)도 변경되었다. 
// 실제로는 복사본을 만든 것이 아니라, 새 배열은 단순히 이전 배열을 참조하기 때문이다.
// 다음은 ES5 및 이전 버전에서 일반적으로 배열의 복사본을 만드는 방법이다.
const veggie1 = ["tomato", 'cucumber', 'beans'];
// 빈 배열을 새로 생성하고 기존 배열의 값을 새 배열에 이어 붙인다.
const newVeggie1 = [].concat(veggie1);
veggie1.push("peas");
console.log(veggie1); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie1); //[ 'tomato', 'cucumber', 'beans' ]
// 스프레드 문법을 사용하면 다음과 같은 코드로 동일한 결과를 얻을 수 있다.
const veggie2 =  ["tomato", 'cucumber', 'beans'];
const newVeggie2 = [...veggie2]; // 스프레드문법은 배열 복사 
veggie2.push('peas'); 
console.log(veggie2); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2); // [ 'tomato', 'cucumber', 'beans' ]
// 스프레드 연산자의 문법은 ...Your Array 이런식이다. 예제 코드에서는 변수 newVeggie를 
// 배열 veggie의 복사본으로 만들기 위해, 우선 newVeggie에 배열을 할당하고 그 내부에 스프레드
// 연산자를 통해 veggie 변수의 모든 원소를 넣었다.

// 함수의 스프레드 연산자
// 인수들을 원소로 가지는 배열에 스프레드 연산자를 사용하면 함수를 쉽게 호출할 수 있다.
// 기존 방식
function doStuff (x, y, z) {
    console.log(x + y + z);
}
var args = [0, 1, 2];

// 함수 호출, 인수 전달
// doStuff.apply(null, args);

// 스프레드 문법 사용
doStuff(...args); // 3
console.log(args); // [ 0, 1, 2 ]
// 이 예제에서 doStuff 함수는 3개의 매개변수를 받는다. doStuff 함수를 호출할 때 args배열을
// ...args와 같이 써서 스프레드 연산자와 함께 함수에 전달할 수 있다. 이렇게 하면 굳이 .apply()사용에
// 의존하지 않아도 된다.

const name = [ "Alberto", "Montalesi"];

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}
greet(...name); // Hello Alberto Montalesi
// 배열의 두 값은 함수의 두 인수에 자동으로 할당된다.
// 지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name1 = ["Jone", "Paul", "Jones"];

function greet1(first, last){
    console.log(`Hello ${first} ${last}`);
}
greet1(...name1); //Hello Jone Paul
// 이 예시에서는 배열 내에 세 개의 값을 제공했지만 함수에는 두 개의 인수만 있으므로 마지막 인수는 제외된다.

// 객체 리터럴과 스프레드(ES2018)
// 이 기능은 ES6의 일부는 아니지만, 스프레드를 다루는 김에 ES2018에 서 도입된 객체에 대한
// 스프레드를 다루는 김에 ES2018에서 도입된 객체에 대한 스프레드 연산자의 예시도 함께 살펴보자.
let person = {
    name: "Alberto",
    surname: "Montalesi",
    age: 25,
};

let clone = {...person};
console.log(clone); //{ name: 'Alberto', surname: 'Montalesi', age: 25 }

// 레스트 매개변수
// 레스트 문법은 점 3개로 이뤄졌다는 점에서 스프레드 문법과 똑같지만 기능적으로는 그 반대이다.
// 스프레드는 배열을 '확장'하는 반면, 레스트는 여러 원소를 하나의 원소로 '압축'한다.
const runners = ['Tom', "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;

console.log(...losers); // Mark Luke
// 처음 두 값은 first와 second 변수에 저장하고, 나머지 원소는 레스트 연산자를 사용하여 losers 변수에 
// 배열로 담았다. 마지막에는 이 배열을 스프레드 연산자로 풀어서 console.log()에 넘겼다.

// Quiz
// 1 - 3
// 2
const veggie3 = ["tomato", "cucumber", "beans"];
const meat1 = ["pork", "beef", "chicken"];
const menu1 = [...veggie3, "pasta", ...meat1];
console.log(menu1);
// [
//     'tomato',  'cucumber',
//     'beans',   'pasta',
//     'pork',    'beef',
//     'chicken'
//   ]

// 3 
const runners1 =  ['Tom', "Paul", "Mark", "Luke"];
const [first1, second1, ...losers1] = runners1
console.log(losers1); //[ 'Mark', 'Luke' ]

//4 - 3