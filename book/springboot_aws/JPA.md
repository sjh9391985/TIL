## JPA

### JPA의 목적
    -  서로 지향하는 바가 다른 2개 영역을 중간에서 패러다임 일치를 시켜주기 위한 기술
    - 개발자는 객체지향적으로 프로그래밍을 하고, JPA가 관계형 데이터베이스에 맞게 SQL을 대신 생성해서 실행함.

### Spring Data JPA
    - 자바 표준 명세서, 인터페이스
    - 인터페이스 사용을 위한 구현체는 Hibernate, Eclipse Link 등이 있음.
    - Spring JPA 사용시 위와 같은 구현체를 사용하지 않음.
    - Spring Data JPA라는 모듈을 사용해서 JPA 기술을 사용 (JPA <- Hibernate <- Spring Data JPA)
    - Hibernate를 사용하는것과 Spring Data JPA를 사용하는것은 큰 차이가 없지만 후자를 사용하는것을 권장함.
    
#### Spring Data JPA가 등장한 이유
    * 구현체 교체의 용이성
        - Hibernate외에 다른 구현체로 쉽게 교체하기 위함
        - Hibernate 의 수명이 다할 경우 다른 JPA 구현체로의 교체가 쉬움

    * 저장소 교체의 용이성
        - 관계형 데이터베이스 외에 다른 저장소로 쉽게 교체하기 위함

### 프로젝트 적용
```
build.gradle

dependencies {
    implemention('org.springframework.boot:spring-boot-starter-data-jpa')
    implemention('com.h2database:h2)
}
```
- spring-boot-starter-data-jpa: 스프링 부트용 Spring Data Jpa 추상화 라이브러리
- h2 DB: 인메모리 관계형 데이터베이스, 별도 설치 필요 X