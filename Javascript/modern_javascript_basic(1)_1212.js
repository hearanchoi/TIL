// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 1. var, let, const
// ES6부터 let과 const가 도입되었고, 필요에 맞게 변수를 정의하는 것이 더 용이해짐.
// var , let, const의 차이
// var
// var 키워드로 선언된 변수는 함수 스코프에 종속된다. 반면 for 루프(블록 스코프)내에서
// var 키워드로 변수를 선언하면 이 변수를 for 루프 밖에서도 사용할 수 있다.
// for (var i = 0; i < 10; i++) {
//     var leak = "I am available outside of the loop";
// }

// console.log(leak); // I am available outside of the loop

function myFunc() {
    var functionScoped = "I am available inside this function";
    console.log(functionScoped);
}
myFunc(); //I am available inside this function
// console.log(functionScoped); //ReferenceError: functionScoped is not defined
// 첫 번째 예제에서는 var의 값이 블록 스코프를 벗어나도 for 루프 외부에서 접근 할 수 있는 반면,
// 두 번째 예제에서는 var가 함수 스코프 내에 제한되어 함수 외부에서 접근할 수 없다.

// let
// let(및 const)키워드로 선언된 변수는 블록 스코프로 종속된다. 즉 변수가 선언된 블로과 그 하위 블록 내에서만 사용 가능하다.
// let 사용의 예
let x = "global";

if (x === "global") {
    let x = "block-scoped";

    console.log(x); //block-scoped
}

console.log(x); // global

// var 사용의 예
var y = "global";

if (y === "global") {
    var y = "block-scoped";

    console.log(y); //block-scoped
}

console.log(y); //block-scoped
// 블록 스코프 내에서 let으로 선언한 변수에 새 값을 할당했을 때 블록 바깥에서는 그 값이 변경되지 않았다.
// 반면 var로 선언된 변수에 대해 동일한 작업을 하면 블록 스코프 외부에서 접근이 가능하므로 블록 바깥에서도 값이
// 변경되는 것을 볼 수 있다. 

// const
// let과 마찬가지로 const로 선언된 변수도 블록 스코프에 종속되지만, 차이점이 있다면
// 재할당을 통해 값이 변경될 수 없고 다시 선언될 수도 없다는 점이다.
const constant = 'I am constant';
//constant = "I can't be reassigned"; // TypeError: Assignment to constant variable.
// 하지만 const로 선언된 변수가 불변이라는 의미는 아니다.
// const에 객체가 담겼다면?
const person = {
    name: 'hera',
    age: 26,
};
person.age = 27;
console.log(person.age); //27
// 이 경우, 변수 전체를 재할당하는 것이 아니라 그 속성 중 하나만 재할당하는 것이므로, 문제가 없다.
// 참고로, 객체의 내용을 변경할 수 없게 const 객체를 고정할 수는 있다.(하지만 객체의 값을 변경하려고
// 시도할 때 자바스크립트가 오류를 던지지는 않는다.)
const person1 = {
    name: 'hera',
    age: 25,
};
person.age = 26;
console.log(person.age); //26

Object.freeze(person);

person.age = 30;

console.log(person.age); //26

// TDZ (temporal dead zone) : 일시적 비활성 구역
// console.log(i);
var i = "I am a variable"; // undefined

console.log(j);
let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization

// var는 정의되기 전에 접근할 수 있지만, 그 값에는 접근할 수 없다. let과 const는 정의하기전에
// 접근할 수 없다. var, let, const 모두 다른 소스에서 읽을 수 있는 내용임에도 불구하고 호이스팅(hoisting)의 대상이
// 된다. 즉, 코드가 실행되기전에 처리되고 해당 스코프(글로벌이든 블록이든) 상단으로 올라간다.
// var가 가지는 가장 큰 차이점은 정의되기 전에도 접근할 수 있다는 점에 있다. 정의되기 전에는 undefined 값을 가지게 된다.
// 반면, let은 변수가 선언될 때까지 일시적으로 비활성 구역, 즉 TDZ에 있게 된다. 따라서 초기화 되기전에 변수에 접근하면
// 오류가 발생한다. undefined 값을 얻는 것보다는 오류가 발생하는 편이 코드 디버깅이 더 쉽다.

// var, let, const를 적재적소에 쓰는 법
// 마티아스 바인스의 의견 : 기본적으로 const를 사용하자. 재할당이 필요한 경우에만 let을 사용하자.
// var 는 ES6에서 절대 사용하지 않는다.
// 카일 심슨의 의견 : 여러 큰 스코프에서 공유하기 위한 최상위 변수에는 var를 사용한다.
// 작은 스코프의 로컬 변수에는 let을 사용한다. 코드 작성이 어느정도 진행된 후에만 let을 const로 리팩토링 한다. 변수 재할당을
// 막아야 하는 경우라는 것이 확실해야 한다.

// Quiz
// 1 - 2
// 2 - 2
// 3 - 2
// 4 - 2