// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 16. 세트, 워크셋, 맵, 워크맵
// 세트
// 세트(집합)set란 어떠한 자료형의 값이든 각 원소를 고유하게 저장하는 객체이다.
// 세트 생성
const family = new Set();

// 세트에 값 추가
family.add("Dad");
console.log(family);
// Set(1) { 'Dad' }

family.add("Mom");
console.log(family);
// Set(2) { 'Dad', 'Mom' }

family.add("Son");
console.log(family);
// Set(3) { 'Dad', 'Mom', 'Son' }

family.add("Dad");
console.log(family);
// Set(3) { 'Dad', 'Mom', 'Son' }
// 마지막 부분에서 "Dad"를 다시 추가하려고 했지만, Set는 고유한 값만 가질 수 있기 때문에 동일하게 유지됨을 볼 수 있다.
// Set를 계속 사용해보면서 어떤 메서드들이 있는지 살펴보겠다.
console.log(family.size); //3
console.log(family.keys()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
console.log(family.entries()); //[Set Entries] { [ 'Dad', 'Dad' ], [ 'Mom', 'Mom' ], [ 'Son', 'Son' ] }
console.log(family.values()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
// family.delete("Dad")
console.log(family);//Set(2) { 'Mom', 'Son' }
// family.clear();
console.log(family); //Set(0) {}
// 코드를 보면 알 수 있듯이, Set에는 size 속성이 있으며, delete를 사용해서 하나의 원소를 삭제하거나 clear를 사용하여 모든 원소를 삭제할 수 있다.
// 또한 Set에는 키가 없기 때문에 .key()를 호출하면 .values()또는 .entries()를 호출하는 것과 동일한 결과를 얻는다.

// Set에 대한 루프
// .next()를 사용하거나 for of 루프를 사용하는 두 가지 방법으로 Set에 대해 반복할 수 있다.
// .next() 사용
const iterator = family.values();
iterator.next();
// {value: 'Dad', done: false}
iterator.next(); // {value: 'Mom', done: false}

// for of 루프 사용
for (const person of family) {
    console.log(person);
}
// Dad
// Mom
// Son
// values() 메서드는 제너레이터 함수와 비슷하게 next()를 호출할 수 있는 Iterator 객체를 반환한다.

// 배열에서 중복 제거하기
// 고유한 값만 보유할 수 있는 Set의 특징을 이용하여 배열에서 중복을 제거할 수 있다.
const myArray = ["dad", "mom", "son", "dad", "mom", "daughter"];
const set = new Set(myArray);
console.log(set); //Set(4) { 'dad', 'mom', 'son', 'daughter' }

// Set를 Array로 변환
// const uniqueArray = Array.from(set);
// console.log(uniqueArray); // [ 'dad', 'mom', 'son', 'daughter' ]

// 동일 내용을 한 줄로도 작성 가능
const uniqueArray = Array.from(new Set(myArray));
console.log(uniqueArray); //[ 'dad', 'mom', 'son', 'daughter' ]

// 결과를 보면 새로운 배열에는 원래 배열의 고유한 원소만 포함된다.

// 위크셋
// 위크셋(weakSet)은 세트와 유사하지만 객체만 포함할 수 있다.
let dad = {name: "Daddy", age:50};
let mom = {name: "Mummy", age: 45};

const family1 = new WeakSet([dad, mom]);
// for(const person of family1) {
//     console.log(person);
// }
//TypeError: family1 is not iterable
// WeakSet은 이터러블이 아니다. 이 예제처럼 WeakSet에 대해 for of 루프를 사용하려고 하면 
// 작동하지 않는 것을 확인할 수 있다. WeakSet이 포함하는 객체가 가비지 컬렉터(garbage collector)에 의해
// 삭제되면 해당 객체는 WeakSet에서도 자동으로 삭제된다.

dad = null;
console.log(family1); //WeakSet { <items unknown> }
// 브라우저 콘솔에서 이 예제슬 실행하면, dad = null 일 실행되고 얼마 후에 가비지 컬렉터가 실행되어 family에서
// dad 객체가 제거된 것을 볼 수 있다. 이는 dad를 null로 설정했을 때 참조가 손실되었기 때문이다.

// 맵
// 맵(map)은 Set와 유사하지만 키/값 쌍으로 이루어진다.
const family2 = new Map();

family2.set('Dad', 40);
family2.set("Mom", 50);
family2.set("Son", 20);

console.log(family2); //Map(3) { 'Dad' => 40, 'Mom' => 50, 'Son' => 20 }

family2.forEach((val, key) => console.log(key, val));
// Dad 40
// Mom 50
// Son 20

for (const [key, val] of family2) {
    console.log(key, val);
}
// Dad 40
// Mom 50
// Son 20
// Set은 for of 루프로만 반복할 수 있지만, Map은 반복을 위해 for of 루프와 forEach 함수 둘 다
// 사용할 수 있다.

// 위크맵
// 위크맵(weakMap)은 키/값 쌍의 모음이지만 키는 객체여야만 한다. WeakSet과 유사하게 WeakMap에서도 키(객체)는
// 약하게(weakly) 참조된다. 따라서 키로 사용된 객체의 참조가 손실되어 가비지 컬렉터에 의해 수집되면 WeakMap에서도
// 해당 키/값쌍이 자동으로 제거된다. WeakMap은 열거 가능하지 않기 때문에 원소에 반복을 수행하는 것이 불가능하다.
let dad1 = {name: "Daddy"};
let mom1 = {name: "Mommy"};

const myMap = new Map();
const myWeakMap = new WeakMap();

myMap.set(dad1, "any value");
myWeakMap.set(mom1, "any value");

dad1 = null;
mom1 = null;

console.log(myMap);
console.log(myWeakMap);
// Map(1) { { name: 'Daddy' } => 'any value' }
// WeakMap { <items unknown> }
// 결과를 보면 값을 null로 설정한 객체는 가비지 컬렉터에 의해 수집되기 때문에 WeakMap에서는 제거되었지만
// Map안에는 남아있다.

// Quiz 
// 1 - 3
// 2 - 2
// 3 - 3
