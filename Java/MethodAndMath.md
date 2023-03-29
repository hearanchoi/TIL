# 목차

- [메소드 정의하기](#메소드-정의하기)
- [메소드의 호출과 입력](#메소드의-호출과-입력)
- [변수의 종류](#변수의-종류)
- [메소드의 출력](#메소드의-출력)
- [메소드를 클래스에서 호출하기](#메소드를-클래스에서-호출하기)
- [import 구문](#import-구문)
- [API MATH 클래스](#api-math클래스)
- [난수의 활용](#난수의-활용)
- [디버그 활용](#디버그-활용)

<br>
<br>

<br>

**Method 메소드** </br>특정 작업을 수행하기 위한 명령문의 집합
</br></br>
**메소드를 사용하는 이유** </br>재활용, 코드량 감소, 유지보수에 적합
</br></br>

### **메소드 정의하기**

    ex numbering 메소드 정의하기

    Public Static void numbering( ) {
        int i= 1;
        while ( i < 10) {
        System.out.println(i);
        i++;
         }

    }

    정의할 메소드 뒤에 괄호를 넣고 브레이스 안에
    명령문을 입력한다.

    ㄴ numbering이라는 메소드는 1부터 9까지
    출력

<br><br>

### **메소드의 호출과 입력**

    numbering 메소드의 호출과 입력 하기!

    Public Static void main String([] args) { numbering(5); }

    ㄴ 호출할 메소드를 브레이스 안에 넣는다.
    괄호안에 넣은 값을 전달인자 라고 한다.
    5= 전달인자

    메소드 정의시 괄호안에는 매개변수를 넣어서 사용할 수 있다. 메소드 호출시 전달인자를 매개변수에 넣어서 실행한다.

    매개변수 ㄱ

    Public Static void numbering( int limit ) {
    int i= 1;
    while ( i < limit) {
    System.out.println(i);
    i++;
    }

    ㄴ 1부터 5까지 출력

<br><br>

### **변수의 종류**

    1. **지역변수**
    지역변수는 선언한 메소드 블럭 내부에서만 사용이 가능하다 {} 안에서 가능
    2. **매개변수**
    입력 값(전달 인자)을 수용하기 위해 정해진
    변수이다.
    3. **전역변수** ( 인스턴스(객체지향변수)변수 와 클래스(static)변수)

    전역변수는 어디서든 호출하면 사용할수 있는 변수인데 두가지로 나뉜다.

    - **인스턴스 변수(객체변수)**는 클래스 영역에서 선언되며 클래스의 객체를 생성할 때 만들어진다.
    즉 객체화를 시켜서 호출해야만 사용이 가능하다.

          객체화
          => 클래스명 객체명 = new 클래스명();

          // class가 조립설명서라면 객체는 로봇
        객체화는 로봇을 작동하기위한 메모리 라고생각!

    - **클래스(Static)변수**는 객체화를 시키지 않고 사용이 가능하다.

<br><br>

### **메소드의 출력**

    메소드의 마지막에는 return명령어가 항상 존재한다.

    return은 자신을 호출한 구문으로 복귀하며,
    리턴뒤의 메소드는 종료시킨다.

    리턴값이 반활할때 값을 가지고 갈수 있으며
    이것은 리턴값이라고 한다.

    return값을 반환하기 위해서는 메소드 선언부에 리턴 타입을 명시해야하며
    void는 아무 반환값도 가지지 않겠다는 리턴타입에 사용한다.

    반환 값이 없는 경우 return구문은 생략해도 컴파일러가 자동으로 추가한다.

    /주의사항

    메소드에 선언한 리턴 타입과
    반환 값의 자료형이 반드시 같게 일치해야 한다

<br><br>

### **메소드를 클래스에서 호출하기**

    non - static 메소드인 경우
    클래스명 사용할 이름 = new 클래스명();
    사용할 이름. 메소드명 ();

    Calculator calc = new Calculator();
    int min = calc.minNumberof(first,second);

    Static 메소드인경우
    다른 클래스에 작성한 static 메소드의 경우
    호출할 때 반드시 클래스명 기술해야함!

    int max = Calculator.maxNumberof(first, second);

<br><br>

### **import 구문**

     서로 다른 패키지에 존재하는 클래스를 사용할 때 패키지명을 생략하고 사용할 수 있도록 한 구문

      import는 package 선언문과 class선언문 사이에 작성
      어떠한 패키지 내에 있는 클래스를 사용할 것인지에 대해 미리 선언하는 효과

    package com.greedy.section02.package_and_import;

    import com.greedy.section01.method.*;

    public class Application2 {

    /*static method인 경우 import*/

    int max = Calculator.maxNumberof(50, 60);

    /*추가로 static 메소드를 호출할 때 클래스명도 생략하고 사용할 수 있다.*/

    int max2 = maxNumberof(100, 200);

    control shift O

<br><br>

### **API MATH클래스**

     **API** (Application Programming Interface)

    우리가 구현할 수 없거나 번거로운 기능을 JDK를 설치하면

    사용할 수 있도록 제공해놓은 소스코드들을 의미한다.

    다른 패키지에 있는 클래스를 사용하는데 예외적으로 java.lang 패키지에 있는

    내용은 별도의 import를 하지 않아도 사용할 수있게 정의되어있다.

     **java.lang.Math**

     **Math클래스** 수학에서 자주 사용하는 상수들과 함수들을 미리 구현해놓은 클래스

    System.***out***.println("PI 변수 " + java.lang.Math.***PI***);

    System.***out***.println("-7의 절대값 : " + java.lang.Math.*abs*(-7));

    System.***out***.println("-1.25의 절대값 : " + Math.*abs*(-1.25));

    System.***out***.println("10과 20중 더 작은 것은 : " + Math.*min*(10, 20));

    System.***out***.println("20과 30중 더 큰 것은 : " + Math.*max*(20, 30));

    System.***out***.println("난수 발생 : " + Math.*random*());

    PI 변수 3.141592653589793
    -7의 절대값 : 7
    -1.25의 절대값 : 1.25
    10과 20중 더 작은 것은 : 10
    20과 30중 더 큰 것은 : 30
    난수 발생 : 0.8372775412250367

<br><br>

### **난수의 활용**

    **Math.random()** 0.0부터 1.0전까지의 실수 범위의 난수값을 반환

    **원하는 범위의 난수를 구하는 공식**

     (int) (Math.random() * 구하려는 난수의 갯수) +

    구하려는 난수의 최소값 (0으로부터 떨어진 값+)

    /* 0 ~ 9까지의 난수 발생 */

    **int** random1 = (**int**) (Math.*random*() * 10);

    System.***out***.println("0부터 9 사이의 난수 : " + random1);

    0부터 9 사이의 난수 : 7

    /* 10 ~ 15까지의 난수 */

    /* 15 - 10 + 1 -> 6*/

    **int** random3 = (**int**) (Math.*random*() * 6) + 10;

    System.***out***.println("10부터 15 사이의 난수 : " + random3);

    10부터 15 사이의 난수 : 10

    /* -128 ~ 127까지의 난수 발생

    * 127 - (-128)

    * 127 + 128 + 1 => 256

    * */

    //int random4 = (int) (Math.random() * 256) + (-128);

    **int** random4 = (**int**) (Math.*random*() * 256) - 128;

    System.***out***.println("-128부터 127까지의 난수 발생 : " + random4);

    -128부터 127까지의 난수 발생 : -25

<br>
<br>

### **디버그 활용**

    디버깅 단계별로 체크해볼 수 있음
    왼쪽 막대기에 더블클릭 하면 점이 생김  : 중단점 breakpoint
    이부분에 프로그램 실행을 멈춤 상단에 debug 벌레 아이콘 키보드로는 그냥 f11
    switch-> 회색블록이나 그린블록이됨 중단된 부분이 해당코드가 아직 실행 안된상태
    f5: 상세하게 보기 진행 f6 : 단계별로 진행 f8: 단계를 아예넘기는
    오른쪽 차에 add new  expression에 app1 f6 -> app1.hashCode() ->f6 ->

    메소드는 호출을 다하면 다시 호출된곳으로 다시 돌아가는 특징을 가짐
    아래에 빨간색 네모는 실행중 일때 실행 끝나면 불이 꺼짐

    디버그 후

    중단점에 더블클릭후 f11누르기, f5와 f6 통해서 이동가능하고  expression 창에 nmae 칸에
    first 입력하면 대입할 값을 알 수있음

<br>
<br>

구글 java api 11 -> java.base -> java.util->package-> date
<br>

method.* (*은클래스에서만 사용가능하며 모든 클래스 안에있는 걸로 선언하겠다는뜻)
