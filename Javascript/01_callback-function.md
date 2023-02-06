# callback-function (콜백 함수)

_함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 한다._

```javascript
// 전달 받은 값을 증가 시켜주는 함수

function increase(value) {
return value + 1;
}

// 전달 받은 값을 감소 시켜주는 함수
function decrease(value) {
return value - 1;
}

/_
매개변수를 통해 함수의 외부에서 콜백 함수를 전달 받은 함수를 고차함수
콜백함수는 고차함수에 전달 되어 헬퍼 함수의 역할을 한다.
_/
function apply(func, value) {
// 고차함수는 매개변수를 통해 전달 받은 콜백함수의 호출 시점을 결정해서 호출한다.
// 콜백함수는 고차함수에 의해 호출되며 이때 고차함수는 필요에 따라 콜백함수에 인자를 전달할 수 있다.
return func(value);
}

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

// 콜백함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서
// 곧바로 고차함수에 전달하는 것이 일반적이다.
console.log(
apply(function (value) {
return value \*\* 2;
}, 5)
);

console.log([3, 2, 1, 5, 4].sort());

/_ 함수의 변하지 않는 공통 로직은 미리 정의해 두고 경우에 따라 변경되는 로직은
추상화해서 함수 외부에서 내부로 전달하는 방식
_/
console.log(
[3, 2, 1, 5, 4].sort(function (left, right) {
return right - left;
})
);
```
