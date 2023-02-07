### **1. Embedded type**

새로운 값 타입을 직접 정의해서 사용할 수 있다.<br/>
엔티티에 상세한 데이터를 그대로 가지고 있는 것은 객체지향적이지 않으며 응집력을 떨어뜨린다.

```java
@Entity(name = "EmbeddedMember")
@Table(name = "TBL_MEMBER_SECTION06_SUBSECTION01")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Member {

    private int memberNo;

    private String memberId;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "ADDRESS")
    private String address;

}
```

<br>
- 회원 엔티티는 회원번호, 회원아이디, 연락처, 주소를 가지고 있다.
<br> 이렇게 표현하면 응집력이 떨어지므로 회원 아이디와 회원번호를
임베디드 타입으로 표현 할 수 있다. 
<br><br><br>

```java
@Entity(name = "EmbeddedMember")
@Table(name = "TBL_MEMBER_SECTION06_SUBSECTION01")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Member {

    @Embedded
    private MemberPK memberPK;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "ADDRESS")
    private String address;

}
```

- @Embeddable: 값 타입을 정의하는 곳에 표시
- @Embedded: 값 타입을 사용하는 곳에 표시

<br>

##### 참조 문헌: ORM 표준 JPA 프로그래밍
