### table join 이해

#### join 사용이유

- 여러 테이블로 나뉘어진 데이터를 조회하기 위해 사용

#### join 작성방법

1. 어떠한 테이블과 join 할 것인가?
2. 해당 테이블과 어떠한 연관이 있는가?
3. 조인 대상 테이블 from 절에 작성
4. 관계가 있는 컬럼을 on, where 절에 작성

#### 1. Inner Join

- 기준이 되는 테이블과 join이 걸리는 테이블 양쪽 모두에 matching 되는 row만 조회(교집합)

#### 2. Left Join

- 기준이 되는 테이블의 모든 row와 join이 걸리는 테이블중 left table과 matching 되는 row만 조회

#### 3. Right Join

- 기준이 되는 테이블의 모든 row와 join이 걸리는 테이블중 right table과 matching 되는 row만 조회

#### 4. Full Outer Join (Cross Join)

- 기준이 되는 테이블과 join이 걸리는 테이블 양쪽 모두의 모든 row를 조회

#### on

- where 절에서 사용할 수 있는 모든 조건을 사용이 가능

```

select s.*, p.name from Subject s inner join Prof p on s.prof = p.id;

select s.name,s.birth
from Enroll e inner join Student s on e.student = s.id
              inner join Subject sbj on e.subject = sbj.id
where sbj.name = '역사';
```
