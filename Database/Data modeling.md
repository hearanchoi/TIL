# 목차

- [개념적 모델링](#개념적-모델링)

<br>
<br>

## 개념적 모델링

---

<br>
<strong>엔티티</strong>
<br>
<ol>
<li>정보를 발견하고 다른사람에게 표현할 수 있게한다.</li>
<li>서로 연관된 정보를 그룹핑하여 인식해서 다른사람에게 표현할 수 있다.</li>
<li>정보 그룹사이의 관계를 인식하고 현실로부터 개념을 인식하게하여 다른사람에게 표현할 수 있게한다.</li>
</ol>
<br>
<strong>다운 개념의 구조</strong><br>
거대 단일 테이블로 표현을 하면 중복이 발생한다.
<br>
<br>
<strong>erd diagram</strong><br>
□ Entity     -> Table<br>
○ Attribute  -> Column<br>
◇ Relation -> PK,FK<br>
Tuple -> Row (행)
<br>
<br>

엔티티 -? 네모(ex 글)로 표현한다<br><br>
속성은 원 ( ex 제목, 작성일, 본문 )<br><br>
식별자 에는 밑줄!!<br> (식별자는 고유번호같이 중복되지 않는 값으로 지정한다. 인조키는 자연스럽게 식별자가 될 수 없어서 인조로 생성한 번호를 지정한 키를 말한다. )<br>
프라이머리 키 primary key : 후보키 (candidate key) 중에 정해진 키 <br>
alternate key 대체키: 후보키중에 나머지키 <br>
중복키 composite key : 하나의키로 식별할 수 없을 때 동시에 두개로<br>

관계 relationship ->마름모로 표현 <br> ex) 작성당하다 <br>
글은 저자로부터 쓰여짐 당하다 <br>
소속하다 글은 댓글을 포함한다
<br>
<br>
<strong>Cardinality</strong>
각 선생님은 한반만 담임한다
각반의 담임은 한명이다 -> 1:1 관계 □-□

각 저자는 여러 글을 작성한다
각 댓글은 하나의 저자만 존재한다 -> 1:N 관계
□-<□

각 저자는 여러글을 작성한다
각 글은 여러 저자가(참여)존재한다
□>-<□ -> N:M관계 <br>
<br>
<strong>Optionality</strong> <br>
저자는 댓글을 작성하지 않을수도 있다
(댓글은 옵션이다) => optional = ○ <br>
각 댓글은 반드시 저자가 있다(댓글에게 저자는 필수다) => Mandatory = | <br>
□|-○<□ : 저자는 여러개 댓글을 가질수 있지만 댓글이 필수는 아니구나! 댓글은 저자를 필수로 하는구나 저자는 한명이구나라고 해석할 수 있다.

[Entity Relationship Diagram Helper](erd.yah.ac)
<br>
