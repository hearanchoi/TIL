# 목차

- [리터럴의 종류](#리터럴의-종류)
- [이클립스 실행해보기](#이클립스-실행해보기)
- [eclipse 단축키](#eclipse-단축키)
- [연산](#연산)
- [연산테스트](#연산테스트)
- [변수](#변수)
- [변수를 선언할 때](#변수를-선언할때)
- [개발할때 작명의 고통 🤯](#개발할때-작명의-고통-🤯)
- [변수 저장 가능 범위](#변수-저장-가능-범위)
- [Error](#error)
- [변수의 명명 규칙](#변수의-명명-규칙)
- [컴파일 에러를 발생시키는 규칙](#컴파일-에러를-발생시키는-규칙)
- [개발자들간의 암묵적 규칙](#개발자들-간의-암묵적-규칙)
- [공부방법 추천](#공부방법-추천)

<br>
<br>

<br>

출력메소드 method : 기능 </br>
System.out.print() ()가 있으면 메소드</br>
</br>
리터럴 : 미리 정의해놓은 값의 형태를 말한다.
</br></br>

### **리터럴의 종류**

숫자 - 정수 (1,2,3) 정확한 수 // 실수 (1.0, 2.0) 대략적 근사치 계산시 사용 오차범위있음
문자 - 'a'
문자열 - "Hello" 클래스로 이루어짐
논리 - True , False
</br></br>

### **이클립스 실행해보기**

프로젝트 1개 생성 new - java project- chap01-literal-and-varaiable-lecture-source
-> don't createt
</br></br>
package explore tap-> src 우클릭- new - package
name : com.greedy.section01.literal (파일안에 폴더 만들기)
</br></br>
田 com.greedy.section01.literal -> 우클릭 - new - class - Application01

```
package firstProject;

public class HelloWorld {


public static void main(String[] args) {

	System.out.println("Hello World");
	System.out.println(123);

    System.out.print("Hello World");
    System.out.print(123);

}



}

- > Hello World
  > 123
  > Hello World123
```

println 은 줄을 바꿈</br>
print는 줄을 바꾸지 않음</br></br>

```
package com.greedy.section01.literal;

public class Application1 {


// : 단일주석
/* 여러줄주석
 * 여러줄 주석
 *
 * */

// 실행용 메소드
public static void main(String[] args) {

	/*1. 숫자형태의 값*/
	/*121. 정수형태의 값 출력*/
	System.out.println(123);
	/* 1-2. 실수형태의 값 출력*/
	System.out.println(1.23);

	/*2. 문자형태의 값 출력*/
    System.out.println('a'); // 문자 형태의 값은 홀따옴표(single-quotation)으로 감싸주어야한다.



// System.out.println('ab'); // 두 개 이상의 문자는 문자로 취급하지 않아 에러가 발생한다.
// System.out.println(''); // 아무 문자도 기록되어 있지 않은 경우도 에러가 발생한다.
System.out.println('1'); // 숫자값이지만 홀따옴표(single-quotation)로 감싸져 있는
// 경우 문자 '1'이라고 판단한다.
/_3. 문자열 형태의 값 출력_/
System.out.println("안녕하세요"); // 문자열은 문자 여러개가 나열된 형태를
// 말하며 쌍따옴표(double-quotation)으로 감싸주어야한다.
System.out.println("123"); // 정수 이지만 쌍따옴표로 감싸져있기 때문에 문자열로 봐야한다.
System.out.println(""); // 아무 값도 없는 빈 쌍따옴표도 문자열로 취급한다.
System.out.println("a"); // 한 개 문자도 쌍따옴표로 감싸면 문자열이다(문자 a와는 다르다)


    /*4. 논리 형태의 값 출력*/
    System.out.println(true);
    System.out.println(false); // true 혹은 false 값을 논리형이라고 한다.

}



}

=>123
1.23
a
1
안녕하세요
123

a
true
false
```

줄바꿈 원할때 쉬프트 엔터 누르면 편하게 내려옴</br>
'a' 문자 a "a" 문자열 a 구분해야한다.

빨간줄은 에러를 나타낸다 </br>
Exception in thread "main" java.lang.Error: Unresolved compilation problem:
Invalid character constant
at com.greedy.section01.literal.Application1.main(Application1.java:22)
메인보드 22번째줄이 에러구나 확인 가능:)
</br>
</br>

### **eclipse 단축키**

```
**주석** (맥) command shift c (윈도우) control shift c
**System.out.println();** **syso** (윈도우)컨트롤 스페이스 단축키 (맥)option space
**public void ststaic main(String[] args)** →
**main** (윈도우)컨트롤 스페이스 2 enter(맥)option space2번 enter
**같은 줄 복사** (맥) option command 방향키 (윈도우) alt control 방향키
**class 만들기** (윈도우)컨트롤 N (맥) command N
**검색 기능** (윈도우)컨트롤 F (맥) command F
**코드 상세보기** 코드에 f3 번 혹은 컨트롤 누르면서 코드 누르면 코드에대한 상세보기가 뜬다.
**이름 변경 및 수정** 패키지선택후 f2단축키
**summery 작성** 메소드에 커서놓고 단축키 alt shift j
```

깃랩에서 클론 통해 복사후 -> 새 이클립스창에 우클릭 - import - url-> next -> finish</br>

- local destination 빨간엑스 에러가 났을 때는 디렉토리에 맨뒤에 아무숫자입력하여 수정하면 가능

다른 클래스 더 땡겨 올때 프로젝트 우클릭 - team- pull 첫번째</br>

田 com.greedy.section01.literal -> 우클릭 - new - class - Application02

class 이름은 겹칠수 없음!</br></br>

### **연산**

```
package com.greedy.section01.literal;

public class Application02 {


public static void main(String[] args) {

	/* 값을 직접 연산하여 출력할 수 있다.
	 * 이 때 값의 형태에 따라 사용할 수 있는 연산자의 종류와 연산의 결과가 달라진다
	 * */

	/*1. 숫자와 숫자의 연산*/
	/*1-1. 정수와 정수의 연산 */
	System.out.println("==========정수와 정수의 연산=======");
	System.out.println(123 + 456);
	System.out.println(123 - 23);
	System.out.println(123 * 10);
	System.out.println(123 / 10); // 몫을 구하기
	System.out.println(123 % 10); // 나머지를 구하기

	/* 1-2. 실수와 실수의 연산 */
	System.out.println("==========실수와 실수의 연산=======");
	System.out.println(1.23 + 1.23);
	System.out.println(1.23 - 0.23);
	System.out.println(1.23 * 10.0);
	System.out.println(1.23 / 10.0);
	System.out.println(1.23 % 10.0);

	/* 1-3. 정수와 실수의 연산 */
	/* 정수와 실수 연산의 결과는 항상 실수가 나온다.*/
	System.out.println("==========정수와 실수의 연산======");
	System.out.println(123 + 0.5);
	System.out.println(123 - 0.5);
	System.out.println(123 * 0.5);
	System.out.println(123 / 0.5);
	System.out.println(123 % 0.5);

	/* 2. 문자의 연산*/
	/* 2-1. 문자와 문자의 연산*/
	/* 문자끼리의 연산도 사칙연산에 mod연산까지 가능하다. */
	System.out.println("==========문자와 문자의 연산======");
	System.out.println('a' + 'b');
	System.out.println('a' - 'b');
	System.out.println('a' * 'b');
	System.out.println('a' / 'b');
	System.out.println('a' % 'b');

	/* 2-2. 문자와 정수의 연산*/
	System.out.println("==========문자와 정수의 연산======");
	System.out.println('a' + 1);
	System.out.println('a' - 1);
	System.out.println('a' * 2);
	System.out.println('a' / 2);
	System.out.println('a' % 2);

	/* 2-2. 문자와 실수의 연산*/
	System.out.println("==========문자와 실수의 연산======");
	System.out.println('a' + 1.0);
	System.out.println('a' - 1.0);
	System.out.println('a' * 2.0);
	System.out.println('a' / 2.0);
	System.out.println('a' % 2.0);

	/*3. 문자열의 연산*/
	/* 3-1. 문자열과 문자열의 연산 */
	/* 문자열은 '+' 연산 외에는 다른 연산을 사용하지 못한다.
	 * 문자열과 문자열의 '+'연산결과는 문자열합치기 (이어붙이기)가 된다.
	 * */
	System.out.println("==========문자열과 문자열의 연산 ========");
	System.out.println("hello" + " world");
	//System.out.println("hello" - " world");
	//System.out.println("hello" * " world");
	//System.out.println("hello" / " world");
	//System.out.println("hello" % " world");

	/* 3-2. 문자열과 다른 형태의 값 연산*/
	/* 문자열과의 연산은 '+'연산만 가능하다.*/
	/* 연산 결과는 다른 형태의 값들도 문자열로 취급하여 문자열 이어붙이기(문자열 합치기) 결과가 나온다.*/
	System.out.println("==========문자열과 다른 형태의 연산 ========");

	/* 3-2-1. 문자열과 정수의 연산*/
	System.out.println("helloworld" + 123);

	/* 3-2-2. 문자열과 실수의 연산*/
	System.out.println("helloworld" + 123.456);

	/* 3-2-3. 문자열과 문자의 연산*/
	System.out.println("helloworld" + 'a');

	/* 3-2-4. 문자열과 논리값의 연산*/
	System.out.println("helloworld" + true);

	System.out.println("==========문자열과 형태의 숫자값 '+' 연산 ========");
	System.out.println("123" + "456");

	/* 4. 논리값 연산*/
	/* 4-1. 논리값과 논리값 연산*/
	/* 논리값 끼리의 연산은 모든 연산자 사용이 불가능하다/*/
	//System.out.println(true + false); // 에러발생
	//System.out.println(true - false); // 에러발생
	//System.out.println(true * false); // 에러발생
	//System.out.println(true / false); // 에러발생
	//System.out.println(true % false); // 에러발생

	/* 4-2. 논리값과 정수의 연산*/
	/* 논리값과 정수의 연산은 모든 연산자 사용이 불가능하다*/
	//System.out.println(true + 1); // 에러발생
	//System.out.println(true - 1); // 에러발생
	//System.out.println(true * 1); // 에러발생
	//System.out.println(true / 2); // 에러발생
	//System.out.println(true % 2); // 에러발생

	/* 4-3. 논리값과 실수의 연산*/
	/* 논리값과 실수의 연산은 모든 연산자 사용이 불가능하다*/
	//System.out.println(true + 1.0); // 에러발생
	//System.out.println(true - 1.0); // 에러발생
	//System.out.println(true * 1.0); // 에러발생
	//System.out.println(true / 2.0); // 에러발생
	//System.out.println(true % 2.0); // 에러발생

	/* 4-4. 논리값과 문자의 연산*/
	/* 논리값과 문자의 연산은 모든 연산자 사용이 불가능하다*/
	//System.out.println(true + 'a'); // 에러발생
	//System.out.println(true - 'a'); // 에러발생
	//System.out.println(true * 'a'); // 에러발생
	//System.out.println(true / 'a'); // 에러발생
	//System.out.println(true % 'a'); // 에러발생

	/* 4-5. 논리값과 문자열의 연산*/
	/* 논리값과 문자열의 연산은 '+' 연산만 사용 가능하다*/
	System.out.println(true + "a");
	//System.out.println(true * "a"); // 에러발생
	//System.out.println(true / "a"); // 에러발생
	//System.out.println(true % "a"); // 에러발생

}



}

=>==========정수와 정수의 연산=======
579
100
1230
12
3
==========실수와 실수의 연산=======
2.46
1.0
12.3
0.123
1.23
==========정수와 실수의 연산======
123.5
122.5
61.5
246.0
0.0
==========문자와 문자의 연산======
195
-1
9506
0
97
==========문자와 정수의 연산======
98
96
194
48
1
==========문자와 실수의 연산======
98.0
96.0
194.0
48.5
1.0
==========문자열과 문자열의 연산 ========
hello world
==========문자열과 다른 형태의 연산 ========
helloworld123
helloworld123.456
helloworlda
helloworldtrue
==========문자열과 형태의 숫자값 '+' 연산 ========
123456
truea
```

원하는 부분 똑같이 아래에 복사하고 싶을때 alt cntrol 방향키 아래 한줄 복사

ㄴ 화면이 돌아갈 경우 바탕화면 그래픽 옵션 바로가기 키 사용안함

문자는 아스키코드에 의해서 연산가능함 (특수기호 제외)

글자가 자꾸 지워지면 인설트 키로 나오기!
</br></br>

### **연산테스트~!**

```
package com.greedy.section01.literal;

public class Application3 {


public static void main(String[] args) {

	/*문자열 합치기 테스트*/
	System.out.println("=========두개의 문자열 합치기 =======");
	System.out.println(9 + 9);             //18
	System.out.println("9" + 9);             //99
	System.out.println(9 + "9");             //99
	System.out.println("9" + "9");             //99

	System.out.println("=========세 개의 문자열 합치기 =======");
	System.out.println(9 + 9 + "9");  //'+'의 연산 방향은 왼쪽에서 오른쪽이다 189
	System.out.println(9 + "9" + 9); // 999
	System.out.println("9" + 9 + 9); // 999
	// 1. 연산의 방향은 왼쪽에서 오른쪽이다.
	//    "9" + 9 -> "99"
	//    "99" + 9 -> "999"

	/* 위에 있는 문자열 합치기 한 999결과를 918로 변경 */
	System.out.println("9" + (9 + 9)); // 918

	/* 문자열 합치기 응용*/
	/* 10과 20의 사칙연산 결과를 출력하세요. */
	System.out.println("========= 10과 20의 사칙연산 결과 =======");
	System.out.println(10 + 20);
	System.out.println(10 - 20);
	System.out.println(10 * 20);
	System.out.println(10 / 20);
	System.out.println(10 % 20);

	System.out.println("========= 10과 20의 사칙연산 결과 보기 좋게 출력 =======");
	System.out.println("10과 20의 합 : " + (10 + 20));   // 10과 20의 합 : 30
	System.out.println("10과 20의 차 : " + (10 - 20));
	System.out.println("10과 20의 곱 : " + (10 * 20));
	System.out.println("10과 20을 나누기한 몫 : " + (10 / 20));
	System.out.println("10과 20을 나눈기 한 나머지 : " + (10 % 20));
}



}
```

</br>
</br>

### **변수**

메모리(RAM)에 시간에 따라 변하는 값을 기록하기 위한 공간
(변하는 값에 대한 공간)

田 com.greedy.section01.literal -> 우클릭 - new - package -뒷부분만수정
ㄴ 오타를줄이기위해서!

```
package com.greedy.section02.variable;

public class Application1 {


public static void main(String[] args) {

	/*변수의 사용 목적*/
	/* 1. 값에 의미를 부여하기 위한 목적
	 * (의미 전달이 쉬워야 코드를 읽기 쉬워지고, 협업 및 유지보수에 유리하기 때문이다.
	 * 2. 한 번 저장해둔 값을 재사용 하기 위한 목적
	 * (변수를 이용하여 코드를 작성하면, 값을 변경할 때도 보다 간편하게 변경할 수 있다.)
	 * 3. 시간에 따라 변하는 값을 저장하고 사용할 수 있다.
	 * (변하는 값을 저장하기 위한 공간이다.)
	 *
	 * */

	System.out.println("=======값에 의미 부여 테스트 =======");
	System.out.println("보너스를 포함한 급여 : " + (1000000 + 2000000) + "원");

	int salary = 1000000;
	int bonus = 2000000;
	System.out.println("보너스를 포함한 급여 : " + (salary + bonus) + "원");

	System.out.println("=======변수에 저장한 값 재사용 테스트 =======");
	/* 10명의 고객에게 100포인트를 지급해주는 내용을 출력하도록 작성해보자*/
	System.out.println("1번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("2번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("3번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("4번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("5번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("6번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("7번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("8번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("9번 고객에게 포인트를 100포인트를 지급하였습니다.");
	System.out.println("10번 고객에게 포인트를 100포인트를 지급하였습니다.");

	int point = 1000;
	System.out.println("1번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("2번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("3번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("4번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("5번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("6번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("7번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("8번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("9번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");
	System.out.println("10번 고객에게 포인트를 " + point + "포인트를 지급하였습니다.");

	/* 3. 시간에 따라 변경되는 값을 저장하고 사용*/
	System.out.println("=======변수에 저장된 값 변경 테스트 =======");
	/*변수는 하나의 값을 저장하고 사용하기 위한 공간이기 보다, 변하는 값을 저장하기 위한 공간이다*/
	int sum = 0;

	sum = sum + 10;
	System.out.println("sum에 10을 더하면 sum의 값은?" + sum);

	sum = sum + 10;
	System.out.println("sum에 10이 더하면 10을 추가로 더하면?" + sum);

}



}

=======값에 의미 부여 테스트 =======
  > 보너스를 포함한 급여 : 3000000원
  > 보너스를 포함한 급여 : 3000000원
  > =======변수에 저장한 값 재사용 테스트 =======
  > 1번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 2번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 3번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 4번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 5번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 6번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 7번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 8번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 9번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 10번 고객에게 포인트를 100포인트를 지급하였습니다.
  > 1번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 2번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 3번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 4번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 5번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 6번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 7번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 8번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 9번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > 10번 고객에게 포인트를 1000포인트를 지급하였습니다.
  > =======변수에 저장된 값 변경 테스트 =======
  > sum에 10을 더하면 sum의 값은?10
  > sum에 10이 더하면 10을 추가로 더하면?20
```

</br>

### **변수를 선언할때**

</br> int(자료형) sum (변수명) =(대입연산자) 0 (값);(세미콜론 변수를 선언했다는 뜻) 정수형태만가능</br>
=이 있으면 오른쪽에서 왼쪽에 있는 공간으로 대입한다고 생각!</br>
왼쪽은 무조건 공간

```
int sum = 0;


	sum = sum + 10;

    변수선언 : 첫번재줄은 0 두번째줄부터는 sum이 10이 됨

```

</br>

### **개발할때 작명의 고통 🤯**

변수를 선언했다. 변수를 대입했다. 구분해야함
_암기필요(대소문자 잘구분)_

```
package com.greedy.section02.variable;

public class Application2 {


public static void main(String[] args) {

	/*변수를 사용하기 위한 방법*/
	/*1. 변수를 준비한다.(선언)
	 *2. 변수에 값을 대입한다.(값 대입 및 초기화)
	 *3. 변수를 사용한다.
	 * */

	/*1. 변수를 준비
	 *1-1. 변수를 선언하는 방법
	 *자료형 변수명;
	 * */

	/* 자료형이란?
	 * 다양한 값의 형태별로 어느정도의 크기를 하나의 값으로 취급할 것인지
	 * 미리 Compiler와 약속한 키워드이다.
	 *
	 * 예) 앞에서 사용한 int 자료형은 정수를 4byte만큼을 읽어서 하나의
	 * 값으로 취급하겠다는 약속이다.
	 *
	 * 이러한 자료형은 기본자료형(Primary type)과
	 *              참조자료형(Reference type)으로 나누어진다.
	 * 그중에 기본자료형은 8가지가 존재한다.
	 * */

	/* 1-1-1. 숫자를 취급하는 자료형*/
	/* 정수를 취급하는 자료형은 4가지가 있다. */
	byte bnum;      // 1byte
	short snum;     // 2byte
	int inum;       // 4byte
	long lnum;      // 8byte

	/* 실수를 취급하는 자료형은 2가지가 있다. */
	float fnum;     // 4byte
	double dnum;    // 8byte

	/* 1-1-2. 문자를 취급하는 자료형*/
	/* 문자를 취급하는 자료형은 한가지가 있다. */
	char ch;        // 2byte
	char ch2;

	/*  1-1-3. 논리값을 취급하는 자료형*/
	boolean isTrue; // 1byte

	/* 여기까지가 8가지 기본자료형(Primary type)*/

	/* 1-1-4. 문자열을 취급하는 자료형*/
	String str;     // 4byte(엄밀히 얘기하면 주소값은 4byte이다.)

	/*2. 변수에 값을 대입한다 (값 대입 및 초기화)*/
	/*
	 * 위에서 한 변수 선언은 메모리에 값을 저장하기 위해 공간만 생성해준 상태이다.
	 * 그 공간에 대입연산자(=)를 이용하여 자료형에 저장하기로 한 형태의 값을
	 * 저장할 수 있다.
	 * 만약, 약속 내용과 다른 형태의 값을 대입하려고 하면 Compiler는 에러를 발생
	 * 시킨다.
	 *
	 * 대입 연산자의 실행방향은 오른쪽에서 왼쪽이다.
	 * 즉, 오른쪽에 있는 값을 왼쪽의 공간에 대입한다는 의미이며,
	 * 왼쪽에는 항상 공간, 오른쪽에는 항상 값이 온다.
	 * 변수를 대입연산자 왼쪽에 사용하면 공간의 의미이고,
	 * 대입연산자 오른쪽에 사용하면 변수가 가진 값을 의미한다.
	 *
	 * */
	bnum = 1;
	snum = 2;
	inum = 4;
	//lnum = 8;
	lnum = 8L;

	fnum = 4.0f;
	dnum = 8.0;

	ch = 'a';
	ch2 = 97;

	isTrue = true;
	isTrue = false;

	str = "안녕하세요";

	/* 변수를 선언하고 난 뒤 최초로 값이 대입되는것을 초기화라고한다.
	 * 위에서는 변수 선언과 값 대입을 따로 했지만 동시에 수행할 수도 있다.
	 * 이것을 선언과 동시에 초기화라고 한다.
	 * */
	int point = 100;
	int bonus = 10;

	/* 3. 변수를 사용한다.*/
	System.out.println("==========변수에 저장된 값 출력 ==========");
	System.out.println("bnum의 값 : " + bnum);
	System.out.println("snum의 값 : " + snum);
	System.out.println("inum의 값 : " + inum);
	System.out.println("lnum의 값 : " + lnum);

	/* 3-1. 변수를 이용해서 연산하기*/
	System.out.println("포인트와 보너스의 합은?" + (point + bonus));

	/* 3-2. 대입연산자의 왼쪽과 오른쪽에서 사용하기*/
	point = point + 100;
	System.out.println("point = point + 100 ? " + point);

}

->==========변수에 저장된 값 출력 ==========



bnum의 값 : 1 </br>
snum의 값 : 2 </br>
inum의 값 : 4 </br>
lnum의 값 : 8 </br>
포인트와 보너스의 합은?110 </br>
point = point + 100 ? 200 </br>
```

기본 값외에는 뒤에 단위를 붙여주기! long이나 float 사용시
</br></br>

### **변수 저장 가능 범위**

데이터 저장 최소 단위 bit
8bit = 1byte
</br></br>

### **Error**

실행중일때 error runtime error </br>
실행전일때 error compile error
</br></br>

### **변수의 명명 규칙**

application3 class 만들기

```
package com.greedy.section02.variable;

public class Application3 {


 public static void main(String[] args) {

	 /*1-1. 동일한 범위 내에서 동일한 변수명을 가질 수 없다.*/
	 int age = 20;
	 //int age = 30;

	 /*1-2. 예약어는 사용이 불가능하다*/
    // int true = 1; // 예약어는 사용 불가

	 /* 1-3. 변수명은 대소문자를 구분한다. */
	 int True = 10;
	 int Age = 20;

	 /* 1-4. 특수기호는 '_'와 '$'만 사용 가능하다.*/
	 //int sh@rp = 20; //사용 가능한 특수문자 외에는 사용 불가능
	 int _a_g_e_ = 20; // 언더스코어(_)는 사용가능하고 위치는 상관이 없다.
	 int $harp = 20; // $도 사용가능하고 위치는 상관이 없다.

	 /* 2. 컴파일 에러를 발생시키지는 않지만 개발자들끼리의 암묵적인 규칙*/
	 /* 2-1. 변수명의 길이제한없다. 하지만 적당히 하자*/
	 int fksjdlkfjslkjfkdjflksjdkjlkjsdlkjflksjfklkjsldjf;

	 /* 2-2. 변수명이 합성어로 이루어진 경우 첫 단어는 소문자, 두번째 시작
	  *      단어는 대문자로 시작한다.
	  *      자바에서는 클래스명만 유일하게 대문자로 시작한다.
	  **/
	 int maxAge = 20;
	 int minAge = 10;

	 /* 2-3. 단어와 단어 사이의 연결을 언더스코어(_)로 하지 않는다.*/
	 String user_name;  // 에러가 발생하지 않지만 이렇게 하지말자
	 String userName;   // 올바른 표현

	 /* 2-4. 한글로 변수명을 짓는 것이 가능하지만, 권장하지 않는다.*/
	 int 나이;

	 나이 = 10;

	 /* 2-5. 변수 안에 저장된 값이 어떤 의미를 가지는지 명확하게 표현하도록 한다.*/
	 String s;
	 String name;

	 /* 2-6. 전형적인 변수 이름이 있다면 가급적 사용하도록 한다.*/
	 int sum = 0;
	 int max = 10;
	 int min = 0;
	 int count = 1;

	 /* 2-7. 명사형으로 작성할 수 있도록 한다. */
	 String goHome;
	 string home;

	 /* 2-8. boolean 형은 의문문으로 가급적 긍정형태로 네이밍한다.*/
	 boolean isAlive = true;
	 boolean isDead = false; // 부정형보다는 긍정형이 더 나은 방식이다.

 }



}
```

</br></br>

### **컴파일 에러를 발생시키는 규칙**

1. 동일한 범위 내에서 동일한 변수명을 가질 수 없다.
2. 예약어 사용이 불가능하다.
3. 대/소문자를 구분한다.
4. 숫자로 시작할 수 없다.
5. 특수문자는'\_'와'$'만을 허용한다.
   </br></br>

### **개발자들 간의 암묵적 규칙**

1. 길이 제한은 없으나 적당한 길이의 변수명을 작성하자
2. 합성어일 경우 첫 단어는 소문자로 시작하고 두번째 단어부터는 대문자로 시작(camel-case)
   _클래스, 상수는 첫글자 대문자 // 변수 및 나머지는 첫글자가 소문자_ 3.단어와 단어 사이는 언더스코어(\_) 사용 안함 4.한글로 변수명을 지을수 있지만 권장하지 않는다
3. 변수안에 저장된 값이 어떤 의미를 가지는지 알 수 있도록 이름을 짓는다(변수는 명사형태 메소드는 동사형태) 6.전형적인 변수명이 있으면 가급적 사용~!
   7.boolean형은 의문문으로 작성하되 가급적이면 긍정형으로 네이밍한다.
   </br></br>

### **공부방법 추천**

누군가가 질문했을때 내가 어떻게 답변할수 있을지! (말과 글로)
ㄴ 내가 모르는 것과 질문할것을 명확히 찾을 수 있다.
내가 모르는사람에게 이해시켜줄수 있도록 설명 가능하게끔

마인드맵 - 카테고리 - 목차 - 정리 [whimsical.com](http://whimsical.com/) 마인드맵 사이트 활용

깃랩에서 chap01-literal-and-variable-practice-question 서브에 받아서 편하게
문제 풀어보기!

팀스터디 하기
