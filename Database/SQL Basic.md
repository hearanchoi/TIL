## SQL 기본

---

<br>
<strong>트랜잭션의 특징</strong>
<br>
<br>
고립성 : 
트랜잭션이 실행되는 동안 다른 트랜잭션에 영향을 받아 잘못된 결과를 만들어선 안된다.
<br>
원자성 : 트랜잭션에서 정의된 연산은 모두 성공적으로 실행되던지 아니면 전혀 실행되지 않은 상태로 있어야 한다.<br>
지속성 : 트랜잭션이 성공적으로 완료되면 해당 트랜잭션이 갱신한 데이터베이스의 내용은 영구적으로 저장된다.<br>
일관성 : 트랜잭션 발생 전 데이터베이스 내용에 잘못된 점이 없다면 트랜잭션 수행 후에도 데이터베이스의 내용에 잘못이 있으면 안된다. <br>
<br>
<br>
<strong>DML - SELECT문 기본 구조</strong><br>
<br>

```sql
SELECT  컬럼명 등
FROM    테이블명
WHERE   조건문
GROUP BY 집계기준컬럼명 (카운트 등)
HAVING  grouping된 후 상태 기반의 조건문 (집계기반의 조건문)
ORDER BY 컬럼명 (정렬해주는 기준)
```

<br>
DISTINCT : 중복 값 없이 가져오는 것 
<br> NULL도 단일행으로 본다 .<br>
DISTINCT 성별, 연령대 <br>
성별과 연령대 조합중에서 중복을 제거하고 보여준다
<br>
COUNT(*): 전체 행 count null 포함 <br>
COUNT(성별 ) : nill제외하고 센다 <br>
<br>
<br>
<strong>문자형 함수</strong><br>
<br>
<br>LOWER/UPPER(문자열): 영어 문자열을 소문자/ 대문잘로 변환<br>
CONCAT(문자열1, 문자열2) : 문자열1과 문자열2를 결합 <br>
SUBSTR(문자열, m, n) : 문자열에서 m번째 자리값부터 n개를 자른다.<br>
SUBSTR('KATE',2,2) >> AT<br>
LENGTH(문자열) = LEN(문자열): 공백을 포함하여 문자열 길이값 <br>LEN('가 나다')>> 4
<br>
TRIM(문자열, 제거대상) : <br>TRIM('aaabcaa', 'a') 왼쪽과 오른쪽에서 지정된 문자를 삭제한다 >> bc<br>
TRIM(' aabcaa ', ) : 지정된 문자가 없으면 공백을 제거한다,. >> aabcaa<br>
LTRIM/RTRIM : 왼쪽/오른쪽에서부터 지정된 문자를 삭제한다<br>
<br>
<br>
테이블에서 이름만 대문자로 조회할때 <br>

```sql
SELECT  회원코드 , UPEER(이름)
FROM C_INFO

-WHERE문에도 함수 들어갈 수 있고 JOIN등과 결합한 문제 출제 가능

SELECT  table_q B, table_2 C
WHERE UPPER(B.col1)LIKE C.col1

```

<br>
<br>
<strong>숫자형 함수</strong><br>
ROUND(숫자, 소수점 자릿수 ) : 반올림 ROUND(25.3434, 2) >>25.34
 <br>TRUNC(숫자, 소수점 자릿수 ) : 버림 TRUNC(25.3567, 2) >> 25.35<br>
 CEIL(숫자) : 크거나 같은 최소 정수 반환 CEL(33.5) >> 34<br>
 FLOOR(숫자) : 작거나 같은 최소 정수 반환 FLOOR(33.5) >> 33<br>
 MOD(분자,분모) : 분자를 분모로 나눈 나머지 반환 MOD(3,2) >> 1<br>
 SIGN(숫자) : 숫자가 양수면1, 0이면 0, 음수면 -1 반환<br>
 ABS(숫자) : 절댓값<br>
 <br>ㅇ
 <strong>날짜형 함수</strong><br>
 SYSDATE : 현재 날짜 &시각 출력 <br>
 EXTRACT(정보 FROM 날짜) :<br> 날짜형 데이터에서 원하는 값을 추출함 EXTRACT( YEAR FROM date '2022-01-31') >>> 2022 <br>EXTRACT(YEAR FROM SYSDATE) 와 TO_NUMBER(TO_CHAR(sysdate, 'YYYY')) 는 동일한 결과
<br><br>
 <strong>명시적/ 암시적 변환</strong><br>
 TO_NUMBER(문자열) : 문자열을 숫자로 변환<br>
 TO_CHAR(숫자 or 날짜, 포맷) : <br>숫자 혹은 날짜형 데이터를 포맷에 맞게 문자로 바꿈 TO_CHAR(date '2022-02-11','day') >>> '금요일'<br>
 TO_DATE(문자열, 포맷) TO_DATE('20220113120', 'YYYYMMDDHH24') >>> 2022/01/31 20:00:00
