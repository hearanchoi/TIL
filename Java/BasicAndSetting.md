# 목차

- [프로그래밍 기초](#프로그래밍-기초)
- [자바버전](#자바버전)
- [JDK 설치방법](#jdk-설치방법)
- [JAVA 설치확인](#java-설치-확인)
- [JAVA 예약어 만들기](#java-예약어-만들기--시스템변수---새로만들기)
- [Eclipse 설치](#eclipse-설치)
- [자바 개발환경 만들기](#자바-개발환경-만들기)
- [Eclipse 환경 설정](#eclipse-환경-설정)
- [깃랩으로 코드 가져와서 활용하기](#깃랩으로-코드-가져와서-활용하기)
- [기호이름](#기호이름)
- [맥북 이클립스 단축키](#맥북-이클립스-단축키)
- [맥에서 이클립스 창 2개 띄우기](#맥에서-이클립스-창-2개-띄우기)

<br>
<br>

### **프로그래밍 기초**

<br>
프로그램 - 컴퓨터가 인식할 수 있는 명령어의 나열(집합)

프로그래밍 = 프로그램을 작성하는 과정 = 코딩
<br>
tiobe 사이트 순위 => 프로그램 언어 많이 쓰이는 순위

[TIOBE Index - TIOBE](https://www.tiobe.com/tiobe-index/)
<br><br>
자바 = 객체지향언어, 운영체제에 독립적, 다른 언어의 단점(포인터, 메모리관리)을 보완함,오픈소스가 풍부함,

멀티쓰레드 환경을 제공
<br><br>
run time : 프로그램을 실행하는 실시간 환경
<br><br>
JVM : 자바를 실행하기 위한 가상기계 : 어느 운영체제에서도 사용가능하게함

JRE : 자바 소스코드 돌아갈수 있음

JDK : 프로그램 자바 개발 키트 JDK설치하면 JRE,JVM도 같이 설치됨(JDK ⊃ JRE ⊃ JVM)
<br><br>
IDE 통합개발환경( 메모장, atom, visual studio(VScode) , eclipse, intelij 등)

idea 라고도 부름
<br><br>
개발 글꼴 추천ㄱ

네이버 개발 폰트 D2 codingJetbrains 폰트 mono NL 레귤러 ->숙달되면 nl 없는 버전
<br><br>
글꼴 설치 및 삭제방법 ㄱ

알집보다는 반디집 사용 권장 -> 압축해제후 -> ttf 마우스 오른쪽 -> 모든 사용자용 설치삭제 : 윈도우에 글꼴 검색 후 원하는 폰트 삭제
<br><br>
🌟CMD창 (명령 프롬프트)

cls 창 깨끗해짐 (맥에서는 command K) d: d드라이브로 이동 c: c드라이브로 이동

dir(윈도우), ls(맥) 현재 폴더에 뭐가있는지 디렉토리

cd.. 한단계 뒤로 cd. 현재경로 cd H+탭키 뒤에 탭으로 자동완성
<br><br>

### **자바버전**

JAVA SE : 소스코드에 대한 내용만 사용가능

JAVA EE : 소스코드에 서버지원까지 가능 EE추천

JAVA 개발 프로그램은 Oracle JDK와 open JDK 가 있음

오라클은 유료 라이선스 ! 학원에서 사용할 프로그램은 open jdk 11ver. 사용

JAVA 프로그램 최신버전에 대한 내용들을 사이트 들어가서 정기적으로 체크
<br><br>

### **JDK 설치방법**

윈도우

구글 검색 -> openJDK 11 github -> 밑에 내려서 11ver. msi 로 설치

맥

구글검색 -> homebrew -> 설치 명령어 복사 후 터미널 입력 → 맥북 password 입력 → return키

→**brew install cask 설치→** `brew install --cask adoptopenjdk/openjdk/adoptopenjdk11` →

맥북 password 입력
<br><br>

### **JAVA 설치 확인**

cmd창(터미널) 켜서 java -version 으로 버전 체크하기

- cmd 창 켜는법 (명령 프롬프트 검색, 윈도우+R 키 cmd검색 )ㄴ 컨트롤 +마우스 휠로 창크기 키우고 줄일수 있음
- 파일탐색기 (윈도우 +E 키) 에서 내 pc -> 오른쪽 마우스 -> 속성 -> 시스템 보호> 고급 -> 환경변수 -> 시스템변수(S) 에서 path클릭 -> 맨밑줄을 지울시cmd창에서 java 버전 체크시 실행할수 있는 프로그램이 아니라고 뜸.bin까지의 경로가 잘 되어있는지 체크
- 실행할수 없는 파일 / 다른버전을 사용하고 싶을 경우 : 맨밑줄에 경로+ 역슬래시bin 입력
  <br><br>

### **java 예약어 만들기** : 시스템변수 - 새로만들기

변수이름 JAVA_HOME

변수값 ojdk build 11까지 눌러서 확인 저장

시스템 변수 path 에서 예약어 실행 %JAVA_HOME%\bin 으로 대체가능

%~%는 예약어를 사용하겠다는 표시
<br><br>

### **eclipse 설치**

다운로드 패키지 -> 2022-03(4.23)-> 웹도사용하기위해 enterprise 버전으로 설치맥은 cpu에 따라 인텔 = x86-64 m칩 = AArch64 EE Developer 설치

맥북은 다운받아서 앱을 파일로 끌어야 설치
<br><br>

### **자바 개발환경 만들기**

1. 바탕화면에 workspace 폴더 만들기
2. HelloWorld.java 파일생성하기

메모장에

public class HelloWorld {

```
public static void main(String[] arags) {
     System.out.println("Hello World");
}

```

}

작성후 다른이름으로 저장 -> HelloWorld.java / 확장자 모든파일 (workspace 폴더에)

3.cmd 창 열기 ( 윈도우+R키)

4.work space 경로 찾아가기=> C:\ > cd workspace

5.compile 하기=> C:\workspace > javac HelloWorld.java

6.실행하기=> C:\workspace > java HelloWorld
<br><br>

### **Eclipse 환경 설정**

1. 돋보기 옆 표 모양에서 Java로 변경

윈도우면 폰트도 변경하면 편함 맥은 상관없음 / 테마도 설정ㄴ 폰트는 general - appearance - colors and fonts -basic

- 밑에 텍스트 에디터/ 텍스트 폰트 둘다 변경 후 applyWindow (맥은 Eclipse) > preferences > general > workspace utf-8general - editors - text editors - spelling - encoding utf-8

1. project 만들기

빈곳에 마우스 우클릭 - new - project - java project - next 프로젝트 네임에 firstProject - JRE - JAVA SE - 11 로 변경후 finish

3.class 만들기

src폴더 우클릭 -> new -> class -> name: HelloWorld -> public 확인후finish

4.class 작성

package firstProject;

public class HelloWorld {

```
public static void main(String[] args) {

	System.out.println("Hello World");
}
```

}컨트롤 + f11키 누르면 아래 console 화면에 Hello World 확인

consloe 화면은 윈도우 show view - console 로 꺼내기
<br><br>

### **깃랩으로 코드 가져와서 활용하기**

gitlab.com(토큰 2023-12-20)- 구글계정으로 로그인 - 그룹 2022angel- clone-https 클립보드 복사 - eclips 새로 열어서 환경설정 - import project-Git - projects from Git (with smart import)- next - clone url- next

- user : 구글계정 이메일주소 pass : 깃랩 토큰 키 값 - store in secure store 체크박스 체크표시 - next \*3 - no - finish

우클릭 - team- 첫번째 pull 로 소스 가져올수 있음
<br><br>

### **기호이름**

☑ : 체크박스 여러개중에 여러개 선택가능🔘 : 라디오버튼 여러개중에 한개 선택가능
<br><br>

### **맥북 이클립스 단축키**

content assist : option + space

저장 : command + s

클래스 실행 : fn + command + f11

한줄 복사 command option 방향키
<br><br>

### **맥에서 이클립스 창 2개 띄우기**

터미널에 open -n /Applications/Eclipse.app
_파일이 존재하지 않는다고 할시_
open -n -a "Eclipse” 로 열면 됨
