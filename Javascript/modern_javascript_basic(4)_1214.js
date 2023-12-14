// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 4. 템플릿 리터럴
// ES6 이전에는 템플릿 문자열(template string)이라고 부르던 것을 ES6에 와서는 템플릿 리터럴(template literal)이라고
// 부르게 되었다. ES6에서 문자열을 삽입(interpolate)하는 방식이 어떻게 변경되었는지 살펴보자
// 문자열 삽입
// ES5에서는 문자열을 삽입하기 위해 다음과 같은 코드를 작성했다.
var name = 'hera';
var greeting = 'Hello my name is ' + name;

console.log(greeting); //Hello my name is hera
// ES6에서는 백틱`(backtick)을 사용하여 코드를 더 쉽게 작성할 수 있게 되었다.
let name1 = 'Hera';
const greeting1 = `Hello my name is ${name1}`;

console.log(greeting1); //Hello my name is Hera

// 표현식 삽입
// ES5에서의 표현식 삽입은 다음과 같은 코드를 작성했다.
var a = 1;
var b = 10;
console.log('1 * 10 is '+ (a * b));// 1 * 10 is 10
// ES6에서는 백틱을 사용하여 타이핑을 줄일 수 있다.
var c = 1;
var d = 10;
console.log((`1 * 10 id ${a * b}`)); // 1 * 10 id 10

// 여러 줄 문자열 생성
// ES5에서는 HTML 프래그먼트 등에 사용할 여러 줄로 이뤄진 문자열을 다음과 같이 구현했다.
// 각 행마다 백슬래시를 삽입해야 함
var text = "hello, \
my name is hera \
how are you? \ ";
console.log(text); // ES6라 그런가,, 안된다..
//ES6에서는 전체를 백틱으로 감싸기만 하면 된다.
const content = `hello,
my name is Hera
how are you?`;
console.log(content);
 //hello,
// my name is Hera
// how are you?

// 중첩 템플릿
// 다음과 같이 템플릿 안에 템플릿을 중첩하는 것도 매우 쉽다.
const people = [{
    name: 'Alberto',
    age: 27,
}, {
    name: 'Hera',
    age: 27,
}, {
    name: 'Hoon',
    age: 31,
}
];

const markup = `
<ul>
    ${people.map(person => `<li>    ${person.name}</li>`)}
</ul>
`;
console.log(markup);
{/* <ul>
    <li>    Alberto</li>,<li>    Hera</li>,<li>    Hoon</li>
</ul> */}
// 여기서는 map 함수를 사용하여 people의 각 원소에 대해 반복 동작을 수행하고,
// people내에 있는 name을 담아 li 태그를 표시했다.

// 삼항 연산자 추가하기
// 삼항 연산자(ternary operator)를 사용하면 템플릿 문자열 내에 로직을 쉽게 추가할 수 있다.
const isDiscounted = false;

function getPrice() {
    console.log(isDiscounted ? "$10" : "$20");
}
getPrice(); //$20
// ? 앞의 조건이 true이면 첫 번째 값이 반환되고, 그렇지 않으면 : 뒤에 있는 값이 반환된다.
// name, age와 함께 artist를 생성
// const artist = {
//     name: "Bon Jovi",
//     age: 56,
// };
const artist = {
    name: "Trent Reznor",
    age: 53,
    song: 'Hurt',
};
// artist 객체에 song 프로퍼티가 있을 때만 문장에 추가하고,
// 없으면 아무것도 반환하지 않음

const text1 = `
    <div>
        <p>  ${artist.name} is ${artist.age} years old ${artist.song ? `and wrote the song ${artist.song}` : ''}
        </p>
    <div>
`;
console.log(text1);
{/* <div>
<p>  Bon Jovi is 56 years old 
</p>
<div> */}
{/* <div>
<p>  Trent Reznor is 53 years old and wrote the song Hurt
</p>
<div> */}

