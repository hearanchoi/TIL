// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 8. 배열 메서드
// Array.from()
// ES6에서 도입한 새로운 배열 메서드들 중 첫번째이다.
// Array.from()은 배열스러운, 즉 배열처럼 보이지만 배열이 아닌 객체를 받아서 실제 배열로 변환해 반환한다.
// HTML
{/* <div class ="fruits">
    <p> Apple </p>
    <p> Banana </p>
    <p> Orange </p>
</div> */}
//JS
// const fruits = document.querySelectorAll(".fruits p");
// fruits는 3개의 p태그를 포함한 노드 리스트(배열과 비슷한 구조)이다.
// 이제 fruits를 배열로 변환하자.
// const fruitArray = Array.from(fruits);

// console.log(fruitArray); // [p, p, p]
//이제 배열을 취급하므로 map()을 사용할 수 있다.
// const fruitNames = fruitArray.map(fruit => fruit.textContent);

// console.log(fruitNames);
// ["Apple", "Banana", "Orange"]
// 다음과 같이 단순화 할 수도 있다.
// const fruits = Array.from(doucment.querySelectorAll(".fruits p"));
// const fruitNames = fruits.map(fruit => fruit.textContent);
// console.log(fruitNames);
// ["Apple", "Banana", "Orange"]

// 이와 같이 fruits를 배열로 변환했다. 따라서 map 등 배열이 제공하는 모든 메서드를 사용할 수 있는 상태가 되었다. 전체 태그가 아닌
// p태그의 textContent만 새로운 배열로 만들었다.
// 또한 Array.from()의 두 번째 인수를 이용해서, 배열에 map 함수를 적용한 것과 동일한 기능을 하는 코드를 작성할 수도 있다.

// const fruits = document.querySelectorAll(".fruits p");
// const fruitArray = Array.from(fruits, fruit => {
//     console.log(fruit);
//     // <p> Apple </p>
//     // <p> Banana </p>
//     // <p> Orange </p>
//     return fruit.textContent;
//     // 태그 자체는 제외하고 태그 안의 텍스트 내용만 얻고자 한다.
// });
// console.log(fruitArray);
// ["Apple", "Banana", "Orange"]

// 이 예시에서는 map역할을 하는 함수를 .from() 메서드의 두 번째 인수에 전달하여 동일한 결과를 얻었다.

// Array.of()
// Array.of()는 전달받은 모든 인수로 배열을 생성한다.
const digits = Array.of(1, 2, 3, 4, 5);
console.log(digits); //[ 1, 2, 3, 4, 5 ]

// Array.find()
// Array.find()는 제공된 테스트 함수를 충족하는 배열의 첫 번째 원소를 반환한다. 충족하는 원소가 없으면 undefined를 반환한다.
const array = [1, 2, 3, 4, 5];

// 배열의 원소 중 3보다 큰 첫 원소를 반환한다.
let found = array.find(e => e > 3);
console.log(found); //4
// 조건 (>3)과 일치하는 첫 번째 원소를 반환하므로 5가 아닌 4가 반환된다.

// Array.findIndex()
// Array.findIndex()는 조건과 일치하는 첫 번째 원소의 인덱스를 반환한다.
const greetings = ["hello", "hi", "byebye", "goodbye", "hi"];

let foundIndex = greetings.findIndex( e => e === "hi");
console.log(foundIndex); // 1

// Array.some()과 Array.every()
// .some()은 조건과 일치하는 원소가 있는지 검색하다가 첫 번째 일치하는 원소를 찾으면 바로 중지한다.
// 반면 .every()는 모든 원소가 주어진 조건과 일치하는지 여부를 확인한다.
const array1 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];

let arraySome = array.some(e => e > 2);
console.log(arraySome); // true

let arrayEvery = array.every( e => e > 2 );
console.log(arrayEvery); // false
// 간단히 말해서, 2보다 큰 원소가 일부 있기 때문에 첫 번째 조건은 참이지만 모든 원소가 2보다 크지는 않기 때문에 두 번째 조건은 거짓이다.

// Quiz
// 1 
const apple = "Apple";

const myArr = Array.from(apple);
console.log(myArr); // [ 'A', 'p', 'p', 'l', 'e' ]

// 2 - 4
// 3 - 4
// 4 - 2