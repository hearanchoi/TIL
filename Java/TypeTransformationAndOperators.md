# 목차

- [상수란?](#상수란)
- [상수의 명명규칙](#상수의-명명규칙)
- [오버플로우](#오버플로우)
- [데이터 형변환](#데이터-형변환)
- [강제형변환](#강제형변환)
- [자동 형변환과 강제 형변환을 이용한 자료형끼리의 연산](#자동-형변환과-강제-형변환을-이용한-자료형끼리의-연산)
- [형변환 사용할시 주의할 점](#형변환-사용-시-주의할-점)
- [산술연산자](#산술-연산자)
- [대입 연산자와 산술 복합 대입 연산자](#대입-연산자와-산술-복합-대입-연산자)
- [증감 연산자](#증감-연산자)
- [비교연산자](#비교-연산자)
- [논리연산자](#논리-연산자)
- [논리 연산자의 우선순위 활용](#논리-연산자의-우선순위-활용)
- [삼항연산자](#삼항-연산자)
- [AND 연산과 OR 연산의 특징](#and-연산과-or-연산의-특징)

<br>
<br>

### **상수란?**

<br/>

상수선언 방법 : final 이라는 예약어를 붙인다<br/>final int AGE;<br/> 상수는 전부 대문자<br/><br/>

```

	 /*
	  * 상수란?
	  * 변수가 메모리에 변경될 값을 저장하기 위한 공간을 나타낸다면, 상수는 이와 상반되는 개념이다.
	  * 변하지 않는 값을 (항상 고정된 값을) 저장해두기 위한 메모리상의 공간을 상수라고한다.
	  *
	  * 상수의 사용 목적
	  * 변경되지 않는 고정된 값을 저장할 목적으로 사용한다.
	  * 초기화 이후 값 대입 시 컴파일 에러를 발생시켜 값이 수정되지 못하도록한다.
	  * 예) 수학 공식에 사용되는 수치 또는 변하지 않는 설정값 등
	  *
	  * 사용방법
	  * 1. 상수를 선언한다(변수 선언과 유사하지만 final 키워드를 사용한다.)
	  * 2. 값을 초기화한다(초기화 이후에는 값 변경 불가능하다)
	  * 3. 필요한 위치에 상수를 호출해서 사용한다.
	  * */

	 final int AGE;

	 AGE = 20;
	 //AGE = 30; // 한 번 초기화 한 이후 값을 재 대입하는 것은 불가능하다.

	 System.out.println("AGE의 값 : " + AGE);

	 // 필요 시에 연산식에서 호출해서 사용 가능하다.
	 System.out.println("AGE의 2배 : " + (AGE * 2));

	 int sum = AGE; // 대입 연산자의 오른쪽 편에는 기술 가능함

	 AGE = AGE + 10; // 대입 연산자의 왼쪽 편에는 기술 불가능함,
 }


}
```

<br/><br/>

### **상수의 명명규칙**

```


	/* 상수의 명명규칙
	 * 상수의 명명 규칙은 변수의 명명규칙과 컴파일 에러를 발생시키는 규칙은 동일하다.
	 * 단, 개발자들끼리의 암묵적인 규칙에서 일부 차이를 보인다.
	 *
	 * 1. 모든 문자는 영문자 대문자 혹은 숫자만 사용한다.
	 * 2. 단어와 단어 연결은 언더스코어(_)를 사용한다,
	 * */

     final int AGE1 = 20;
     final int AGE2 = 30;
     final int age3 = 40; // 소문자로 사용은 가능하나 변수와 구분하기 힘들기 때문에 만들어진 규칙이다.

     final int MAX_AGE = 60;
     final int MIN_AGE = 10;
     final int minAge = 30;  // came-case 사용이 가능하지만 역시 변수와 구분되지 않는다.
}


}
```

<br/><br/>

### **오버플로우**

데이터 오버플로우 허용된 범위 이상의 비트일 경우 <br/>정수형 기본형태는 int 이다 <br/>128은 허용범위를 넘어갔으므로 <br/>int사용해야함

```


	 /*오버플로우
	  *
	  * 자료형 별 값의 최대 범위를 벗어나는 경우
	  * 발생한 carry를 버림처리하고 sign bit를 반전시켜 최소값으로 순환시킨다.
	  * */
	 // -128 ~127 범위를 가지고 있다.
	 byte num1 = 127;

	 System.out.println("num1 : " + num1);

	 num1++;                                    // 1 증가
	 num1++;
	 num1++;
	 System.out.println("num1 overflow : " + num1);

	 /*언더플로우
	  * 오버플로우와 반대 개념으로 최소 범위보다 작은 수를 발생시키는 경우 발생하는 현상이다.
	  * */
	 byte num2 = -128;

	 System.out.println("num2 : " + num2);

	 num2--;                              // 1 감소

	 System.out.println("num2 underflow : " + num2);

	 /* int형의 최대값은 대략 21억 정도 */
	 int firstNum = 1000000;
	 int secondNum = 700000;

	 int multi = firstNum * secondNum;

	 System.out.println("firstNum * secondNum =" + multi);

	 /*
	  * 이런 현상이 발생해도 그냥 넘기는 경우가 발생할 수 있다.
	  * 이런 경우를 논리적 에러라고 표현한다.(디버깅 시 가장 힘든 이유 중 한가지)
	  * */

	 /*해결방법*/
	 /*오버플로우를 예측하고 더 큰 자료형으로 결과값을 받아서 처리 */
	 long longMulti = firstNum * secondNum;

	 System.out.println("longMulti : " + longMulti);

	 long result = (long) firstNum * secondNum;

	 System.out.println("result : " + result);
 }


}

- > num1 : 127num1 overflow : -126num2 : -128num2 underflow : 127firstNum \* secondNum =-79669248longMulti : -79669248result : 700000000000
```

작은자료형은 큰자료형을 따라감자동 형변환 -> 아키코드, 작은 자료형을 값의 범위가 큰 자료형으로 변환강제형변환-> 직접명시

<br/><br/>

### **데이터 형변환**

```
public static void main(String[] args) {

	/*데이터 형변환*/
	/*
	 *데이터 형변환이 필요한 이유
	 * - 자바에서 다른 타입끼리의 연산은 피연산자들이 모두 같은 타입인 경우 실행할 수 있다.
	 * - 즉, 같은 데이터 타입끼리만 연산을 수행할 수 있다.
	 */

	/*
	 * 형변환의 종류와 규칙
	 * 1. 자동형변환(묵시적 형변환) : 컴파일러가 자동으로 수행해주는 타입 변환
	 *   1-1. 작은 자료형에서 큰 자료형으로는 자동 형변환이된다.
	 *   1-2. 정수는 실수로 자동 형변환 된다.
	 *   1-3. 문자형은 ,int형으로 자동 형변환 된다.
	 *   1-4. 논리형은 형변환 규칙에서 제외된다.
	 * 2. 강제형변환(명시적 형변환) : 형변환(cast)연산자를 이용한 강제적으로 수행하는 형변환
	 *   2-1. 자동형변환이 적용되지 않는 경우 강제 형변환이 필요하다.
	 *  */
	/*
	 * 작은 자료형에서 큰 자료형으로 공간만 옮기는 경우 데이터 손실이 발생하지 않기 때문에
	 * 컴파일러가 자동으로 처리해준다.
	 * */

	byte bnum = 1;       // 1byte       -> 8
	short snum = bnum;   // 2byte       -> 16
	int inum =snum;      // 4byte       -> 32
	long lnum = inum;    // 8byte       -> 64

	/* 연산 시에도 자동으로 큰 쪽 자료형에 맞춰서 계산한다.*/
	int num1 = 10;
	long num2 = 20;

	//int result = num1 + num2;   // 자동으로 큰 쪽 자료형인 long으로 변경 후 계산하기 때문에
	                            // int형 변수에 값을 담을 수 없다.

	long result1 = num1 + num2; // int + long은 서로 다른 자료형이라 int -> long 변환을 한 후
	                           // 연산한다.
	System.out.println("result1 : " + result1);

	// 실수 끼릐의 자동 형변환
	float fnum = 4.0f;
	double dnum = fnum;

	/* 연산 시에도 자동으로 큰 쪽 자료형에 맞춰서 계산된다.*/
	double result2 = fnum + dnum;

	System.out.println("result2 : " + result2);

	/*정수는 실수로 자동 형변환 된다.*/
	/*
	 * 정수를 실수로 변경할 때 소수점 자리수가 없어도 실수형태로 표현이 가능하다.
	 * 이 때 데이터 손실이 없기 때문에 자동 형변환이 가능하다.
	 * */

	//long eight = 8888888888L;  // 이것도 자동으로 형변환 된것이다 (int 범위벗어나면 에러 발생)
	long eight = 8;

	float four = eight;

	System.out.println("four :" + four);

	/*따라서 실수와 정수의 연산은 실수로 연산 결과가 반환된다*/
	float result3 = eight + four;

    System.out.println("result3 : " + result3);

    char ch1 = 'a';
    int charNumber = ch1;

    System.out.println("charNumber : " + charNumber);

    /* int로 type이 정해지지 않은 리터럴 형태의 정수는 char형 변수에 기록 가능하다.*/
    char ch2 = 65;

    System.out.println("ch2: " + ch2);

    /*논리형은 형변환 규칙에서 제외된다.*/
    /* 어느 자료형이든 boolean을 형변환해서 담을 수 없다.*/
    boolean isTrue = true;



// byte b = isTrue;// short s = isTrue;// int i = isTrue;// long l = isTrue;// char c = isTrue;// float f = isTrue;// double d = isTrue;


    }

}
```

<br/><br/>

### **강제형변환**

```
public static void main(String[] args) {

	/*강제형변환*/
	/*
	 * 바꾸려는 자료형으로 캐스트 연산자를 이용하여 형변환한다.
	 * 예) (바꿀자료형) 값;
	 * */

	/*
	 * 자동형변환 규칙의 반대 상황에서 강제 형변환이 필요하다.
	 *
	 * 1. 강제 형변환 규칙
	 *   1-1. 큰 자료형에서 작은 자료형으로 변경 시 강제 형변환이 필요하다.
	 *   1-2. 실수를 정수로 변경 시 강제 형변환이 필요하다.
	 *   1-3. 문자형을 int미만 크기의 변수에 저장할 때 강제 형변환이 필요하다.
	 *   1-4. 논리형은 강제 형변환 규칙에서도 제외된다.
	 *   */

	long lnum = 8;
```

// int inum = lnum; // 데이터 손실 가능성을 컴파일러가 알려준다. (에러남)int inum = (int) lnum; // 변경하려는 자료형을 명시하여 강제 형변환을 해야한다.short snum = (short) inum;byte bnum = (byte) snum;

```
	double dnum = 8.0;
	//float fnum = dnum; // 데이터 손실 가능성을 컴파일러가 알려준다.(에러남)
	float fnum = (float) dnum;

	/*실수를 정수로 변경 시 강제 형변환이  필요하다.*/
	float fnum2 = 4.0f;


// long lnum2 = fnum2; // float 4byte, long은 8byte임에도 자동형변환불가능(소수점 자리 이하 데이터 손실 가능성)


	long lnum2 = (long) fnum2; // 강제 형변환의 의미는 '내가 데이터 손실을 감안할테니 형변환 해줘~' 라는 의미
	System.out.println("lnum2 : " + lnum2);

	/*문자형을 int미만 크기의 변수에 저장할 때 강제 형변환이 필요하다.*/
	char ch = 'a';
	byte bnum2 = (byte) ch;    // 당연히 char 자료형보다 작은 크기이니 강제형변환을 해야한다.
	short snum2 = (short) ch; // 같은 2byte여도 강제형변환을 시켜줘야하는데 이유는
	                          // 부호비트(sign bit)로 인한 값의 범위가 다르기 때문이다.

	int num1 = 97;      //문자 a
	int num2 = -97;    // 문자 a가 아니다.(음수..)

	char ch2 = (char) num1;
	char ch3 = (char) num2;

	System.out.println("ch2 : " + ch2);
	System.out.println("ch3 : " + ch3);

	/*논리형은 강제 형변환 규칙에서도 제외된다.*/
	boolean isTrue = true;



// byte b = (byte) isTrue;// short s = (short) isTrue;// int i = (int) isTrue;// long l = (long) isTrue;// char c = (char) isTrue;// float f =(float) isTrue;// double d = (double) isTrue;}

}
```

</br></br>

### **자동 형변환과 강제 형변환을 이용한 자료형끼리의 연산**

```
public static void main(String[] args) {

	/* 자동 형변환과 강제 형변환을 이용한 자료형끼리의 연산*/

	/* 다른 자료형끼리 연산은 큰 자료형으로 자동 형변환 후 연산 처리 된다.*/
	int inum = 10;
	long lnum = 100;

	/*자바에서는 같은 자료형끼리만 연산이 가능하다.
	 * -> 서로 자료형이 다른 두 자료형을 연산할 때 자료형이 같아지도록 형변환을 해 주어야한다,
	 * */

	/* 방법1. 두 수의 연산 결과를 int형으로 변환 후 int 자료형 변수에 리턴받는다.*/
	//int isum = inum +lnum; // 그냥은 안된다. 두 자료형의 연산결과는 큰 자료형인 long이 되고
                             //long 형 값은 int형 변수에 담길 수 없다.

	int isum = (int) (inum + lnum);

	/* 방법2. 결과값을 long형 자료형으로 받는다.(자동 형변환 이용)*/
	long lsum = inum + lnum;

    System.out.println("lsum : " + lsum);

    /*방법 3. long형 값을 int로 가제 형변환 한다.*/
    int isum2 = inum + (int) lnum;

    System.out.println("isum2 : " + isum2);

    /* 주의! int 미만의 연산의 처리 결과는 int 형이다.*/
    byte byteNum1 = 1;
    byte byteNum2 = 2;
    short shortNum1 = 3;
    short shortNum2 = 4;

    int result1 = byteNum1 + byteNum2;
    int result2 = byteNum1 + shortNum1;
    int result3 = shortNum1 + byteNum1;
    int result4 = shortNum1 + shortNum2;

    System.out.println("result1 : " + result1 );
    System.out.println("result2 : " + result2 );
    System.out.println("result3 : " + result3 );
    System.out.println("result4 : " + result4 );

}


}

- > lsum : 110isum2 : 110result1 : 3result2 : 4result3 : 4result4 : 7
```

</br></br>

### **형변환 사용 시 주의할 점**

```
public static void main(String[] args) {

	/*형변환 사용 시 주의할 점*/
	/* 1. 의도하지 않은 데이터 손실*/
	int inum = 290;
	byte bnum = (byte) inum;

	System.out.println("inum : " + inum);
	System.out.println("bnum : " + bnum);

	/*2. 의도한 데이터 손실*/
	double height = 175.5;
	int floorHeight = (int) height;

	System.out.println("height : " + height);
	System.out.println("floorHeight : " + floorHeight);

}


}-> inum : 290bnum : 34height : 175.5floorHeight : 175
```

연산자

앞에가 문자열이면 뒤에도 문자열로 인식한다 </br> 괄호가 있지 않은 이상연산 수행이 왼쪽에서 오른쪽으로 흘러가기 때문
</br> </br>

### **산술 연산자**

```
  public static void main(String[] args) {

	  /*
	   * 산술 연산자
	   *
	   * 산술 연산자는 주로사칙연산과 관련된 연산자로 가장 기본적이면서도 많이 사용되는 연산자이다.
	   * 연산의 실행이 가능하기 위해 필요한 값이나 변수가 두 개인 이항 연산자로 분류되며
	   * 피연산자들의 연산 방향은 '왼쪽에서 오른쪽'이다.
	   * */

	  /*
	   * 산술 연산자의 우선순위
	   * 수학의 개념과 유사하게 곱하기와 나누기 연산이 더하기와 빼기 연산보다 우선적으로 동작하고
	   * 우선순위가 같은 경우 연산자의 결합방향에 의해 실행 순서가 결정된다.
	   * */

	  int num1 = 20;
	  int num2 = 7;

	  System.out.println("num1 + num2 =" + (num1 + num2));
	  System.out.println("num1 - num2 =" + (num1 - num2));
	  System.out.println("num1 * num2 =" + (num1 * num2));
	  System.out.println("num1 / num2 =" + (num1 / num2));
	  System.out.println("num1 % num2 =" + (num1 % num2));

  }


}->num1 + num2 =27num1 - num2 =13num1 \* num2 =140num1 / num2 =2num1 % num2 =6
```

</br></br>

### **대입 연산자와 산술 복합 대입 연산자**

```
public static void main(String[] args) {

	/* 대입 연산자와 산술 복합 대입 연산자*/
	/*
	 * '=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 대입한다.
	 * '+=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 더한 결과를 왼쪽의 피연산자에 대입한다.
	 * '-=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 뺀 결과를 왼쪽의 피연산자에 대입한다.
	 * '*=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 곱한 결과를 왼쪽의 피연산자에 대입한다.
	 * '/=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 나눈 몫 결과를 왼쪽의 피연산자에 대입한다.
	 * '%=' : 왼쪽의 피연산자에 오른쪽의 피연산자를 나눈 나머지 결과를 왼쪽의 피연산자에 대입한다.
	 * */

	int num = 12;

	num = num + 3;

	System.out.println("num = " + num);

	num += 3; // num = num +3;와 동일
	System.out.println("num =" + num);

	num -= 5; // num = num -5와 동일
	System.out.println("num =" + num);

	num *= 2; //num 값 2배 증가
	System.out.println("num =" + num);

	num /= 2; // num값 2배 감소
	System.out.println("num=" + num);

	/*주의! 산술 복합 대입연산자의 작성 순서에 주의해야한다.
	 * 아래의 결과는 산술 대입연산자가 아닌 '-5'를 num에 대입한 것이다.
	 * */
	num =- 5;
	System.out.println("num=" + num);

}


}-> num = 15num =18num =13num =26num=13num=-5
```

</br>

### **증감 연산자**

firstNum+ 후이 연산자는 실행하기전이기때문에 현재 값20을 가지고 있고 다음번에 불렀을때 1이 증가된 21을 반환함반복문이나 조건문에 많이 사용됨

```
public static void main(String[] args) {

	/*증감연산자*/
	/*피연산자의 앞 or 뒤에 사용이 가능하다.*/
	/*
	 * '++' : 1 증가의 의미
	 * '--' : 1 감소의 의미
	 * */

	int num = 20;
	System.out.println("num : " + num);

	num++; //1증가
	System.out.println("num : " + num);

	++num; //1증가
	System.out.println("num : " + num);

	num--; // 1감소
	System.out.println("num : " + num);

	--num; // 1감소
	System.out.println("num : " + num);

	/*
	 * 다른 연산자와 함께 사용할 때 의미가 달라진다
	 * */
	/*다른 연산자와 함께 사용할 때 증감 연산자의 의미
	 * '++var' : 피연산자의 값을 먼저 1을 증가시킨 후 다른 연산을 진행한다.
	 * 'var++' : 다른 연산을 먼저 진행하고 난 뒤 마지막에 피연산자의 값을 1증가시킨다.
	 * '--var' : 피연산자의 값을 먼저 1 감소시킨 후 다른 연산을 진행한다.
	 * 'var--' : 다른 연산을 먼저 진행하고 난 뒤 마지막에 피연산자의 값을 1 감소시킨다.
	 * */

	int firstNum = 20;

	int result1 = firstNum-- * 3; //20(21)

	System.out.println("result1 : " + result1);
	System.out.println("firstNum : " + firstNum); //21

    int secondNum = 20;

	int result2 = --secondNum * 3;// 21(21)

	System.out.println("result2 : " + result2);
	System.out.println("secondNum : " + secondNum);

}
```

}-> num : 20num : 21num : 22num : 21num : 20result1 : 60firstNum : 19result2 : 57secondNum : 19

알트 쉬프트 a 한번에 바꿀때 단축키

</br>
</br>

### **비교 연산자**

```
public static void main(String[] args) {

	 /*비교 연산자*/

	 /*비교연산자는 피연산자 사이에서 상대적인 크기를 파악하여 참 혹은 거짓을 반환하는 연산자이다.
	  * 연산자 중 참(true) 혹은 거짓(false)을 반환하는 연산자는 삼항연산자의 조건이나
	  * 조건문의 조건절에 많이 사용된다(고로 충분한 연습이 필요하다)
	  * */

	/*
	 * 비교연산자의 종류
	 *  '==' : 왼쪽의 피연산자와 오른쪽의 피연산자가 같으면 true 다른면 false를 반환
	 * '!=' : 왼쪽의 피연산자와 오른쪽의 피연산자가 다르면 true 같으면 false를 반환.
	 * '>'  : 왼쪽의 피연산자가 오른쪽의 피연산자보다 크면 true 아니면 false를 반환
	 * '>=' : 왼쪽의 피연산자가 오른쪽의 피연산자보다 크거나 같으면 true 아니면 false를 반환
	 * '<'  : 왼쪽의 피연산자가 오른쪽의 피연산자보다 작으면 true 아니면 false를 반환
	 * '<=' : 왼쪽의 피연산자가 오른쪽의 피연산자보다 작거나 같으면 true 아니면 false를 반환
	 * */

	int inum1 = 10;
	int inum2 = 20;

	System.out.println("============정수값 비교===========");
	System.out.println("inum1과 inum2가 같은지 비교 : " + (inum1 == inum2));
	System.out.println("inum1과 inum2가 같지 않은지 비교 : " + (inum1 != inum2));
	System.out.println("inum1이 inum2보다 큰지 비교 : " + (inum1 > inum2));
	System.out.println("inum1이 inum2보다 크거나 같은지 비교 : " + (inum1 >= inum2));
	System.out.println("inum1이 inum2보다 작은지 비교 : " + (inum1 < inum2));
	System.out.println("inum1이 inum2보다 작거나 같은지 비교 : " + (inum1 <= inum2));

	double dnum1 = 10;
	double dnum2 = 20;

	System.out.println("============실수값 비교===========");
	System.out.println("dnum1과 dnum2가 같은지 비교 : " + (dnum1 == dnum2));
	System.out.println("dnum1과 dnum2가 같지 않은지 비교 : " + (dnum1 != dnum2));
	System.out.println("dnum1이 dnum2보다 큰지 비교 : " + (dnum1 > dnum2));
	System.out.println("dnum1이 dnum2보다 크거나 같은지 비교 : " + (dnum1 >= dnum2));
	System.out.println("dnum1이 dnum2보다 작은지 비교 : " + (dnum1 < dnum2));
	System.out.println("dnum1이 dnum2보다 작거나 같은지 비교 : " + (dnum1 <= dnum2));

	char ch1 = 'a';
	char ch2 = 'A';

	System.out.println("============문자값 비교===========");
	System.out.println("ch1과 ch2가 같은지 비교 : " + (ch1 == ch2));
	System.out.println("ch1과 ch2가 같지 않은지 비교 : " + (ch1 != ch2));
	System.out.println("ch1이 ch2보다 큰지 비교 : " + (ch1 > ch2));
	System.out.println("ch1이 ch2보다 크거나 같은지 비교 : " + (ch1 >= ch2));
	System.out.println("ch1이 ch2보다 작은지 비교 : " + (ch1 < ch2));
	System.out.println("ch1이 ch2보다 작거나 같은지 비교 : " + (ch1 <= ch2));

	/* 논리값 비교*/
	/* == 과 !=은 비교 가능하지만 대소비교는 불가능하다.*/
	boolean bool1 = true;
	boolean bool2 = false;

	System.out.println("============논리값 비교===========");
	System.out.println("bool1과 bool2가 같은지 비교 : " + (bool1 == bool2));
	System.out.println("bool1과 bool2가 같지 않은지 비교 : " + (bool1 != bool2));

// System.out.println("bool1이 bool2보다 큰지 비교 : " + (bool1 > bool2));// System.out.println("bool1이 bool2보다 크거나 같은지 비교 : " + (bool1 >= bool2));// System.out.println("bool1이 bool2보다 작은지 비교 : " + (bool1 < bool2));// System.out.println("bool1이 bool2보다 작거나 같은지 비교 : " + (bool1 <= bool2));



	/* 문자열값 비교*/
	/* == 과 !=은 비교 가능하지만 대소비교는 불가능하다.*/
	String str1 = "java";
	String str2 = "java";

	System.out.println("============문자열값 비교===========");
	System.out.println("str1과 str2가 같은지 비교 : " + (str1 == str2));
	System.out.println("str1과 str2가 같지 않은지 비교 : " + (str1 != str2));


// System.out.println("str1이 str2보다 큰지 비교 : " + (str1 > str2));// System.out.println("str1이 str2보다 크거나 같은지 비교 : " + (str1 >= str2));// System.out.println("str1이 str2보다 작은지 비교 : " + (str1 < str2));// System.out.println("str1이 str2보다 작거나 같은지 비교 : " + (str1 <= str2));


}


}

- > ============정수값 비교===========inum1과 inum2가 같은지 비교 : falseinum1과 inum2가 같지 않은지 비교 : trueinum1이 inum2보다 큰지 비교 : falseinum1이 inum2보다 크거나 같은지 비교 : falseinum1이 inum2보다 작은지 비교 : trueinum1이 inum2보다 작거나 같은지 비교 : true============실수값 비교===========dnum1과 dnum2가 같은지 비교 : falsednum1과 dnum2가 같지 않은지 비교 : truednum1이 dnum2보다 큰지 비교 : falsednum1이 dnum2보다 크거나 같은지 비교 : falsednum1이 dnum2보다 작은지 비교 : truednum1이 dnum2보다 작거나 같은지 비교 : true============문자값 비교===========ch1과 ch2가 같은지 비교 : falsech1과 ch2가 같지 않은지 비교 : truech1이 ch2보다 큰지 비교 : truech1이 ch2보다 크거나 같은지 비교 : truech1이 ch2보다 작은지 비교 : falsech1이 ch2보다 작거나 같은지 비교 : false============논리값 비교===========bool1과 bool2가 같은지 비교 : falsebool1과 bool2가 같지 않은지 비교 : true============문자열값 비교===========str1과 str2가 같은지 비교 : truestr1과 str2가 같지 않은지 비교 : false
```

논리연산자|(원화 위에 쉬프트 키 두개 파이프)

논리연산 죽은코드 노란색 밑줄 실행하는데 전혀 문제가 되지 않지만 뒤에 볼 필요가 없다는 뜻</br></br>false가 이미 나왔는데 뒤에 안봐도 된다
</br></br>

### **논리 연산자**

```
public static void main(String[] args) {

	/* 논리 연산자 */
	/* 논리값(true or false)를 취급하는 연산자 */

	/*
	 * 논리 연산자의 종류
	 * 1. 논리 연결 연산자 : 두 개의 피연산자를 가지는 이항 연산자이며, 연산자의 결합 방향은 왼쪽에서 오른쪽이다. 두 개의 논리 식을 판단하여 참과 거짓을 판단한다.
	 *
	 *    1-1. &&(논리 AND) 연산자: 두 개의 논리식 모두 참일 경우 참을 반환, 한개라도 거짓인 경우 거짓을 반환하는 연산자이다.
	 *    1-2. ||(논리 OR) 연산자 : 두 개의 논리식 중 둘 중 하나라도 참일 경우 참을 반환, 둘다 모두 거짓일 경우 거짓을 반환한다.
	 * 2. 논리 부정 연산자 : 피연산자가 하나인 단항연산자로, 피연산자의 결합방향은 왼쪽에서 오른쪽이다.
	 *    1-1. !(논리 NOT) 연산자 : 논리식의 결과가 참이면 거짓을 거짓이면 참을 반환한다.

- \*/

	System.out.println("true와 true의 논리 and 연산 : " + (true && true));
	System.out.println("true와 false의 논리 and 연산 : " + (true && false));
	System.out.println("false와 true의 논리 and 연산 : " + (false && true));
	System.out.println("false와 false의 논리 and 연산 : " + (false && false));

	System.out.println("true와 true의 논리 or 연산 : " + (true || true));
	System.out.println("true와 false의 논리 or 연산 : " + (true || false));
	System.out.println("false와 true의 논리 or 연산 : " + (false || true));
	System.out.println("false와 false의 논리 or 연산 : " + (false || false));

	System.out.println("true의 논리 not 연산 : " + (!true));
    System.out.println("false의 논리 not 연산 : " + (!false));

/*논리식에 논리연산자 활용*/
    int a = 10;
    int b = 20;
    int c = 30;
    int d = 40;

    System.out.println("a가 b보다 작으면서 c가 d보다 작은지 확인 : " + (a<b && c<d));
    System.out.println("a가 b보다 작으면서 c가 d보다 큰지 확인 : " + (a<b && c>d));
    System.out.println("a가 b보다 크면서 c가 d보다 작은지 확인 : " + (a>b && c<d));
    System.out.println("a가 b보다 크면서 c가 d보다 큰지 확인 : " + (a>b && c>d));

    System.out.println("a가 b보다 작거나 c가 d보다 작은지 확인 : " + (a<b || c<d));
    System.out.println("a가 b보다 작거나 c가 d보다 큰지 확인 : " + (a<b || c>d));
    System.out.println("a가 b보다 크거나 c가 d보다 작은지 확인 : " + (a>b || c<d));
    System.out.println("a가 b보다 크거나 c가 d보다 큰지 확인 : " + (a>b || c>d));
}


}->true와 true의 논리 and 연산 : true
true와 false의 논리 and 연산 : false
false와 true의 논리 and 연산 : false
false와 false의 논리 and 연산 : false
true와 true의 논리 or 연산 : true
true와 false의 논리 or 연산 : true
false와 true의 논리 or 연산 : true
false와 false의 논리 or 연산 : false
true의 논리 not 연산 : false
false의 논리 not 연산 : true
a가 b보다 작으면서 c가 d보다 작은지 확인 : true
a가 b보다 작으면서 c가 d보다 큰지 확인 : false
a가 b보다 크면서 c가 d보다 작은지 확인 : false
a가 b보다 크면서 c가 d보다 큰지 확인 : false
a가 b보다 작거나 c가 d보다 작은지 확인 : true
a가 b보다 작거나 c가 d보다 큰지 확인 : true
a가 b보다 크거나 c가 d보다 작은지 확인 : true
a가 b보다 크거나 c가 d보다 큰지 확인 : false
```

</br>
</br>

### **논리 연산자의 우선순위 활용**

```
public static void main(String[] args) {

	/*논리 연산자의 우선순위 활용*/
	/*
	 * 논리 and 연산자와 논리 or 연산자의 우선순위
	 * && : 11순위
	 * || : 12순위
	 * 논리 and 연산자 우선순위가 논리 or 연산자 우선순위보다 높다.
	 * */

	/*1. 1부터 100 사이의 값인지 확인*
	 * 1 <= 변수 <= 100 <-- 이렇게는 사용 못한다.
	 * */

	int num1 = 55;
	System.out.println("1부터 100사이인지 확인 : " + (num1 >= 1 && num1 <= 100));

	int num2 = 166;
	System.out.println("1부터 100사이인지 확인 : " + (num2 >= 1 && num2 <= 100));

	/*2. 영어 대문자인지 확인*/
	char ch1 = 'G';
	System.out.println("영어 대문자인지 확인 : " + (ch1 >= 'A' && ch1 <= 'Z'));

	char ch2 = 'g';
	System.out.println("영어 대문자인지 확인 : " + (ch2 >= 'A' && ch2 <= 'Z'));

	/*대소문자 상관없이 영문자 y인지 확인*/
	char ch3 = 'Y';
	System.out.println("영문자 y인지 확인 : " + (ch3 == 'Y' || ch3 == 'y'));

	char ch4 = 'y';
	System.out.println("영문자 y인지 확인 : " + (ch4 == 'Y' || ch4 == 'y'));

	/*4. 영문자인지 확인*/
	char ch5 = 'f';
	System.out.println("영문자인지 확인 : " + ((ch5 >= 'A'&& ch5 <= 'Z') || (ch5 >= 'a' && ch5 <= 'z')));

	char ch6 = 'F';
	System.out.println("영문자인지 확인 : " + ((ch6 >= 'A'&& ch6 <= 'Z') || (ch6 >= 'a' && ch6 <= 'z')));

}


}

- > 1부터 100사이인지 확인 : true1부터 100사이인지 확인 : false영어 대문자인지 확인 : true영어 대문자인지 확인 : false영문자 y인지 확인 : true영문자 y인지 확인 : true영문자인지 확인 : true영문자인지 확인 : true
```

### **AND 연산과 OR 연산의 특징**

main 컨트롤 스페이스바 2번 엔터

```
public static void main(String[] args) {

	/* AND 연산과 OR 연산의 특징
	 * 논리식 && 논리식 : 앞의 결과가 false이면 뒤를 실행 안한다.
	 * 논리식 || 논리식 : 앞의 결과가 true이면 뒤를 실행 안한다.
	 *
	 * 연산 횟수를 줄이기 위해서는 && 연산의 겨우 앞에 false가 나올가능성이 높은 조건을 작성하고
	 * || 연산의 경우에는 앞에 true가 나올 가능성이 높은 조건을 작성하는 편이 좋다.
	 * */

	int num1 = 10;

	int result1 = (false &&++num1 > 0)? num1 : num1;

	System.out.println("&&실행 확인 : " + result1);

	int num2 = 10 ;

	int result2 = (true || ++num2 > 0)? num2 : num2;

	System.out.println("||실행확인 :" + result2);

}


}

- > &&실행 확인 : 10||실행확인 :10
```

</br></br>

### **삼항 연산자**

```
public static void main(String[] args) {

	/*삼항 연산자*/
	/*자바에서 유일하게 피연산자 항목이 3개인 연산자
	 * (조건식)? 참일 때 사용할 값1: 거짓일 때 사용할 값2
	 *
	 * 조건식은 반드시 결과가 true 또는 false가 나오게 작성해야합니다.
	 *
	 * 삼항연산자는 중첩도 가능하다.
	 *
	 * 주로 비교/논리연산자가 사용된다.
	 * */
	int num1 = 10;
	int num2 = -10;

	String result1 = (num1 > 0)? "양수다" :"양수가 아니다";
	String result2 = (num2 > 0)? "양수다" : "양수가 아니다";
	System.out.println("num1은" + result1);
	System.out.println("num1은" + result2);

	/*삼항연산자 중첩*/
	int num3 = 5;
	int num4 = 0;
	int num5 = -5;

	String result3 = (num3 > 0)? "양수다" : (num3 == 0)? "0이다" : "음수다";
	String result4 = (num4 > 0)? "양수다" : (num4 == 0)? "0이다" : "음수다";
	String result5 = (num5 > 0)? "양수다" : (num5 == 0)? "0이다" : "음수다";

	System.out.println("num3은 " + result3);
	System.out.println("num4은 " + result4);
	System.out.println("num5은 " + result5);
}


}

- > num1은양수다num1은양수가 아니다num3은 양수다num4은 0이다num5은 음수다
```
