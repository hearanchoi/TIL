// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 22. ES2020의 새로운 기능
// 최신 버전의 크롬 또는 파이어폭스만 가능 할 수 있다. 혹은 바벨(babel)같은 컴팔일러가 필요하다. 바벨같은
// 컴파일러를 사용하면 버전 7,8부터 이미 기본적으로 ES2020을 지원하므로 그 밖의 플러그인을 사용할 필요는 없다.
// BigInt
// Bight에 대한 지원은 자바스크립트에서 매우 큰 정수를 저장할 수 있음을 의미한다. 현재 정수의 최댓값은 2의 53승 -1이며 
// Number.MAX_SAFE_INTEGER를 사용하여 얻을 수 있다. 그렇다고 더 큰 정수를 저장할 수 없다는 의미는 아니지만 자바스크립트는
// 이를 제대로 처리하지 못한다.
let num = Number.MAX_SAFE_INTEGER
console.log(num); //9007199254740991
console.log(num+1); //9007199254740992
console.log(num+2); //9007199254740992
console.log(num+3); //9007199254740994
console.log(num+4); //9007199254740996
// 보다시피 자바스크립트가 처리할 수 있는 최대값에 도달하면 제대로 된 결과가 나오지 않기 시작한다.
// BigInt를 사용하려면 BigInt생성자를 사용하거나 큰 정수뒤에 n을 붙이면 된다.
// let bight = BigInt(9999999999999999);
let bight = 9999999999999999n;
console.log(bight + 1n); //10000000000000000n
// BigInt에 1을 더하려면 먼저 parseInt(bigInt, 1)을 사용하여 BigInt를 Int로 변경해야 한다. 
// 이 예시에서는 번거로움을 피하기 위해 1을 더하는 대신 1n을 더했다.

// 동적으로 가져오기
// ES2020부터는 필요할 때 모둘을 동적으로 가져올 수 있다. 
// if (condition1 && condition2) {
//     const module = await import('./path/to/module.js');
//     module.doSomething();
// }
// 이 코드처럼 런타임에서 모듈이 필요한지 여부를 판단해서, 필요한 경우에만 async/await을 사용하여
// 해당 모듈을 가져오는게 가능해졌다.

// 옵셔널 체이닝
// 사용자를 나타내는 간단한 객체를 예로 살펴보자
const user1 = {
    name: 'Albert',
    age: 27,
    work: {
        title: 'software developer',
        location: 'Vietnam',
    },
};

const user2 = {
    name: 'Tom',
    age: 27,
};

// 이런 예에서 사용자의 직함(title)에 접근하고 싶다고 가정해보자. 예제에서 work는 user 객체의 선택적 속성이므로
// 예전에는 다음과 같이 작성해야 했다.
let jobTitle;
if (user1.work){
    jobTitle = user1.work.title;
}
// 혹은 다음과 같이 삼항 연산자를 사용하는 방법도 있다.
const jobTitle1 = user1.work ? user1.work.title : '';

// 즉 work의 title 속성에 접근하기 전에 user객체가 실제로 work 속성을 가지고 있는지 확인해야 했다는 뜻이다.
// 단순한 객체를 다룰 때는 그렇게 큰 문제가 아니지만, 접근하려는 속성이 깊게 중첩되어 있는 객체의 경우에는 코드가 많이
// 복잡해진다. 이때 옵셔널 체이닝 (optional chaining) 연산자인 ?.을 사용하면 간결하게 코드를 작성할 수 있다. 
// 옵셔널 체이닝을 이용하여 앞의 코드를 다시 작성해 보자.
const jobTitle2 = user1.work?.title
// 훨씬 간결하고 읽기 좋아졌다. 코드를 보면 user객체가 work 속성의 존재 여부를 묻는 것처럼 읽히고, 존재한다면
// title속성에 자연스럽게 접근할 수 있다.
const user1JobTitle = user1.work?.title; //  software developer
const user2JobTitle = user2.work?.title; // undefined
// 객체에서 사용할 수 없는 속성에 도달하면 연산자는 undefined를 반환한다.
// 다음과 같이 두 사용자의 학교 기록 등 선택적 속성이 깊게 중첩되어 있는 객체를 다룬다고 가정해보자.
const elon = {
    name: "Elon Musk",
    education: {
        primary_school: { /*초등학교 관련 데이터 */ },
        middle_school: { /*중학교 관련 데이터 */ },
        high_school: { /*고등학교 관련 데이터 */ },
        university: {
            name: 'University of Pennsylvania',
            graduation: {
                year: 1995,
            },
        },
    },
};

const mark = {
    name: "Mark Zuckerberg",
    education: {
        primary_school: { /*초등학교 관련 데이터 */ },
        middle_school: { /*중학교 관련 데이터 */ },
        high_school: { /*고등학교 관련 데이터 */ },
        university: {
            name: 'Harvard University',
        },
    },
};
// 모든 사용자가 대학에서 공부한 것은 아니기 때문에 university 속성은 선택 사항이 될 것이며, 일부는 학업을
// 중간에 중단할 수도 있기 때문에 graduation 속성도 마찬가지로 선택 사항이다.
// 두 사용자의 졸업 연도에 접근하고 싶다면 어떻게 코드를 작성해야 할까? 옵셔널 체이닝 연산자가 없다면 다음과 같이
// 작성해야 한다.
let graduationYear;
// if(
//     user1.education.university &&
//     user1.education.university.graduation &&
//     user1.education.university.graduation.year) {
//         graduationYear =  user1.education.university.graduation.year;
//     }
// 옵셔널 체이닝 연산자를 사용하면 다음과 같이 간단하게 표현이 가능하다.
const elonGraduationYear = elon.education.university?.graduation?.year; // 1995
const markGraduationYear = mark.education.university?.graduation?.year; // undefined

