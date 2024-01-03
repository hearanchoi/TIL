// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 20. ES2018의 새로운 기능
// 객체에 레스트/스프레드 연산자 사용하기
// ES6에서는 다음과 같이 배열에 스프레드 연산자를 적용하는 것이 가능하다.
const veggie = ["tomato", "cucumber", "beans"];
const meat = ["pork", "beef", "chicken"];

const menu = [...veggie, "pasta", ...meat];
console.log(menu);
// [
//     'tomato',  'cucumber',
//     'beans',   'pasta',
//     'pork',    'beef',
//     'chicken'
//   ]

// ES2018 부터는 객체에도 레스트 / 스프레드 구문을 사용할 수 있다.
let myObj = {
    a: 1,
    b: 3,
    c: 5,
    d: 8,
};

// 레스트 연산자를 사용하여 a, b를 제외한 나머지 속성을 변수 z에 할당
let {a, b, ...z} = myObj;
console.log(a); //  1
console.log(b); // 3
console.log(z); // { c: 5, d: 8 }

// 스프레드 연산자를 사용하여 myObj의 복사본을 생성
let clone = {...myObj};
console.log(clone); //{ a: 1, b: 3, c: 5, d: 8 }
myObj.e = 15;
console.log(clone); //{ a: 1, b: 3, c: 5, d: 8 }
console.log(myObj); //{ a: 1, b: 3, c: 5, d: 8, e: 15 }
// 스프레드 연산자를 사용하면 객체의 복사본을 쉽게 만들 수 있고, 원래 객체를 수정하더라도 당연히
// 이 복사본에는 영향이 없다.

// 비동기 반복
// 비동기 반복을 사용하면 데이터를 비동기적으로 반복할 수 있다. 자바스크립트 명세서에는 비동기 반복자(asynchronus Iterator)에
// 대해 다음과 같이 설명한다 . 비동기 반복자는 next()메서드가 {value, done}쌍에 대한 프로미스를 반환한다는 점을 제외하면
// 동기반복자와 매우 유사하다. 비동기 반복을 위해, 각각의 이터러블을 프로미스로 변환해서 작동하는 for-await-of루프를
// 사용할 수 있다.
const iterables = [1, 2, 3];

async function test(){
    for await (const value of iterables){
        console.log(value);
    }
}
test();
// 1
// 2
// 3
// 실행중에 이터러블이 가진 [Symbol.asyncIterator]() 메서드를 통해 비동기 반복자가 생성된다.
// 루프 속에서 이터러블의 다음 값에 접근할 때마다 반복자 메서드에서 반환된 프로미스를 await한다.

// Promise.prototype.finally()
// .finally()로 프로미스가 완료될 때 호출할 콜백을 등록할 수 있다.
const myPromise = new Promise((resolve, reject) => {
    resolve();
});
myPromise
    .then(() => {
        console.log('still working');
    })
    .catch(() => {
        console.log('there was an error');
    })
    .finally(() => {
        console.log('Done!');
    });
// .finally() 또한 프로미스를 반환하므로 .then()과 .catch()를 계속 연결할수는 있지만,
// 연결된 프로미스는 .finally()가 반환한 값이 아니라 그 전의 프로미스가 반환된 값을 전달받게 된다.
const myPromise1 = new Promise((resolve, reject) => {
    resolve();
});

myPromise1
    .then(() => {
        console.log('still working');
        return 'still working';
    })
    .finally(() => {
        console.log('Done');
        return 'Done!';
    })
    .then(res => {
        console.log(res);
    });

// still working
// Done!
// still working
// 이 코드를 보면 .finally() 뒤에 연결된  .then()으로 들어오는 값은 .finally()가 반환한 값이
// 아니라 첫 번째 .then()에서 반환한 값이다.

// 정규식 기능 추가
// ECMA Script의 새 버전에는 네 가지 새로운 정규식(RegExp) 관련 기능이 추가되었다.
// s(dotAll) 플래그
// 명명된 캡처 그룹
// 룩비하인드 어시선
// 유니코드 속성 이스케이프

