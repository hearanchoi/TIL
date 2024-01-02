// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 17. ES2016의 새로운 기능
// ES2016에서는 두 가지 기능이 새롭게 도입되었다.
// Array.prototype.includes() 와 지수 연산자(**)

// Array.prototype.includes()
// includes() 메서드는 배열에 특정 원소가 포함되어 있으면 true를 반환하고 그렇지 않으면 false를 반환한다.
let array = [1, 2, 4, 5];

console.log(array.includes(2)); //true
console.log(array.includes(3)); //false

// includes()를 인덱스와 함께 사용하기
// includes()에 인덱스를 추가해서 원소를 검색할 수 있다. 기본값은 0이지만 음수를 전달할 수도 있다.
// includes()에 전달하는 첫 번째 값은 검색할 원소이고, 두 번째 값이 검색을 시작할 인덱스이다.
let array1 = [1, 3, 5, 7, 9, 11];
// 인덱스 1부터 시작해서 숫자 3을 찾기
console.log(array1.includes(3, 1)); //true
console.log(array1.includes(5, 4)); //false
// 배열 끝에서 첫 번째 인덱스부터 숫자 1을 찾기
console.log(array1.includes(1, -1)); //false
// 배열 끝에서 세 번째 인덱스부터 숫자 11을 찾기
console.log(array1.includes(11, -3)); //true

// array.includes(5,4); 는 false를 반환했다. 배열은 실제로 인덱스 2에 숫자 5를 포함하고 있지만 인덱스 4부터
// 찾기 시작했기 때문이다. array.includes(1, -1);는 인덱스 -1, 즉 배열의 마지막 원소부터 찾기 시작했기 때문에 false를 반환했다.
// array.includes(11, -3);는 인덱스 -3, 즉 배열의 마지막 원소부터 3번째 원소(7)부터 찾기 시작했기 때문에  11을 찾을 수 있었고 따라서
// true를 반환했다. 반면, 예를 들어 5를 인덱스 -3부터 찾는다면 (array.includes(5, -3)) false를 반환 할 것이다.

// 지수 연산자
// ES2016 이전에는 지수 계산을 위한 코드를 다음과 같이 작성했다.
console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, 3)); //8
// 이제 새로운 지수 연산자(**)를 사용하여 다음과 같이 코드를 작성할 수 있다.
console.log(2 ** 2);//4
console.log(2 ** 3);//8

// 지수 연산자는 다음 예제와 같이 여러 연산을 결합할 때 매우 유용하다.
console.log(2 ** 2 ** 2); //16
console.log(Math.pow(Math.pow(2, 2), 2)); //16
// Math.pow()를 사용하면 함수를 계속 이어서 써야 해서 코드의 가독성이 떨어지지만, 지수 연산자를 사용하면
// 동일한 작업을 더 간결하게 표현할 수 있다.

// Quiz
// 1 - 3
// 2 - 4
// 2 * 2 * 2
