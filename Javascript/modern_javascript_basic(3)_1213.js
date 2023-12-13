// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 3. 함수 기본값 인수
// 함수 인수의 기본값(ES6 이전)
// ES6 이전에는 함수 인수의 기본값 default value을 설정하는 것이 쉽지 않았다.
function getLocation(city, country, continent) {
    if (typeof country === 'undefined') {
        country = 'Italy';
    }
    if (typeof continent === 'undefined') {
        continent = 'Europe';
    }
    console.log(continent, country, city);
}

getLocation('Milan'); //Europe Italy Milan

getLocation('Paris', 'France'); // Europe France Paris
// 예제의 함수는 city, country, continent 세 가지 인수를 취한다. 함수 본문에서 country 또는 continent가 정의되지
// 않았는지 확인하고, 정의되지 않은 경우에만 기본값을 제공하는 것이 이 코드의 내용이다.
// getLocation('Milan')이라고 호출하면 두 번째, 세 번째 매개변수(country와 continent)는 정의되지 않았으므로 함수의 기본값으로 대체된다.
// 그러나 기본값이 인수 목록의 끝이 아닌 시작부분에 있도록 하려면 어떻게 해야 할까?
function getLocation1(continent, country, city) {
    if(typeof country === 'undefined') {
        country = 'Italy';
    }
    if(typeof continent === 'undefined') {
        continent = 'Europe';
    }
    console.log(continent, country, city);
}

getLocation1(undefined, undefined, 'Milan'); // Europe Italy Milan

getLocation1(undefined, 'Paris', 'France'); // Europe Paris France
// 첫 번째 인수를 기본값으로 바꾸기 위한 깔끔하고 멋진 방법은 없고, 그저 인수로 undefined값을 전달해야 한다.
// 다행히 ES6는 우리를 구원하기 위한 함수 기본값 인수 default function agreement를 제공한다.

// 함수 기본값 인수
function calculatePrice(total, tax = 0.1, tip = 0.05) {
    // tax나 tip에 값을 할당하지 않으면 기본값으로 0.1과 0.05가 쓰인다.
    return total + ( total * tax ) + (total * tip);
}
// 다음과 같이 매개변수를 아예 전달하지 않으려면 어떻게 해야 할까?
// tip에 0.15를 할당하려 했지만, 아래처럼 쓰면 0.15는 두 번째 인수 tax에 할당된다.
calculatePrice(100, 0.15);
// 다음과 같이 코드를 바꾸면 해결 할 수 있다.
// 이렇게 쓰면 tip에 0.15를 할당하게 된다.
calculatePrice(100, undefined, 0.15);
// 원하는 대로 작동하기는 하지만 그리 깔끔한 방법은 아니다. 이를 개선하려면 디스트럭처링(destructuring)을 통해 코드를 다음과
// 같이 바꿔쓸 수 있다.
function calculatePrice1({total = 0, tax = 0.1, tip = 0.05,} = {}) {
    return total + (total * tax) + (total * tip);
}
const bill = calculatePrice1({tip: 0.15, total: 150});
console.log(bill); //187.5
// 함수의 인수를 객체로 만들었다. 함수를 호출하면 매개변수가 주어진 키에 맞춰서 입력되기 때문에 매개변수의
// 순서에 대해 걱정할 필요가 없다. 앞의 예에서는 tip의 기본값은 0.05이지만, 0.15로 덮어 썼고 tax는 값을 덮어 쓰지 않아
// 기본값인 0.1이 유지도었다.
// 특히 이 코드에서 이 부분에 주목하자
// {total = 0, tax = 0.1, tip = 0.05,} = {}
// 여기서 인수 객체를 빈 객체로 기본 설정하지 않고(즉 = {}를 빼고) 선언한 다음 아무 매개변수도 없이 calculatePrice()를 실행하면
// 다음과 같은 오류가 발생한다. 
// Cannot destructure property 'total' of 'undefined' or 'null'.
// = {}를 추가해야 인수를 기본적으로 객체로 설정한다. 함수에 매개변수를 어떻게 전달하든 상관없이 인수는 객체가 된다.
console.log(calculatePrice1({})); // 0
console.log(calculatePrice1()); // 0
console.log(calculatePrice1(undefined)); // 0
// 인수로 무엇을 전달했는지에 상관없이 total, tax, tip 세 가지 기본속성을 가진 객체로 기본 설정되었다.
// 디스트럭처링에 대한 자세한 설명은 6장에서...

// Quiz
// 1
function calculatePrice2(total, tax = 0.1, tip = 0.05) {
    return total + (total * tax) + (total * tip);
}
console.log(calculatePrice2(10)); //11.5
// 2 - 3