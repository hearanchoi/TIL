SQL(Structured Query Language): 데이터 베이스를 직접적으로 엑세스 할 수 있는 언어

DBMS : 데이터베이스 관리 시스템
DDL(Data Definition) : 데이터를 정의(생성, 삭제)
DML (Data Maninpulation): 데이터 조작 (수정, 업데이트 , 삭제, 추가 등)
DCL(Data Control): 데이터 접근 권한, 커밋 , 롤백(transaction control)

SQLD(50문항)

1. 데이터 모델링의 이해

2. SQL 기본 및 활용

Oracle XE버전은 4GB메모리와 데이터파일까지는 무료로 사용할 수 있다.

DCL : 데이터베이스 사용자에게 권한을 부여/회수하는 언어<br/>

<기본문법><br/>

```sql
GRANT 권한
  ON  테이블
  TO  유저;
 (GRANT의 옵션)
 TO 유저
 WITH GRANT OPTION;
 >> 특정 사용자에게 권한을 부여가능한( 수정 ) 권한을 부여함
  >> 단, 엄마가 회수될 때 자식도 회수됨

   TO 유저
 WITH ADMIN OPTION;
 >> 테이블에 대한 모든 권한 부여
  >> 엄마의 권한 회수는 나랑 상관 없음


문제풀이 )

유저 hoho에게 권한 부여하기 (WHERE 조건문도 사용가능하게 하기
위해서 SELECT 권한도 부여했다. )
GRANT SELECT,UPDATE
ON hoho-qualification.data
TO hoho ;


  REVOKE 권한
  ON  테이블
  FROM  유저;

```

ROLE : 다양한 권한을 하나의 그룹으로 묶어서 관리할 수 있도록 하는 논리적인 권한의 그룹 (명령어)<br/>
데이터베이스 상에서 많은 사용자들에게 개별적으로 권한을 부여하고 관리하기 어렵기 때문 (다양한 권한을 다양한 유저를 대상으로 관리하기 위한 명령어 ), 여러 사용자에게 동일한 ROLL 부여 가능하다. ROLE의 생성은 [CREATE ROLE] 권한을 가진 유저가 할 수 있다.

<br/>

DDL : 데이터를 보관하고 관리하기 위한 객체의 구조를 정의하기 위한 언어 <br/>
CREATE TABLE 테이블명 ( <br/>
컬럼명 시작만 문자로 해야함 <br/>
데이터 타입 <br/>
varchar2 : 가변길이 문자열<br/>
char: 고정된 크기 문자열 할당된 길이만큼 문자 채움 <br/>(10바이트면 2바이트 들어와도 다 채움
)<br/><br/>
제약조건<br/>
default : 기본값 지정<br/>
PK : 기본키 (NOT NULL, Unique값 테이블 내 중복 없음)<br/>
foreign key : 외래키<br/>

유효한 튜플 값 : 정상적으로 값이 들어가는 값, 공간 <br/>

COUNT(\*) : 전체 행의 수 카운트 null 포함<br/>
COUNT(컬럼명) : null 제외한 행 수 카운트 <br/>
<br/>
NULL은 모르는 값을 상징하고, 값이 없음(부재)을 의미한다<br/>
NULL IS NULL = TRUE (NULL은 식별어 IS를 쓴다)<br/>
NULL과의 모든 비교는 알수 없음을 반환함 더하기도 마찬가지!<br/>
숫자 0이나 공백문자('')와 동일하지 않음 (얘네는 값이 있음)<br/>
<br/>
ALTER : 테이블과 컬럼에 대해 이름 및 속성 변경, 추가/삭제 등 구조 수정을 위해 사용! <br/>
테이블명 변경 : ALTER TABLE MENU RENAME TO ho_MENU;<br/>
메뉴를 호메뉴로 변경<br/>
컬럼명변경 : ALTER TABLE MENU RENAME COLUMN phone TO 전화번호 <br/>
다수의 테이블명 동시 변경가능 : RENAME TABLE MENU TO ho_MENU;<br/>
컬럼 속성 변경 : ALTER TABLE MENU MODIFY(이름 varchar(20) not null);<br/>
컬럼 추가 : ALTER TABLE MENU ADD (거주지역 varchar(10));<br/>
컬럼 삭제 : ALTER TABLE MENU DROP COLUMN 이름 ;<br/>
제약조건 추가/삭제 : <br/>ALTER TABLE MENU ADD CONSTRAINT;<br/>ALTER TABLE MENU DROP CONSTRAINT;<br/><br/>

(phone 컬럼에 not null 제약조건 추가 sql 문장)<br/>
ALTER TABLE RIDING MODIFY (phone varchar(15) not null) ;<br/>
<br/>
DROP : 테이블 및 컬럼 삭제 <br/>
<br/>
테이블 삭제 : DROP TABLE MENU;<br/>
DROP TABLE MENU CASCADE CONSTRAINT; <br/>

> > 해당 테이블의 데이터를 외래키로 참조한 제약사항도 모두 삭제<br/>
> > Oracle에만 있는 옵션 sql server에는 존재하지 않음 <br/>
> > fk제약조건과 참조테이블 먼저 삭제하고, 해당 테이블을 삭제한다 <br/>

테이블 초기화 : TRUNCATE TABLE MENU 테이블의 구조만 남고 내용만 초기화 됨 뼈대만 남는다 .. <br/>

DML : 정의 된 데이터 베이스에 레코드를 입력하거나 수정, 삭제 및 조회하기 위한 명령어 <br/>

<br/>
INSERT : INSERT INTO 테이블명 (컬럼명) VALUES (값);<br/>
UPDATE : UPDATE 테이블명 SET 컬렴명 = 값 (where 조건문 );<br/>
DELETE : DELETE FROM 테이블명 (where 조건문);<br/>
(FROM 생략가능)<br/>
ㄴ 삭제된 데이터에 대해 로그를 남길 수 있는 방법이며 삭제된 데이터를 다시 되돌릴수 있다. <br/>데이터는 삭제되지만 용량이 줄어들지 않는다. <br/>특정행만 조건문으로 삭제할 수 있다 .<br/>

<br/><br/>
TCL : 트랜젝션을 제어하기 위한 언어<br/>

출처 : 인프런 SQL 개발자 (SQLD) 자격증 따기

유튜브 메타코드M SQLD 자격증 문제 풀이 2시간
