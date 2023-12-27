// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 12. 클래스
// MDN에서는 클래스(class)를 다음과 같이 설명한다. 클래스는 일차적으로 자바스크립트의 기존 프로토타입(prototype) 기반
// 상속에 대한 문법적 설탕(syntax sugar)이다. 클래스 문법이 자바스크립트에 새로운 객체 지향 상속 모델을
// 도입하는 것이 아니다.
// 프로토타입 상속을 먼저 복습해보자
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log("Hello, my name is " + this.name);
// }

// const alberto = new Person("Alberto", 26);
// const caroline = new Person("Caroline", 26);

// alberto.greet(); //Hello, my name is Alberto
// caroline.greet(); //Hello, my name is Caroline

// Person의 프로토타입에 새 메서드를 추가해서 Person 객체의 인스턴스들이 접근할 수 있도록 만들었다.

// 클래스 생성
// 클래스를 만드는 방법에는 두 가지가 있다. 클래스 선언과 클래스 표현이다.
// 클래스 선언
// class Person {

// }
// // 클래스 표현식
// const person = class Person {

// };
// 클래스 선언 및 클래스 표현식은 호이스팅되지 않는다. 클래스에 접근하기 전에 클래스를 선언하지 않으면
// ReferenceError 가 발생한다.
// 생성자 메서드를 추가한 것을 제외하면 프로토타입 방식과 큰 차이가 없다.(생성자를 하나만 추가해야 함에 주의하자.
// 클래스에 생성자 메서드가 두 개 이상 포함된 경우 SyntaxError가 발생한다.)
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    } // 메서드와 메서드 사이에는 쉼표가 없음
    farewell() {
        console.log('goodbye friend');
    }
}
// const alberto1 = new Person("Alberto", 26);

// alberto1.greet();
// alberto1.farewell();

// 정적 메서드
// 앞의 예시부터 추가한 greet()와 farewell() 메서드는 Person 클래스의 모든 인스턴스에서 접근할 수 
// 있지만, Array.of()처럼 클래스의 인스턴스가 아닌 클래스 자체에서 접근할 수 있는 정적 메서드는 다음과
// 같이 정의할 수 있다.
// class Person2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static info() {
//         console.log("I am Person2 class, nice to meet you");
//     }
// }
// const alberto2 = new Person2("Alberto", 26);

// alberto2.info();

// Person2.info();
// set와 get
// 세터(setter)와 게터(getter) 메서드를 사용하여 클래스 내에 값을 설정하거나 가져올 수 있다.
class Person3 {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.nickname = "";
    }
    set nicknames(value) {
        this.nickname = value;
        console.log(this.nickname);
    }
    get nicknames() {
        console.log(`Your nickname is ${this.nickname}`);
    }
} 
const alberto3 = new Person3("Alberto", "Montalesi");
//세터를 호출 
alberto3.nicknames = "Albi"; //Albi
//게터를 호출
alberto3.nicknames //Your nickname is Albi

// 클래스 상속하기
// 기존 클래스로부터 상속된 새로운 클래스를 만드려면 extends 키워드를 사용한다.
// 기존 클래스
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}
// 상속을 통해 만든 새 클래스
// class Adult extends Person4 {
//     constructor(name, age, work) {
//         this.name = name;
//         this.age = age;
//         this.work = work;
//     }
// }
// const alberto4 = new Adult("Alberto", 26, "software developer");
// Person4를 상속하는 Adult 클래스를 만들었지만 이 코드를 실행하면 ReferenceError가 발생한다.
// 오류 메시지는 새로운 클래스에서 this를 사용하기 전에 super()를 호출하라는 내용이다.
// 즉 Adult를 만들기에 앞서 Person을 만들어야 한다는 것이다. 생성자 내부에서 super()를 호출하면
// Person4가 만들어진다.
class Adult1 extends Person4 {
    constructor(name, age, work) {
        super(name, age);
        this.work = work;
    }
}
// 여기서 왜 super(name, age) 형태로 호출했을까? Adult1 클래스는 Person4로부터 이름과 나이를 상속받기
// 때문에 Person4를 다시 선언하고 초기화할 필요가 없다. super()생성자가 하는 일이 바로 이것이다.
const alberto5 = new Adult1('hera', 26, "frontend developer");

console.log(alberto5.age); //26
console.log(alberto5.work); //frontend developer
alberto5.greet(); //Hi, my name is hera and I'm 26 years old
// Adult1은 Person4 클래스의 모든 속성과 메서드를 상속했음을 볼 수 있다.

// 배열 확장하기
// 배열과 같이 비슷하게 생겼지만 첫 번째 값은 교실 이름이고 나머지는 학생 이름과 학생 점수를 나타내는
// classroom이라는 새로운 클래스를 만들어보자, 
const myClass = new Classroom('1A',
  {name: "Tim", mark: 6},
  {name: "Tom", mark: 3},
  {name: "Jim", mark: 8},
  {name: "Jon", mark: 10},
);
// 이러한 요구 사항을 만족시키는 새로운 클래스는 다음과 같이 배열을 상속받아서 만들 수 있다.
class Classroom extends Array {
    // 레스트 연산자를 사용해 가변 인수로 입력받은 학생들의 정보를 배열 형태로 students에 할당
    constructor(name, ...students) {
        // 스프레드 연산자를 사용해 배열 원소들을 다시 풀어헤쳐 생성자를 호출한다.
        // 스프레드 연산자를 사용하지 않으면 '학생들의 정보가 들어 있는 배열'을 원소로 가진 Array가 생성될 것이다.
        super(...students);
        this.name = name;
    }
    // 학생을 추가하기 위한 새로운 메서드를 추가
    add(student) {
        this.push(student);
    }
}
const myClass1 = new Classroom('1A',
{name: "Tim", mark: 6},
{name: "Tom", mark: 3},
{name: "Jim", mark: 8},
{name: "Jon", mark: 10},
);

// 새로운 학생 추가
myClass1.add({name: "Timmy", mark: 7});
myClass1[4];

// for of 루프를 사용하여 반복 가능
for (const student of myClass1) {
    console.log(student);
}

// Quiz
// 1 - 2
// 2 - 1.3
// 3 -3
// 4 - 3
// 5 
class Adult2 extends Person1{
    constructor(name, age, work){
        super(name, age);
        this.work = work;
    }
}
