## Spring Web Layer

### Web Layer
    - @Controller, JSP/Freemaker 등의 뷰 템플릿 영역

### Service Layer
    - @Service에 사용되는 서비스 영역
    - 일반적으로 Controller와 Dao의 중간영역에서 사용됨
    - @Transactional이 사용되야하는 영역

### Repository Layer
    - DB와 같이 데이터 저장소에 접근하는 영역

### Dtos
    - Dto는 계층 간에 데이터 교환을 위한 객체를 의미하며, Dtos는 이들의 영역을 의미함.

### Domain Model
    - 도메인이라 불리는 개발 대상을 모든 사람이 동일한 관점에서 이해할 수 있고 공유할 수 있도록 단순화시킨 것을 도메인 모델이라함.
    - 비즈니스 처리를 담당해야 하는 곳
