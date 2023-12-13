// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 2. 화살표 함수
// ES6에서 뚱뚱한 화살표(=>)를 사용해서 함수를 선언하는 방법인 화살표 함수가 처음 도입되었다.
// ES5에서 일반적으로 함수를 선언하는 방법은 다음과 같았다.
const greeting = function(name) {
    return "hello + " + name;
};
// 이를 화살표 함수로 바꾸면
var greeting1 = (name) => {
    return `hello ${name}`;
};
// 매개변수가 하나만 있으면 괄호를 생략하고 다음과 같이 쓸 수도 있다.
var greeting2 = name => {
    return `hello ${name}`;
};
// 매개변수가 전혀 없으면 빈 괄호를 써야 한다.
var greeting3 = () => {
    return "hello";
};
// 암시적 반환 
// 화살표 함수를 사용하면 명시적인 반환을 생략하고 다음과 같이 반환할 수 있다.
const greeting4 = name => `hello ${name}`;
// ES5의 함수와 나란히 비교해보자
const oldFunction = function(name) {
    return "hello " + name;
};

const arrowFunction = name => `hello ${name}`;
// 두 함수 모두 결과는 같지만 새로 도입된 문법을 사용하면 코드가 더 간결해진다.
// 코드의 간결함보다 더 중요한건 가독성이다. 팀 단위의 프로젝트에서 모든 팀원이 ES6의 문법을 
// 숙지하지 못했다면 함수를 다음과 같이 작성하는게 좋다.
const arrowFunction1 = (name) => {
     return `hello ${name}`;
};
// 객체 리러털을 암시적으로 반환해야 한다면 다음과 같은 코드를 사용할 수 있다.
const race = "100m dash";
const runners = ["Usain Bolt", "Justin Gatlin", "Asafa Powell"];

const results = runners.map((runner, i) => ({name: runner, race, place: i + 1}));

console.log(results);
// [
//     { name: 'Usain Bolt', race: '100m dash', place: 1 },
//     { name: 'Justin Gatlin', race: '100m dash', place: 2 },
//     { name: 'Asafa Powell', race: '100m dash', place: 3 }
//   ]
// 이 예에서는 map 함수를 사용해서 runners 배열에 대한 반복(순회)iteration을 구현한다.
// 첫번째 인수 runner는 배열의 현재 원소고, i는 배열의 인덱스이다. 배열의
// 각 원소에 대해 name, race, place 속성을 포함하는 객체를 results에 추가한다. 
// 중괄호 안에 있는 것이 암시적으로 반환하려는 객체 리터럴임을 자바스크립트에 알리려면, 
// 전체를 괄호안에 감싸야 한다. 여기서 race를 쓰나  race: race를 쓰나 모두 결과는 동일하다.

// 화살표 함수는 익명함수
// 화살표 함수는 익명함수이다. 참조할 이름이 필요하다면 함수를 변수에 할당하면 된다.
const greeting5 = name => `hello ${name}`;

greeting5('Tom');

// 화살표 함수와 this 키워드
// 화살표 함수 내부에서 this 키워드를 사용할 때는 일반 함수와 다르게 동작하므로 주의해야 한다.
// 화살표 함수를 사용할 때 this 키워드는 상위 스코프에서 상속된다.
// 화살표 함수가 부모 스코프에서 this의 값을 상속하기 때문에 화살표 함수를 활용할 수 있다.

// 화살표 함수를 피해야 하는 경우
// 화살표 함수에서 this를 주의해서 사용해야 하는 경우
// const button = document.querySelector("btn");
// button.addEventListener("click", () => {
//     this. classList.toggle("on"); // 오류: 여기서 this는 window 객체를 가리킴
// });
// 원래 addEventListener의 콜백함수에서는 this에 해당 이벤트 리스너가 호출된 앨리먼트가 바인딩 되도록 정의 되어 있다.
// 이처럼 이미 this의 값이 정해져있는 콜백함수의 경우, 화살표 함수를 사용하면 기존 바인딩이 사라지고
// 상위 스코프가 바인딩되기 때문에 의도했던대로 동작하지 않는다.
const person1 = {
    age: 10,
    grow: function() {
        this.age++;
        console.log(this.age);
    },
};

person1.grow(); //11

const person2 = { 
    age: 10,
    grow: () => {
        this.age++;
        console.log(this.age); // NaN오류 : 여기서 this는 Window 객체를 가리킴

    }, 
};

person2.grow(); // NaN
// 화살표 함수와 일반 함수의 또 다른 차이점은 arguments 객체에 대한 접근방식이다.
// arguments 객체는 함수 내부에서 접근할 수 있는 배열 객체이며, 해당 함수에 전달된 인수의 값을 담고 있다.
function example() {
    console.log(arguments[0]);
}

example(1, 2, 3); //1
// 이와 같이 배열 표기법 arguments[0]을 사용하면 첫 번째 인수에 접근할 수 있다.
// this 키워드와 비슷하게, 화살표 함수에서 arguments 객체는 부모 스코프의 값을 상속한다.
const showWInner = () => {
    const winner = arguments[0];
    console.log(`${winner} was th winner`);
};

showWInner("Usain Bolt", "Justin Gatlin", "Asafa Powell"); //[object Object] was th winner ?
// 함수에 전달된 모든 인수에 접근하려면, 기존 함수 표기법이나 스프레드문법(9장)을 사용하면 된다.
// 여기서 arguments는 변수 이름이 아니라 키워드이다. 화살표 함수로 arguments에 접근하는 예는 다음과 같다.
const showWInner1 = (...args) => {
    const winner = args[0];
    console.log(`${winner} was the winner`);
};
showWInner1("Usain Bolt", "Justin Gatlin", "Asafa Powell"); //Usain Bolt was the winner

const showWInner2 = function() {
    const winner = arguments[0];
    console.log(`${winner} was the winner`);
};
showWInner2("Usain Bolt", "Justin Gatlin", "Asafa Powell"); //Usain Bolt was the winner

// Quiz
// 1 - 2
// 2 - 1
// 3 - (arg) => {
//     console.log(arg);
// };