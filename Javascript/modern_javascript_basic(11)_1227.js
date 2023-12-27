// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 11. 심벌
// 심벌은 ES6에서 추가된 새로운 원시 자료형이다.
// 심벌의 고유성
// 심벌은 항상 고유(unique)하며 객체 속성의 식별자로 사용할 수 있다.
const me = Symbol("Alberto");
console.log(me); // Symbol(Alberto)
// 심벌은 항상 고유하다고 했는데 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까?
const clone = Symbol("Alberto");
console.log(clone); //Symbol(Alberto)

console.log(me == clone); // false
console.log(me === clone); //false
// 두 심벌의 값은 동일하지만, 각 심벌은 항상 고유하므로 다른 심벌과 겹치지 않는다.

// 객체 속성에 대한 식별자
// 심벌을 사용하여 객체 속성에 대한 식별자를 만들 수 있다. 
const office ={
    "Tom": "CEO",
    "Mark": "CTO",
    "Mark": "CIO",
};

for (person in office) {
    console.log(person);
}
// Tom
// Mark
// 사무실 객체가 있고, 그 사무실에는 3명의 사람이 있다. 그 중 2명은 이름이 같다. 이럴 때 속성 이름이 겹치는 것을
// 피하기 위해 심벌을 사용할 수 있다.
const office1 = {
    [Symbol("Tom")] :  "CEO",
    [Symbol("Mark")] :  "CTO",
    [Symbol("Mark")] :  "CIO",
};
for (person1 in office1) {
    console.log(person1);
} // undefined
// 심벌은 열거 가능하지 않기 때문에 심벌에 대해 반복하려고 하면 undefined를 얻게 된다.
// 즉 for in으로 심벌에 대해 반복할 수는 없다.
// 여기서 객체 속성의 배열을 얻기 위해서는 Object.getOwnPropertySymbols()를 사용한다.
const symbols = Object.getOwnPropertySymbols(office1);
console.log(symbols);
// [ Symbol(Tom), Symbol(Mark), Symbol(Mark) ]
// 배열을 얻은 후 속성에 접근하려면 map을 사용하면 된다.
const value = symbols.map(symbol => office1[symbol]);
console.log(value);
// [ 'CEO', 'CTO', 'CIO' ]

// Quiz
// 1 - 3
// 2 - 3
// 3 - 4
// 4 - 1