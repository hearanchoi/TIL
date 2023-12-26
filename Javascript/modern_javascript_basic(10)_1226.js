// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 10. 객체 리터럴의 업그레이드
// ES6에서 객체 리터럴 표기를 얼마나 다양하게 개선했는지 살펴보자
// 변수를 키와 값으로 하는 객체 만들기
const name = "Alberto";
const surname = "Montalesi";
const age = 25;
const nationality = "Italian";
// 이 코드를 이용하여 객체 리터럴을 만들고 싶다면 일반적으로 다음과 같이 할 것이다.
const person = {
    name: name,
    surname: surname,
    age: age,
    nationality: nationality,
};

console.log(person);
// {
//     name: 'Alberto',
//     surname: 'Montalesi',
//     age: 25,
//     nationality: 'Italian'
//   }
// ES6에서는 다음과 같이 단순화 할 수 있다.
const person1 = {
    name,
    surname,
    age,
    nationality,
};
console.log(person1); 
// {
//     name: 'Alberto',
//     surname: 'Montalesi',
//     age: 25,
//     nationality: 'Italian'
//   }
// 변수들의 이름이 코드 내의 속성과 같은 동일하기 때문에, 코드 내에서 굳이 두번씩 표기 하지 않아도 된다.

// 객체에 함수 추가하기
// ES5의 예를 살펴보자
const person2 = {
    name: 'Alberto',
    greet: function() {
        console.log("Hello");
    },
};
person2.greet(); //Hello

// 객체에 함수를 추가하려면 function 키워드를 사용해야 했다. ES6에서는 이것이 더 쉬워졌다.
const person3 = {
    name: 'Alberto',
    greet() {
        console.log("Hello");
    },
};
person3.greet(); //Hello
// function 키워드가 없고, 코드는 더 짧아졌지만 동일한 동작을 수행한다.
// 화살표 함수는 익명 함수라는 것을 기억하고, 다음 예제를 살펴보자.
// 다음 코드는 작동하지 않는다. 함수에 접근하기 위한 키가 필요하다.
// const person4 = {
//     () => console.log("Hello");
// };

const person5 = {
    greet: () => console.log("Hello"),
};

person5.greet();
//Hello

// 객체의 속성을 동적으로 정의하기
// 다음은 ES5에서 객체의 속성을 동적으로 정의하는 방법이다.
var name1 = "myname";
// 빈 객체를 생성한다.
var person6 ={};
// 객체를 업데이트 한다.
person6[name1] = "Alberto"
console.log(person6.myname); //Alberto

// 이렇게 먼저 객체를 생성한 다음 수정해야했다. 그러나 ES6에서는 두 가지를 동시에 할 수 있다.
const name2 = "myname";
const person7 = {
    [name2] : "Alberto",
};
console.log(person7.myname); //Alberto

// Quiz 
// 1 
const animal = {
    name,
    age,
    breed,
};

// 2 -2
// 3 - 3