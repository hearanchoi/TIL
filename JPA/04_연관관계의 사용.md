# 연관관계의 사용

- 등록, 수정, 삭제, 조회

<br/>

## 저장(등록)

_JPA를 저장할 때 연관된 모든 엔티티는 영속 상태여야 한다._

```java
public void testSave(){

    // 팀1 저장
    Team team1 = new Team("team", "팀1");
    em.persist(team1);

    //  회원 1 저장
    Member member1 = new Member("member1", "회원");

}
```

## 조회

연관관계가 있는 엔티티를 조회하는 방법
<br/>

- 객체 그래프 탐색(객체 연관관계를 사용한 조회)
- 객체지향 쿼리 사용 JPQL

객체 그래프 탐색

```java

member.getTeam()을 사용해서 member와 연관된 team 엔티티를 조회할 수 있다.

Member member = em.find(Member.class, "member1");
Team team = member.getTeam(); // 객체 그래프 탐색
System.out.println("팀이름 = " + team.getName());

//출력 결과 : 팀이름 = 팀1
```

객체지향 쿼리 사용 JPQL

```java
private static void queryLogicJoin(EntityManager em){

    String jpql = "select m form Member m join m.team t where " +
    "t.name=:teamName";

    List<Member> resultList = em.createQuery(jpql, Member.class)
    .setParameter("teamName", "팀1");
    .getResultList();

    for(Member member : resultList ) {
        System.out.println("[query] member.username=" +
        member.getUsername());
    }
}

// 결과:[query] member.username=회원1
// 결과:[query] member.username=회원2
```

JPQL의 from Member m join m.team t 부분을 보면 회원이 팀과 관계를 가지고 있는 필드 (m.team)를 통해서 Member와 Team을 조인했다. 그리고 where절을 보면 조인한 t.name을 검색조건으로 사용해서 팀1에 속한 회원만 검색했다.
