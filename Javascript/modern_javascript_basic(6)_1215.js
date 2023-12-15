// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 6. 디스트럭처링
// MDN은 디스트럭처링(destructuring)을 다음과 같이 정의한다.
// 디스트럭처링 할당 문법은 배열의 값 또는 객체의 속성을 풀어서 별개의 변수로
// 쓸 수 있게 해주는 자바스크립트 표현식이다.
// 객체 디스트럭처링 
// 예전에는 객체에서 변수를 생성하려면 다음과 같이 작성하였다.
var person = {
    first: "Hera",
    last: "Alberto",
};

var first = person.first;
var last = person.last;
// ES6에서는 더 간결하게 다음과 같은 방법을 사용한다.
var person1 = {
    first1: "Hera",
    last1: "Alberto",
};

const {first1, last1} = person1;
// 디스트럭처링을 이용하여  person이 가진 속성에 접근함과 동시에 해당 속성 이름으로
// 변수 선언이 가능함을 알 수 있다.
// 다음과 같이 중첩된 객체 형태로 데이터가 주어진 경우에도 동일한 방법을 적용할 수 있다.
const person2 = {
    name: "Hera",
    last: "Alberto",
    links: {
        social: {
            facebook: "https://www.facebook.com/alberto.motalesi",
        },
        website: "https://ablertomontalesi.github.io/",
    },
};

const {facebook} = person2.links.social;
// 변수의 이름을 객체의 속성과 동일하게 지정하는데 그치지 않고, 다음과 같이 변수 이름을 바꿀 수도 있다.
// const { facebook: fb} = person2.links.social;
// person2.links.social.facebook 프로퍼티를 찾아 fb라는 변수로 명명함
// console.log(fb); // https://www.facebook.com/alberto.motalesi
console.log(facebook); //ReferenceError: person2 is not defined
// 이 코드는 const {facebook: fb} 식의 문법을 사용하여 person.links.social 객체의 속성 facebook을 대상으로
// 지정하고 const 변수를 fb라고 명명한다. 변수명이 facebook이 아니기 때문에 
// facebook 값을 출력하려 하면 오류가 발생한다.
// 다음과 같이 기본 값을 전달할 수도 있다.
// 변수를 fb로 다시 명명하고 기본값을 설정한다.
const {facebook: fb = "https://www.faceboock.com"} = person2.links.social;

// 배열 디스트럭처링
// 배열을 디스트럭처링할 때는 객체의 디스트럭처링과는 달리 {}가 아닌 []를 사용한다.
const person3 = ["Hera", "Alberto", 25];
const [name, surname, age] = person3;
// 생성하려는 변수의 수가 배열의 원소보다 적다면 어떻게 할까?
const person4 =  ["Hera", "Alberto", 25];
// age(25)는 필요하지 않으므로 뺀다.
const [name1, surname2] = person4;
// 25는 어떤 변수에도 할당되지 않는다. 
console.log(name1, surname2); // Hera Alberto
// 나머지 모든 값을 얻고 싶다면 레스트 연산자(rest operator)를 사용하면 된다.
const person5 = ["Hera", "Alberto", "pizza", "ice cream", "cheese cake"];
// 레스트 연산자를 사용하여 나머지 값 전체를 얻는다.
const [name2, surname1, ...food] = person5;
console.log(food); //[ 'pizza', 'ice cream', 'cheese cake' ]
// 이 예에서 배열의 처음 두 값은 name과 surname에 할당되고 나머지(rest)는 food 배열에 할당된다.(그래서 레스트 연산자라고 부른다.)
// ...가 레스트 연산자를 의미한다.

// 디스트럭처링을 이용하여 변수 교체하기
// 디스트럭처링 할당을 사용하면 변수의 값을 매우 쉽게 서로 교체(swap)할 수 있다.
let hungry = "yes";
let full = "no";
// 식후에는 배고프지(hungry) 않고 배부를(full) 것이다. 값을 교체하자.
[hungry, full] = [full, hungry];
console.log(hungry, full);  // no yes

// Quiz
// 1
let hungry1 = "yes";
let full1 = "no";

[hungry1, full1] = [full1, hungry1]

console.log(hungry1); //no
console.log(full1); //yes

// 2
let arr = ["one", "two", "three"];

const [one, two, three] = arr

console.log(one, two, three); //one two three