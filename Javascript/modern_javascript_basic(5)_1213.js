// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 5. 문자열 메서드
// 기본적인 문자열 메서드
// indexOf()
// 문자열에서 지정된 값이 처음 나타나는 위치를 반환한다.
const str = "this is a short sentence";
console.log(str.indexOf("short")); // 10 (대소문자를 구분한다.)

// slice()
// 문자열의 지정된 부분을 새 문자열로 반환한다. 첫 번째 인자로 인덱스 시작 두번째 인자로 포함하지 않고 인덱스 종료
const str1 = "pizza, orange, cereals";
console.log(str1.slice(0,5)); // pizza

// toUpperCase()
// 문자열 내의 모든 문자를 대문자로 바꾼다.
const str2 = "i ate an apple";
console.log(str2.toUpperCase());// I ATE AN APPLE

// toLowerCase()
// 문자열의 모든 문자를 소문자로 바꾼다.
const str3 = "I ATE AN APPLE";
console.log(str3.toLowerCase()); //i ate an apple

// ES에서 도입한 새로운 문자열 메서드
// startsWith()
// 매개변수로 받은 값으로 문자열이 시작하는지 확인
const code = "ABCDEFG";

console.log(code.startsWith("ABB")); //false

console.log(code.startsWith("abc")); //fasle : startsWith는 대소문자를 구분

console.log(code.startsWith("ABC")); // true
// 매개변수를 추가로 전달하면 메서드가 검사를 시작하는 시작점을 지정할수도 있다.
const code1 = "ABCDEFGHI";

console.log(code1.startsWith("DEF", 3));//  true (3개 문자를 지나 검사를 시작한다.)

// endsWith()
// startsWith()와 유사하게 문자열이 우리가 전달한 값으로 끝나는지 확인한다.
const code2 = "ABCDEF";

console.log(code2.endsWith("DDD")); // false

console.log(code2.endsWith("def")); //false (대소문자를 구분한다.)

console.log(code2.endsWith("DEF")); // true
// 추가 매개변수로 문자열의 얼마큼만을 확인할지 길이를 전달할 수 있다.
const code3 = "ABCDEFGHI";

console.log(code3.endsWith("EF", 6)); //true 첫 6개 문자인 ABCDEF만을 고려한다.

// includes()
// 우리가 전달한 값이 문자열에 포함되어 있는지 확인한다.
const code4 = "ABCDEF";

console.log(code4.includes("ABB")); //false

console.log(code4.includes("abc")); //false (대소문자를 구분한다.)

console.log(code4.includes("CDE")); //true

// repeat()
// 문자열을 반복하며 횟수를 인수로 받는다.
let hello = "Hi";
console.log(hello.repeat(10));
//HiHiHiHiHiHiHiHiHiHi

// Quiz
// 1 - 2
// 2 - 2
// 3 
let str4 = "Na";
let bat = "BatMan"; 

let batman = `${str4.repeat(8)} ${bat}`
console.log(batman); // NaNaNaNaNaNaNaNa Batman