// Promise.allSettled()
// ES6에서는 주어진 모든 프로미스가 성공할 때까지 기다릴 수 있는 Promise.all()이 추가되었다.
// ES2020에 도입된 Promise.allSettled()는 한 단계 더 나아가 성공/실패 여부와 무관하게 모든 프로미스들이
// 완료될 때까지 기다렸다가 각각의 결과를 설명하는 객체 배열을 반환한다. 이를 통해서 어떤 프로미스가 실패했는지 쉽게
// 알 수 있다.
const arrayOfPromises = [
    new Promise((res, rej) => setTimeout(res, 1000)),
    new Promise((res, rej) => setTimeout(rej, 1000)),
    new Promise((res, rej) => setTimeout(res, 1000)),
];

Promise.allSettled(arrayOfPromises).then(data => console.log(data));
// [
//     { status: 'fulfilled', value: undefined },
//     { status: 'rejected', reason: undefined },
//     { status: 'fulfilled', value: undefined }
//   ]
// Promise.allSetteld()는 각각의 상태를 반환하는 것을 알 수 있으며, 이 중 두번째 프로미스는
// 실패한 것을 알 수 있다.

// null 계열의 값을 병합하기
// 거짓 값과 null계열의 (nullish)값(null 또는 undefined)은 때때로 비슷할 수 있지만 엄연히 서로 다른
// 값이다. 새로 도입된 연산자를 사용하면 null 계열의 값과 거짓 값을 서로 구분할 수 있다.
// 먼저 거짓 값에 대한 복습으로 다음 예제를 살펴보자
// !! 연산자를 사용해 다양한 자료형의 값을 Boolean으로 변환
const str = "";
console.log(!!str); //false
const num1 = 0;
console.log(!!num1); //false
const n = null;
console.log(!!n); //false
const u = undefined;
console.log(!!u); //false
// 모든 출력 값이 거짓으로 나왔다. 이런 경우 빈 문자열과 undefind를 구별 하고 싶다면 null 병합 연산자(nullish coalescing operator)(??)가
// 유용하다. null 병합 연산자는 왼쪽 피연산자가 null 계열의 값인 경우 오른족 피연산자를 반환한다.
const x = '' ?? 'empty string';
console.log(x); // ''
const num2 = 0 ?? 'zero';
console.log(num2); //0
const n1 = null ?? "it's null";
console.log(n1); //it's null
const u1 = undefined ?? "it's undefined ";
console.log(u1); // it's undefined 
// 이 예제를 보면 처음 두 예시의 값은 null이 아니라 거짓이므로 연산자가 오른쪽 값을 반환하지 않았다.

// String.prototype.matchAll()
// matchAll() 메서드는 지정된 정규식에 대해 문자열과 일치하는 모든 결과의 반복자를 반환하는 새로운 메서드이다.
// 'a' 에서 'd' 사이에 있는 문자를 매칭하기 위한 정규식
const regEx = /[a-d]/g;
const str1 = "Lorem ipsum dolor sit amet";
const regExIterator = str1.matchAll(regEx);

console.log(Array.from(regExIterator));
// [
//     [
//       'd',
//       index: 12,
//       input: 'Lorem ipsum dolor sit amet',
//       groups: undefined
//     ],
//     [
//       'a',
//       index: 22,
//       input: 'Lorem ipsum dolor sit amet',
//       groups: undefined
//     ]
//   ]
// 위 예제에서는 주어진 문자열에 대해 matchAll() 메서드를 이용하여 a에서 d범위의 문자에 대해 매칭을
// 진해했고 두 개의 결과를 얻었다.

// 모듈 네임스페이스 export 문법
// ES2020이전에도 다음과 같이 import를 할 수는 있었다.
// import * as stuff from './tst.mjs';
// ES2020부터는 export 시에도 동힐하게 사용 할 수 있다.
// export * as stuff from './tst.mjs';
// 이 코드는 다음 코드와 동일한 역할을 수행한다.
// export { stuff };

// import.meta
// import.meta 객체는 URL 등 모듈에 대한 정보를 노출한다.
<script type ="module" src="test.js"></script>
console.log(import.meta); // {url: "file:///home/user/test.js"}
// 객체에 포함된 URL은 인라인(Inline) 스크립트의 문서 주소일 수도 있고 외부 스크립트를 가져온 URL일 수도 있다.

// globalThis
// 자바스크립트에서 ES2020 이전에는 전역 객체(this)에 접근하는 표준화된 방식이 없었다. 즉, 브라우저에서는 window,
// Node 환경에서는 global, 웹 워커의 경우 self를 사용해서 전역 객체를 참조했다.
// 이 때문에 런타임에서 현재 환경을 수동으로 감지하여 전역 객체에 접근하는 적절한 방법을 사용해야 했다.
// ES2020 부터는 어떤 환경에서든 항상 전역 객체를 참조하는 globalThis를 사용할 수 있다. 브라우저에서는 전역
// 객체에 직접 접근할 수 없기 때문에 globalThis가 전역 객체의 프록시를 참조하게 된다.
// 새로운 globalThis를 사용하면 애플리케이션이 실행되는 환경에 따라 전역 객체에 접근하는 방식이 다른 것에 대해
// 더 이상 걱정할 필요가 없다.

// Quiz
// 1 - 3
// 2 - 3
// 3 - 1
// 4 - 1
// 5 - 3 