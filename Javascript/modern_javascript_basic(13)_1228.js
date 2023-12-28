// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 13. 프로미스
// 자바스크립트는 동기적(synchronous)으로 작동한다. 즉, 각 코드 블록이 이전 블록 이후에 실행된다.
// const data = fetch('your-api-url-goes-here');
console.log('Finished');
console.log('data');
// 이 예에서는 fetch를 사용하여 어떤 URL에서 데이터를 가져온다. 동기 코드의 경우, 우리는 fetch작업이 실제로 완료된
// 후에 다음 행이 호출되리라고 예상한다. 하지만 실제로는 fetch가 호출된 직후 바로 다음 행에 있는 두 console.log()도
// 실행되므로, 마지막 console.log(data)는 undefined를 출력한다. 이러한 현상이 발생하는 이유는 fetch가
// 비동기적(asynchrounus)으로 수행되기 때문이다. 즉, 해당 행에서 fetch가 완료될 때까지 코드 실행을 중지하는게
// 아니라 계속해서 다음 행을 실행한다. 이 문제를 해결하기 위해서 콜백 또는 프로미스를 사용하면 fetch가 무언가를 반환하는 
// 시점까지 기다리게 할 수 있다.

// 콜백 지옥
// 비동기 코드를 동기식으로 작동하는 것처럼 하기 위해 콜백(callback)으로 여러 코드 블록을 차례로
// 연결해 작성할 때 발생하는 상황을 콜백 지옥(callback hell)이라고 부르기도 한다. 예를 들어, A를 하고, A가 
// 완료될 때까지 기다렸다가 B를 수행하고, B가 완료될 때까지 기다렸다가 C를 수행하고, 이런식이다.
// 이런 코드에서는 기다리는 시점마다 콜백을 사용해야 하기 때문에 코드가 복잡해진다.
// 다음은 콜백 지옥의 예제이다. 피자를 준비하는 단계마다 서버에 요청을 보내야 하고 서버가 응답할 때까지 기다렸다가
// 다음 단계를 수행해야 하는 비동기적인 상황이다.
// const makePizza = (ingredients, callback) => {
//     mixIngredients(ingredients, function(mixedIngredients)) {
//         bakePizza(mixIngredients, function(bakedPizza)){
//             console.log('finished!');
//         }
//     }
// };
// 이렇게 하면 시각적으로 위에서 아래로 코드가 실행되는 것처럼 보이게 작성할 수는 있지만, 그것 때문에 과도한 함수 중첩을 
// 유발한다. 프로미스를 사용하면 이 '지옥'에서 벗어날 수 있다.

// 프로미스
// 프로미스는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체이다.
// 이런 방식으로 프로미스를 만든 후, 프로미스의 성공을 알리기 위해서는 resolve를 , 실패를 알리기 위해서는 reject를 호출하면 된다.
// 프로미스 안에서 즉시 resolve를 호출하면 어떤 값이 반환되는지 확인해 보자.
const myPromise = new Promise((resolve, reject) => {
    resolve("The value we get from the promise");
});
myPromise.then(
    data => {
        console.log(data);
    }
);//The value we get from the promise
// resolve 함수의 첫 번째 매개변수로 전달된 값이 콘솔에 출력되는 것을 확인할 수 있다.
// setTimeout()을 사용하면 resolve가 호출되기 전까지 일정 시간을 기다릴 수 있다.
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The value we get from the promise");
    }, 2000);
});

myPromise1.then(
    data => {
        console.log(data);
    }
);// 2초가 지난후, The value we get from the promise
// 이 두가지 예는 매우 간단한 예에 불과하지만, 프로미스는 많은 비동기 코드를 수행할 때 매우 유용하다.
// 이 예에는 간ㄴ단하게 resolve를 호출하여 프로미스가 성공하는 경우만 살펴봤지만 실제로는 오류도 
// 발생하므로, reject를 이용한 오류 처리 방법도 살펴보자.
// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("this is our error"));
        
//     }, 2000);
// });
// myPromise2
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// }); //Error: this is our error Stack trace : myPromise</@debugger
// 프로미스가 성공할 때의 값을 얻는 데에 .then()을 사용하고, 프로미스가 실패할 때의 오류를 처리하는 데에는 .catch()를 사용한다.
// 출력된 오류 로그를 보면 오류가 발생한 위치를 알 수 있다. 단순히 reject("this is our error");라고 작성하지 않고
// reject(new Error("this is our error")); 라고 작성했기 때문이다.

