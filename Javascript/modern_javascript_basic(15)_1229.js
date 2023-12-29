// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 15. 프록시
// 프록시(Proxy) 객체는 기본 작업(예 : 속성 조회, 할당, 열거, 함수 호출 등)에 대해 사용자 지정 동작을 
// 추가로 정의하는 데 사용한다.
// 프록시 생성
// var x = new Proxy(target, handler);
// target은 객체, 함수 , 다른 프록시 등 무엇이든 가능하다.
// handler는 작업이 수행될 때 프록시의 동작을 정의하는 객체이다.
// 원본 객체
const dog = {breed: "German Shephard", age: 5};

// 프록시 객체
const dogProxy = new Proxy(dog, {
    get(target, breed) {
        return target[breed].toUpperCase();
    },
    set(target, breed, value){
        console.log("changing breed to...");
        target[breed] = value; 
    },

});

console.log(dogProxy.breed);
//GERMAN SHEPHARD
console.log(dogProxy.breed = "Labrador");
//changing breed to...
//Labrador
console.log(dogProxy.breed);
//LABRADOR
// get 메서드를 호출할 때 정상적인 실행 흐름에 끼어들어서 breed의 값을 대문자로 변경했다.
// set 메서드로 새 값을 설정할 때도 다시 끼어들어서 값을 실행하기 전에 짧은 메시지를 출력했다.

// 프록시 활용
// 프록시는 데이터를 검증하는 데 사용할 수 있다.
const validateAge = {
    set: function(object, property, value) {
        if (property === 'age') {
            if (value < 18) {
                throw new Error('you are too young!');
            }
            else {
                // 기본동작
                object[property] = value;
                return true;
            }
        }
    }
};
const user = new Proxy({}, validateAge);

user.age = 21;
//17 Error: you are too young!
// user 객체의 age 속성을 설정할때마다 validateAge 함수가 실행되어 age 속성의 값이
// 18보다 작은 경우 오류를 발생시킨다.
// 프록시는 동일한 내용의 게터와 세터를 많은 속성에 적용해야 할 때 매우 유용하다.
// 이럴 때 프록시를 사용하면 하나의 게터와 하나의 세터만 정의하면 된다.
// 프록시를 사용하지 않은 예를 살펴보자
const dog1 ={
    _name:'pup',
    _age:7,

    get name() {
        console.log(this._name);
    },
    get age() {
        console.log(this._age);
    },

    set name(newName) {
        this._name = newName;
        console.log(this._name);
    },
    
    set age(newAge) {
        this._age = newAge;
        console.log(this._age);
    },
};

dog1.name;
//pup
dog1.age; //7
dog1.breed; // undefined
dog1.name = 'Max'; //Max
dog1.age = 8; //8

// 잠시 name, age 대신 _name, _age 형태의 이름을 사용했다는 점에 주목하자. 자바스크립트 코딩 관습에서
// _기호는 프라이빗 (private)속성을 정의하는 데 사용된다. 즉 , 클래스 내부에서만 접근이 가능한 속성을
// 의미한다. 자바스크립트에서 이를 문법적으로 강제하지는 않지만, 개발자가 프라이빗 속성들을 빠르게 식별할 수
// 있도록 이렇게 사용하곤 있다. 또한 예를 들어 다음과 같은 형태로 함수가 작성된 경우 this.name은 세터를
// 다시 호출하므로 무한 루프가 발생한다. 이때 속성의 이름 앞에 _ 기호를 사용하면 문제를 피할 수 있다.
// set name(newName) {
//     this.name = newName;
// }
// 물론 이것은 다음과 같이 세터의 이름을 다른 이름으로 변경하여 얻을 수 있는 효과와 동일하다.
// set rename(newName) {
//     this.name = newName;
// }
// 예제 코드로 돌아가자. name과 age라는 두 가지 속성이 있으며 각각에 대해 게터와 세터를 만들어야 했다.
// 여기서 breed와 같이 객체에 존재하지 않는 속성에 접근하려고 하면 undefined가 반환된다.
// 이제 프록시를 사용하여 더 간결하게 작성한 코드를 살펴보자.
const dog2 = {
    name: 'pup',
    age: 7,
};
const handler = {
    get: (target, property) => {
        property in target ? console.log(target[property]) : console.log('property not found');
    },
    set: (target, property, value) => {
        target[property] = value;
        console.log(target[property]);
    },
};

const dogProxy1 = new Proxy(dog2, handler);

dogProxy1.name; //pup
dogProxy1.age; //7
dogProxy1.name = 'Max'; //Max
dogProxy1.age = 8; //8
dogProxy1.breed; //property not found

// 이 예시에서는 dog2객체를 만들었지만 객체 내부에 게터와 세터를 따로 정의하지 않았다. 대신 하나의 게터와
// 세터로 모든 속성을 처리할 수 있게 handler를 만들었다. 게터는 객체와 속성 두 인수를 받아 해당 객체에 해당 속성이
// 존재하는지 확인하고, 존재하면 해당 속성의 값을 출력하고, 존재하지 않으면 사용자가 지정한 메시지를 출력한다.
// 세터는 세 인수 (property, target, value)를 받는다. 여기에 특별한 부분은 없고 단순히 속성을 새 값으로 설정하고
// 출력했다. 프록시를 사용하면 더 짧고 간결한 코드, 사용할 수 없는 속성에 접근할 때 사용자 지정 메시지를 출력 할 수 있다.

// Quiz 
// 1 -2
// 2- 2
// 3 - 3