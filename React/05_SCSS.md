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


SASS vs SCSS
// SASS
.wrapper
  width: 100px
  height: 200px
  .content
    color: white
    float: left
    
    
// SCSS
.wrapper{
    width: 100px;
    height: 200px;
    .content{
        color: white;
        float: left;
    }
}
이 둘은 중괄호, 세미콜론 등과 같은 차이가 있는데 사용하기 익숙한 SCSS로 리액트를 작성해보록 한다.

Nestig
부모요소를 반복적으로 기술하지 않고 부모 {}안에 자식요소를 위치시켜 사용한다.

& 부모선택자
&는 부모선택자라는 뜻이다. &>div 처럼 부모선택자 안의 요소를 쉽게 선택할 수 있게 해준다.

&:hover
부모(&)에 :속성을 부여해줄 때 사용한다.

li{
	float:left;
	display:inline-block;
	text-align:center;
	color:white;
	width:50%;
	line-height:50px;
	&:hover{
		font-weight:bold;
		background-color:$fontcolor*2;
		color:$fontcolor;
		height:49px;
    }
$변수
$변수를 이용하여 공통된 속성을 재활용 할 수 있다.

$font-color: red;
.content{
    color: $font-color;
    float:left;
}
@mixin
@mixin을 사용하면 공통된 속성의 묶음을 재활용 할 수 있다.
다음과 같이 미디어 쿼리를 사용할 때 매우 유용하게 쓰일 수 있다.

$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
​
@mixin mobile {
  @media screen and (min-width: $sm) {
    @content;
  }
}
​
@mixin tablet {
  @media screen and (min-width: $md) {
    @content;
  }
}
​
@mixin desktop {
  @media screen and (min-width: $lg) {
    @content;
  }
}
​
@mixin large-desktop {
  @media screen and (min-width: $xl) {
    @content;
  }
}
@extend
특정 선택자를 상속할 때 사용한다.

.box{
	padding:20px;
	border:1px solid #333;
}
 
.news-box{
	@extend .box;
	background-color:#eee;
}
 
.list-box{
	@extend .box;
	background-color:#000;	
}
typography로 정해놓은 속성 extend하기
아래와 같이 h1,h2,h3등등과 같은 태그들의 속성들을 typography 파일로 전역적으로 사용하기 위해 설정해두고, 다른 파일에 extend하여, 다른 속성들을 적용시킨다.

//typography.css
.h1 {
  font-size: 2.0em;
}
​
.h2 {
​
}
​
.h3 {
  margin-top: 2.1em;
  margin-bottom: 1.3em;
​
  font-size: 1.3rem;
  font-weight: 700;
}
​
.h4 {
  margin-top: 1.3em;
  margin-bottom: 0.9em;
​
  font-size: 1.15rem;
  font-weight: 600;
}

//index.css
 h5 {
      @extend .h5;
      font-weight: bold;
      padding-top: 1.25rem;
      border-top: 1px solid $color-lightgray;
    }
@import
하나의 파일로 CSS관리하는 것에는 어려움이 있기 때문에 @import기능을 활용하여 코드의 재활용, 유지보수에 도움을 준다.
@import 'reset.css 처럼 확장자를 붙여도 되고
@import 'reset' 처럼 생략도 가능하다.

@if
조건 분기가 가능하다.

$num : two;
div{
	@if $num == one{
    color: blue;
    }else if $num == two{
    color: red;
    }@else{
    color: black;
    }
}
@for
반복문 사용이 가능하다

@for $i form 1 thrugh 3{
	.item-#{$i}{
    width: 2em * $i;
    }
}
