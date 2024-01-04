// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 21. ES2019의 새로운 기능
// Array.prototype.flat()과 Array.prototype.flatMap()
// Array.prototype.flat()은 지정한 깊이까지 배열을 재귀적으로 평면화(flatten)한다. 깊이 인수가 지정되지 않으면
// 1이 기본값이다. Infinity로 지정하면 모든 중접 배열을 평면화 할 수 있다. 
const letters = ['a', 'b', ['c', 'd', ['e', 'f']]];

// 깊이 1(기본값) 평면화
console.log(letters.flat()); //[ 'a', 'b', 'c', 'd', [ 'e', 'f' ] ]

// 깊이 2 평면화
console.log(letters.flat(2));  //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 깊이 1 평면화를 두 번 수행해도 동일한 결과
console.log(letters.flat().flat());  // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 중첩된 배열이 모두 없어질 때까지 평면화
console.log(letters.flat(Infinity)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Array.prototype.flatMap()은 .flat()과 동일한 방식으로 깊이 인수를 처리하지만 단순히 배열을 평면화하는
// 대신 새로운 값으로 매핑되어 생긴 배열을 평면화한다. 
let greeting = ["Greetings from", " ", "Vietnam"];

// 일반 map()함수를 사용
console.log(greeting.map(x => x.split(" ")));
// [ [ 'Greetings', 'from' ], [ '', '' ], [ 'Vietnam' ] ]
console.log(greeting.flatMap(x => x.split(" ")));
// [ 'Greetings', 'from', '', '', 'Vietnam' ]

// 보다시피 .map()을 사용하면 배열안에 중첩이 된 결과를 얻게 되지만 .flatmap()을 사용하면 
// 이를 평면화 할 수 있다.

// Object.fromEntries()
// Object.fromEntries()는 키/값 쌍이 포함된 배열을 객체로 변환한다.
const keyValueArray = [
    ['key1', 'value1'],
    ['key2', 'value2'],
];

const obj = Object.fromEntries(keyValueArray);
console.log(obj); //{ key1: 'value1', key2: 'value2' }
// 배열, 맵 등의 이터러블 프로토콜을 구현하는 객체라면 무엇이든 Object.fromEntries()의 인수로
// 전달가능하다. 

// String.prototype.trimStart()와 String.prototype.trimEnd()
// trimStart()는 문자열 시작 부분의 공백을 제거하고 trimEnd()는 문자열 끝 부분의 공백을 제거한다.
let str = "     this string has a lot of whitespace        ";
console.log(str.length); //48

console.log(str); //this string has a lot of whitespace     
console.log(str.length); //43

str = str.trimEnd();
console.log(str); //this string has a lot of whitespace
console.log(str.length); //35
// trimStart()의 별칭으로 trimLeft()룰, trimEnd()의 별칭으로 trimRight()를 사용할 수도 있다.

// 선택적 catch 할당
// ES2019 이전에는 catch 절에 항상 예외 변수를 포함해야 했다. ES2019에서는 이를 생략 가능하다.
// ES2019 이전
try {

} catch(error) {

}
// ES2019
try {
    
} catch {

}
// 이와 같은 문법은 오류를 무시하고자 할 때 유용하다. 

// Function.prototype.toString()
// 함수 객체의 .toString() 메서드는 함수의 소스 코드를 나타내는 문자열을 반환한다.
function sum(a, b){
    return a + b;
}

console.log(sum.toString());
// function sum(a, b){
//     return a + b;
// }
// ES2016까지는 소스코드에서 주석이나 공백 문자를 제거했지만, ES2019에서 개정되어 해당 문자열에서는
// 주석 등도 포함된다.
function sum1(a,b){
    // 합계를 구하는 함수
    return a + b;
}
console.log(sum1.toString());
// function sum1(a,b){
//     // 합계를 구하는 함수
//     return a + b;
// }

// Symbol.prototype.description
// 심벌 객체의 description은 해당 심벌 객체의 설명을 반환한다.
const me = Symbol("Alberto");
console.log(me.description); //Alberto
console.log(me.toString()); //Symbol(Alberto)

// Quiz
// 1 
letters.flat(Infinity);

// 2
Object.fromEntries(keyValueArray);

// 3 - 3
// 4 - 3
// 5 - 4