// 템플릿 리터럴에 함수 전달하기
// 다음 예제 코드처럼, 필요하면 템플릿 리터럴내에 함수를 전달할 수도 있다.
// (${groceryList(groceries.others)} 부분.)
const groceries = {
    meat: "pork chop",
    veggie: 'salad',
    fruit: "apple",
    others: ['mushrooms', 'instant noodles', 'instant soup'],
};

// groceries의 각 값에 대해 map()을 수행하는 함수
function groceryList(others) {
    return `
      <p>
        ${others.map( other => ` <span>${other}</span>`).join('\n')}
      </p>
    `;
}

// p태그 내 모든 groceries를 출력, 마지막은 **others** 배열의 모든 원소를 포함
const markup1 = `
   <div>
      <p>${groceries.meat}</p>
      <p>${groceries.veggie}</p>
      <p>${groceries.fruit}</p>
      <p>${groceryList(groceries.others)}</p>
   </div>
`;
console.log(markup1);
{/* <div>
<p>pork chop</p>
<p>salad</p>
<p>apple</p>
<p>
<p>
   <span>mushrooms</span>
<span>instant noodles</span>
<span>instant soup</span>
</p>
</p>
</div> */}
// 마지막 p태그에서 groceryList를 호출하여 다른 모든 others를 인수로 전달했다.
// 함수 내에서 p태그를 반환하고 map을 사용하여 groceries의 각 원소에 대해 반복하여 각 원소를 담은
// span태그 배열을 반환한다. 그런 다음 .join(`\n')을 사용하여 각 span뒤에 새 행을 추가했다.

// 태그된 템플릿 리터럴
// 함수를 태그(tag)하여 템플릿 리터럴을 실행하면 템플릿 내부에 있는 모든 항목이 태그된 함수의 인수로 제고오딘다.
// 작동 방식은 매우 간단하다. 함수 이름을 가져다 실행할 템플릿 앞에 쓰기만 하면 된다.
let person = 'Hera';
let age = 25;

function myTag(strings, personName, personAge) {
    // strings: ["That ", " is a ", "!"]
    let str = strings[1]; // " is a"
    let ageStr;

    personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!`;
console.log(sentence);
// Hera is a youngster
// 이 코드의 함수는 age 변수의 값을 받아서 삼항 연산자를 사용하여 출력할 항목을 결정한다.
// 함수에서 첫 번째 인수 strings는 let sentence 문의 전체 문자열 중 템플릿 리터러 변수를 제외한 문자열들이 담긴
// 배열로 설정되고, 템플릿 리터럴 변수들이 나머지 인수가 된다.

// strings 배열의 각 원소는 템플릿 리터럴에 포함된 변수들을 구분자로 삼아 문자열을 나눈 결과와 같다.
// 이 예에서 문자열은 That.${person}, is a, ${age},! 다섯 부분으로 나뉘므로 여기서 변수를 제외한 ["That ", " is a ", "!"]가
// strings가 된다. 배열 표기법을 사용하여 다음과 같이 중간에 있는 문자열에 접근할 수 있다.
// let str = strings[1] // "is a"

// Quiz
// 1 
let f = "Hello,";
let g = "is";
let h = "my";
let i = "name";
let j = "Tom";
// 예상 결과를 얻기 위해 다음 코드를 수정해보자
// 예상 결과 : Hello, my name is Tom
let result = `${f} ${h} ${i} ${g} ${j}`;
console.log(result);

// 2 : 템플릿 리터럴을 사용하여 다음 코드 리팩터링
let k = "1";
let l = "2";
let m = "plus";
let n = "3";
let o = "equals";

// 다음 코드에 템플릿 리터럴을 사용해보자.
let result1 = `${k} ${m} ${l} ${o} ${n}`;

console.log(result1); 
// 1 plus 2 equals 3

// 3
// 다음 코드에 템플릿 리터럴을 사용해보자.
let str =`this is a very long text
a very long text`;

console.log(str);

// this is a very long text
// a very long text