// 정규식에 대한 s(dotAll) 플래그
// ECMAScript 정규식에 새로 도입된 s 플래그는 . 표현식이 개행 문자를 포함한 모든 문자를 포함하도록 한다.
/foo.bar/s.test('foo`n\bar');

// 명명된 캡처 그룹 (named capture group)
// 번호가 매겨진 캡처 그룹으로 정규식이 일치하는 문자열의 특정 부분을 참조할 수 있다. 각 캡처 그룹에는
// 순서대로 고유 번호가 할당되고 해당 번호를 사용하여 참조할 수 있다. 하지만 자동으로 할당되는 번호만으로는 정규식을 파악하고
// 리팩터링 하기가 어렵다. 예를 들어 정규식 /(\d{4})-(\d{2})-(\d{2})/를 날짜와 매칭한다고 하면 주변 코드를 검사하지 않고서는 어떤
// 그룹이 월에 해당하고 어떤 그룹이 일에 해당하는지 확신하기가 어렵다. 또한 월과 일의 순서를 바꾸고 싶다면 그룹 참조 번호도 그 순서에 맞춰 변경해야 한다.
// (?<name>...)구문을 사용하면 캡처 그룹에 원하는 이름을 지정할 수 있다. 이를 이용하면 앞의 예에서 날짜에 대한 정규식을 /(?<year>\d{4})
// -(?<month>\d{2})-(?<day>\d{2})/u 형태로 작성할 수 있다. 각 이름은 고유해야 하며 ECMAScript IdentifierName의 문법을 따라야 한다.
// 명명된 그룹은 매칭 결과를 담은 객체의 groups속성을 통해서 접근할 수 있다. 기존의 명명되지 않은 그룹과 마찬가지로, 그룹에 대한
// 번호 참조도 함께 생성된다. 다음 예시를 보자. 
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2015-01-02');
console.log(result.groups.year); //2015
console.log(result.groups.month); //01
console.log(result.groups.day); //01
console.log(result[0]); // 2015-01-02
console.log(result[1]); // 2015
console.log(result[2]); // 01
console.log(result[3]); // 02

let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
console.log(`one: ${one}, two: ${two}`); // one: foo, two: bar

// 룩비하인드 어서션
// 자바스크립트 명세서의 룩비하인드 어서션(lookbehind assertion)문서 내용을 바탕으로 설명한다.
// 룩비하인드 어서션을 사용하면 패턴 앞에 다른 패턴이 있는지 여부를 확인할 수 있다. 예를 들어 달러를 포함한
// 문자열에서 달러 기호를 캡처하지 않고 달러 금액 부분만 매칭할 수 있다.
// 긍정(positive) 룩비하인드 어서션은 (?<=...)으로 표시하며 그 안에 포함된 패턴이 어서션 다음에 오는 패턴보다
// 먼저 나오는지를 확인한다. 예를 들어 달러 기호를 캡처하지 않고 달러 금액을 매칭하려면 /(?<=\$)\d+(\.\d*)?/를 사용하여
// '$10.53' 과 매칭하고 '10.53'만 매칭 결과로 얻을 수 있다. 반대로 부정(negative)룩비하인드 어서션은 (?<!...)으로
// 표시하며, 그 안에 포함된 패턴이 어서션 다음의 패턴보다 앞에 있지 않은지를 검사한다. 예를 들어 /(?<!\$)\d+(?:\.\d*)/는 '$10.53'에 매칭되지는 않는다.

// 유니코드 속성 이스케이프
// 자바스크립트 명세서의 유니코드 속성 이스케이프(Uinicode property escapes) 문서 내용을 바탕으로 설명하겠다.
// \p{...}및 \P{...} 형식으로 유니코드 속성 이스케이프를 사용할 수 있다. 유니코드 속성 이스케이프는 u 플래그가 설정된 정규식에서 사용할 수 있는
// 새로운 유형의 이스케이프 시퀀스이다. 이 기능을 이용하면 다음과 같이 작성할 수 있다.
const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π'); // true

// 템플릿 리터럴 제한 해제
// 태그가 지정된 템플릿 리터럴을 사용할 때 이스케이프 시퀀스에 대한 제한이 제거된다.

// Quiz
// 1 - 3
// 2 - 2
// 3 - 1