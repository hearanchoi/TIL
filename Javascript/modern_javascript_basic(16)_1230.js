// 모던 자바스크립트 핵심 가이드 - 알베르토 몬탈레시
// Chapter 16. 세트, 워크셋, 맵, 워크맵
// 일단 오늘 시간을 나누어야 함 9시반에 나갈거니까 7시에는 씻고 집청소 + 깔끔하게 마무리! 꾸미기? 6시반부터 오늘 피드백!  
// 세트
// 세트(집합)set란 어떠한 자료형의 값이든 각 원소를 고유하게 저장하는 객체이다.
// 세트 생성
const family = new Set();

// 세트에 값 추가
family.add("Dad");
console.log(family);
// Set(1) { 'Dad' }

family.add("Mom");
console.log(family);
// Set(2) { 'Dad', 'Mom' }

family.add("Son");
console.log(family);
// Set(3) { 'Dad', 'Mom', 'Son' }

family.add("Dad");
console.log(family);
// Set(3) { 'Dad', 'Mom', 'Son' }
// 마지막 부분에서 "Dad"를 다시 추가하려고 했지만, Set는 고유한 값만 가질 수 있기 때문에 동일하게 유지됨을 볼 수 있다.
// Set를 계속 사용해보면서 어떤 메서드들이 있는지 살펴보겠다.
console.log(family.size); //3
console.log(family.keys()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
console.log(family.entries()); //[Set Entries] { [ 'Dad', 'Dad' ], [ 'Mom', 'Mom' ], [ 'Son', 'Son' ] }
console.log(family.values()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
family.delete("Dad")
console.log(family);//Set(2) { 'Mom', 'Son' }
family.clear();
console.log(family); //Set(0) {}
// 코드를 보면 알 수 있듯이, Set에는 size 속성이 있으며, delete를 사용해서 하나의 원소를 삭제하거나 clear를 사용하여 모든 원소를 삭제할 수 있다.
// 또한 Set에는 키가 없기 때문에 .key()를 호출하면 .values()또는 .entries()를 호출하는 것과 동일한 결과를 얻는다.