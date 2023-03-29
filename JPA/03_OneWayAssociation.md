# 단방향 연관관계

- 방향: 회원->팀 처럼 한쪽 방향만 참조하는 것은 단방향 관계, 팀->회원,회원->팀 처럼 양쪽방향을 모두 참조하는 것을 양방향 관계라고 한다.

</br>

- 다중성 : 여러 회원이 한 팀에 속하는 것은 다대일 관계 한팀에 여러회원이 속하는 것을 일대다 관계라고 한다.

</br>

- 연관관계의 주인: 객체를 양방향 연관관계로 만들면 연관관계의 주인을 만들어야 한다.

</br>

### 객체 연관관계와 테이블 연관관계의 큰 차이

</br>
객체간에 연관관계를 양방향으로 만들고 싶으면 반대쪽에도 필드를 추가해서 참조를 보관해야한다.(서로 다른 단방향 관계 2개) 반면에 테이블은 외래 키 하나로 양방향으로 조인할 수 있다.
</br>
</br>
<strong> 객체 그래프 탐색 :</strong> 참조를 사용해서 연관관계를 탐색할 수 있다.

<strong> JOIN :</strong> 외래키를 사용해서 데이터 베이스는 연관관계를 탐색할 수 있다.

</br>
</br>

### <strong> 객체 관계 매핑 </strong>

```java
@Entity(name = "ManyToOneMenu")
@Table(name = "TBL_MENU")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Menu {

    @Id
    @Column(name = "MENU_CODE")
    private int menuCode;

    @Column(name = "MENU_NAME")
    private String menuName;

    @Column(name = "MENU_PRICE")
    private int menuPrice;

    @JoinColumn(name = "CATEGORY_CODE")
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;

    @Column(name = "ORDERABLE_STATUS")
    private String orderableStatus;

```

```java
@Entity(name = "ManyToOneCategory")
@Table(name = "TBL_CATEGORY")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Category {

    @Id
    @Column(name = "CATEGORY_CODE")
    private int categoryCode;

    @Column(name = "CATEGORY_NAME")
    private String categoryName;

    @Column(name = "REF_CATEGORY_CODE")
    private Integer refCategoryCode;

```

     @JoiunColumn : 외래키를 매핑할 때 사용한다.
    * name - 매핑할 외래키 이름(기본값 : 필드명 + _ + 참조하는 테이블의 기본키 컬럼명)
    * referenceColumnName : 외래키가 참조하는 대상 테이블의 컬럼명(참조하는 테이블의 기본키 컬럼)
    * foreignKey : 외래키 제약조건을 직접 지정할 수 있다. 이속성은 테이블을 생성할 때만 사용한다.


    * @ManyToOne
    * - 다대일 관계에서 사용한다.
    * optional : false로 설정하면 연관된 엔티티가 항상 있어야한다.
    * fetch : 글로벌 패치 전략을 설정한다.
    * cascade : 영속성 전이 기능을 사용한다(연관된 엔티티와 함께 영속성으로 관리)
    * targetEntity : 연관된 엔티티의 타입 정보를 설정한다. 이 기능은 거의 사용하지 않는다.(제네릭으로 타입 정보를 알 수 있음)
    * orphanRemoval: true로 설정하면 고아객체 제거
