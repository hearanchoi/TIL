// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 19. ES2017: async와 await
// ES2017에서는 async/await 키워드를 이용한 새로운 프로미스 작업 방식이 도입되었다.
// 프로미스 다시보기
// 프로미스를 사용하는 일반적인 방식을 간단히 리뷰해보자
// 깃 허브에서 사용자 정보 조회
fetch('https://api.github.com/users/AlbertoMontalesi').then(res => {
    // 응답을 json형식으로 반환
    return res.json();
}).then(res => {
    // 성공 시 데이터를 출력
    console.log(res);
}).catch(err => {
    // 실패시 오류 출력
    console.log(err);
});
// 이것은 깃허브 API로 특정 깃허브 사용자에 대한 정보를 가져와서 콘솔에 출력하는 매우 간단한 
// 프로미스 코드이다. 또 다른 예를 살펴보자.
function walk(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject ("the value is too small");
        }
        setTimeout(() => resolve(`you walked for ${amount}ms`, amount));
    });
}

walk(1000).then(res => {
    console.log(res);
    return walk(500);
}).then(res => {
    console.log(res);
    return walk(700);
}).then(res => {
    console.log(res);
    return walk(800);
}).then(res => {
    console.log(res);
    return walk(100);
}).then(res => {
    console.log(res);
    return walk(400);
// }).then(res => {
//     console.log(res);
//     return walk(600);
});
// you walked for 1000ms
// you walked for 500ms
// you walked for 700ms
// you walked for 800ms
// "the value is too small"

// async/await
function walk1(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 500) {
            reject ("the value is too small");
        }
        setTimeout(() => resolve(`you walked for ${amount}ms`, amount));
    });
}
// 비동기 함수 선언
async function go() {
    // 프로미스가 완료될 때 까지 기다리기 위해 await 키워드를 사용
    const res = await walk1(500);
    console.log(res);
    const res2 = await walk1(900);
    console.log(res2);
    const res3 = await walk1(600);
    console.log(res3);
    const res4 = await walk1(700);
    // console.log(res4);
    // const res5 = await walk1(400);
    console.log(res5);
    console.log("finished");
}

go();
// you walked for 500ms
// you walked for 900ms
// you walked for 600ms
// you walked for 700ms
// "the value is too small"

// 이 예제 코드를 하나씩 분석해보자
// 비동기 함수를 만들려면 함수 앞에 async 키워드를 넣어야 한다.
// 해당 키워드는 자바스크립트에게 항상 프로미스를 반환하도록 지시한다.
// 비동기 함수 내에서 프로미스가 아닌 값을 반환하게 작성하면 자바스크립트가 해당 값을 
// 자동으로 프로미스로 감싼 후에 반환 한다.
// await 키워드는 비동기 함수 내에서만 작동한다.
// 이름에서 알 수 있듯이 await 키워드는 프로미스가 결과를 반환할 때까지 기다리도록 자바스크립트에 지시한다.
// 비동기 함수가 아닌 곳에서 await를 사용하려고 하면 어떤 일이 발생하는지 살펴보자.

// 일반 함수에서 awit 키워드를 사용한 경우
function func() {
    let promise = Promise.resolve(1);
    // let result = await promise;
}
// func();
//SyntaxError: await is only valid in async functions and the top level bodies of modules

// 코드의 최상위 레벨에서 awiat를 사용한 경우
let response = Promise.resolve('hi');
// let result = await response;
//SyntaxError: await is only valid in async functions and the top level bodies of modules

// 명심하자. await는 비동기 함수 내에서만 사용 할 수 있다.

// 오류 처리
//  .catch()를 사용하여 프로미스가 반환하는 오류들을 처리한다.
async function asyncFunc() {
    try{
        let response = await fetch('your-url');
    }catch(err){
        console.log(err);
    }
}
asyncFunc();
// TypeError : Failed to fetch

// 보통은 try ... catch 구문을 사용하여 오류를 처리하지만, 해당 구문 없이도 다음과 같이
// 오류를 처리할 수 있다.
async function asyncFunc1() {
    let response = await fetch('your-url');
}
asyncFunc1();
// Uncaught (in promise) TypeError : failed to fetch

asyncFunc1().catch(console.log);
// TypeError : Failed to fetch

// Quiz
// 1 - 4
// 2 - 3