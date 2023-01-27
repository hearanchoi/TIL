# 복합키 @IdClass @EmbeddedId

### PK가 여러개일 때 엔티티를 작성할 수 있게 JPA는 @IdClass와 @EmbeddedId 두가지 방식을 제공한다.

<br>

```java
@Entity(name = "EmbeddedMember")
@Table(name = "TBL_MEMBER_SECTION06_SUBSECTION01")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Member {


//    private int memberNo;
//
//    private String memberId;

    @EmbeddedId
    private MemberPK memberPK;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "ADDRESS")
    private String address;

}
```

```java
@Embeddable // 복합키 타입을 지정할 때 사용하는 어노테이션
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MemberPK implements Serializable {

    @Column(name = "MEMBER_NO")
    private int memberNo;

    @Column(name = "MEMBER_ID")
    private String memberId;


}
```

1.  @Embeddedable : @Embeddable 클래스에 복합키를 정의하고 엔티티에 @EmbeddedId를 이용해 복합키 클래스를 매핑한다.

- 이때 @Embedded 클래스는 영속성 컨텍스트가 관리하는 엔티티는 아니다.
- 주의할 점은 복합키를 정의한 클래스는 직렬화 처리가 되어 있어야 한다.

2.  @IdClass : 복합키를 필드로 정의한 클래스를 이용해 엔티티 클래스에 복합키에 해당하는 필드에 @Id를 매핑한다.

- 주의할 점은 복합키를 정의한 클래스는 직렬화 처리가 되어 있어야 한다.

3. 두 방식 모두 복합키 클래스는 영속성 컨텍스트가 관리하지 않는다는 특징을 가지고 있다. 별다를 차이도 존재하지 않는다.

- 다만 @Embeddedable은 조금 더 객체지향 다운 방법이고, @IdClass는 관계형 데이터베이스에 가까운 방법이다.