// 프로미스 체이닝
// 프로미스 성공 또는 실패 여부와 무관하게 이전 프로미스에서 반환된 것을 후속 프로미스의 기반으로 사용하여
// 프로미스를 계속 체이닝(연결)chaining할 수 있다. 원하는 만큼 많은 프로미스를 연결할 수 있으며, 그 코드는 위에서
// 봤던 콜백 지옥의 코드보다 더 읽기 쉽고 간편하다.
const myPromise3 = new Promise((resolve, reject) => {
    resolve();
});
myPromise3
.then(data => {
    //새로운 값을 반환
    return'working...';
})
.then(data => {
    // 이전 프로미스에서 받은 값을 출력
    console.log(data);
    throw 'failed!';
})
.catch(err => {
    // 프로미스 수행 중 발생한 오류를 받아서 출력
    console.log(err);
    //failed!
})
// 예제를 보면 첫 번째 .then()이 두 번째 then()으로 값을 전달하여 해당 값이 로그로 출력되었고, 두 번째
// .then()에서 발생시킨 오류는 .catch()절로 전달되어서 오류 로그가 출력되었다.
// 프로미스가 성공한 경우뿐만 아니라 실패한 경우에도 연쇄적으로 연결하여 사용하는 것이 가능하다.
const myPromise4 = new Promise((resolve, reject) => {
    resolve();
});
myPromise4
.then(data => {
    throw new Error('oops');
    console.log("first value");
})
.catch(() => {
    console.log("catched an error");
})
.then(data => {
    console.log("second value");
});
//catched an error
// second value
// 이 코드의 경우 첫 번째 .then()에서 오류가 발생했기 때문에 "first value"는 출력되지 않고,
// 첫 번째 .catch()와 마지막 .then()을 수행하면서 로그가 출력 된다.

// Promise.resolve()와 Promise.reject()
// 자동으로 (즉시) 성공하거나 실패하는 프로미스를 생성한다.
// Promise.resolve()
Promise.resolve('Success').then(function(value){
    console.log('Success');
    //Success
}, function(value) {
    console.log('fail');

});

// Promise.reject()
// Promise.reject(new Error('fail')).then(function(){
//     // not called
// }, function(error) {
//     console.log(error);
//     //Error: fail
// });

// 첫 번째 예제에서 볼 수 있듯이 .then() 절에서 생성된 프로미스에는 두 개의 인수가 있다. 하나는
// 프로미스가 성공할 때 호출되는 함수이고, 다른 하나는 프로미스가 실패할 때 호출되는 함수이다. Promise.resolve()는
// 즉시 프로미스를 성공 처리하므로 첫 번재 함수가 호출된다. 한편, 두 번째 예제에서는 Promise.reject()를 사용하여
// 프로미스를 즉시 실패처리하므로 .then()절의 두 번째 인수가 호출된다.

// Promise.all()과 Promise.race()
// Promise.all()은 모든 프로미스가 성공할 경우에만 성공하는 하나의 프로미스를 반환한다. 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second value');
});
promise1.then(data => {
    console.log(data);
});
// 500ms 후 first value
promise2.then(data => {
    console.log(data);
});
// 1000ms 후 second value
// 여기서 각 프로미스는 서로 독립적으로 성공 처리된다. Promise.all()을 사용한다면 
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second value');
});
Promise
.all([promise3, promise4])
.then(data => {
    const [promise3data, promise4data] = data;
    console.log(promise3data, promise4data);
});
// 1000ms후 first value second value
// 1000ms(두 번째 프로미스의 타임아웃) 후에 첫 번째, 두 번째 프로미스의 결과가 함께 반환되었다.
// 즉 첫 번째 프로미스가 성공 후에도 두 번째 프로미스가 성공할 때까지 기다렸음을 알 수 있다.
// 비어 있는 이터러블을 전달하면 이미 성공 처리된 프로미스를 반환한다.
// 프로미스 중 하나가 실패하면 다른 모든 프로미스가 성공하더라도 해당 실패에서 발생한 오류가 반환된다.
// const promise5 = new Promise((resolve, reject) => {
//     resolve("my first value");
// });
// const promise6 = new Promise((resolve, reject) => {
//     reject(Error("oooops error"));
// });

// all()은 두 프로미스 중 하나라도 실패하면 전체를 실패로 처리
// Promise
// .all([promise5, promise6])
// .then(data => {
//     const [promise5data, promise6data] = data;
//     console.log(promise5data, promise6data);
// })
// .catch(err => {
//     console.log(err);
// });
//oooops error
// 이와 대조적으로, Promise.race()는 이터러블에 포함된 프로미스들 중 가장 먼저 성공 또는 실패한 결과를 
// 반환한다.
const promise7 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise8 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second value');
});
Promise.race([promise7, promise8]).then(function(value){
    console.log(value);
    // 둘 다 성공하지만 promise8이 더 빨리 성공 
}) // second value
// 비어 있는 이터러블을 전달하면 .race()는 영원히 보류된 상태로 남아 있음에 주의하자

// Quiz 
// 1 - 2
// 2
const promise9 = new Promise((resolve, reject) => {
    resolve();
    console.log("good");
});
// 3 - 2
// 4 - 3
