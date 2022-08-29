### Burrow

- kafka lag을 효과적으로 모니터링하기 위한 도구

#### Burrow의 3가지 특징

1. 멀티 카프카 클러스터 지원

    - 대부분 2개 이상의 카프카 클러스터를 운영하고 있음.
    - 카프카 클러스터들에 붙은 컨슈머의 lags 을 모두 모니터링 가능함.


2. Sliding window를 통한 consumer의 status 확인.
    - 컨슈머 상태를 'ERROR', 'WARNING', 'OK' 로 표현할 수 있도록 함.
    - consumer offset이 증가되고 있으면 WARNING 표시됨.
    - 데이터양이 많아지고 있는데 consumer가 데이터를 가져가지 않는다면 ERROR로 정의함.

3. HTTP api 제공
    - burrow에 정의한 HTTP api를 통해 조회할 수 있도록 함.
    