scss를 사용하는 이유

프로젝트가 크고 고도화될수록 css파일이 같은 내용이 많아지고 양이 방대해지게 되므로 불편함이 생겨 css전처리기가 등장했다. 

css전처리기(css preprocessor)는 이름 그대로 css가 동작하기 전 동작하는 예비 처리기이다. 이는 SASS자체로 브라우저에 적용하는 것이 아니라 CSS를 확장해서 쉽고 편리하게 쓰는 스크립팅언어이기 때문에 SASS로 작성한 코드는 컴파일을 해서 일반 CSS의 문법으로 바꾼 뒤 적용한다는 뜻이다.

SCSS와 SASS는 불필요한 선택자의 과용과 연산 기능의 한계, 구문(statement)의 부재 등 프로젝트가 커지면서 복잡해지는 css 작업을 쉽게 해주며 가독성과 재사용성을 높여주어 유지보수가 쉬워지게 도와줌

CSS 전처리기의 종류는 다양하게 있는데 SCSS(sass)가 가장 오래되었고 가장 큰 커뮤니티를 가지고 있다. Sass(Syntactically Awesome Style Sheet)는 css3의 확장으로서 Dart기반으로 작동하며, Sass와 Scss 두개의 문법을 제공한다. 

조건문과 반복문,
변수 정의 기능, 
mixins을 정의하는 기능, 
Import,
Nesting,
Extend/Inheritance 등의 특징을 지니며
css의 태생적 한계를 해결해준다.

CSS와 비교한 Sass의 장점

Css보다 심플한 표기법으로  CSS를 구조화하여 표현할 수 있다.
스킬레벨이 다른 팀원들과의 작업시 발생할 수 있는 구문의 수준 차이를 평준화 할 수 있다.
CSS에는 존재하지 않는 Mixin등의 강력한 기능을 활용하여 CSS 유지보수 편의성을 큰 폭으로 향상시킬 수 있다.

Sass와 SCSS의 차이

SCSS는 Sassy CSS(멋진 CSS)의 줄임말이고 SASS는 (Syntactically Awesome Style Sheet) 문법적으로 짱 멋진 스타일시트의 줄임말이다.

코드에 대한 대략적인 차이는
```javascript

```





설치방법 

터미널로 컴파일러 설치
npm일 경우 npm install node-sass
yarn일 경우 yarn add node-sass

package.json에서 node-sass가 있는지 확인

사용방법

CSS의 확장자를 scss(sass)로 변경
파일명.scss

적용할 컴포넌트의 Import를 scss(sass)로 변경
import "./App.scss"