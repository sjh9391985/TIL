## logging (springboot SLF4J & Logback)

### 로깅의 정의

- 프로그램 동작시 발생하는 모든 일을 기록하는 행위
- 모든일을 하기 위한 최소한의 목적(서비스 동작 상태: 시스템로딩, HTTP 통신, 트랜잭션, DB요청 등.. // 장애:IOException, InputException 등.. )

### 언제 로깅을 사용하는가

- 기존의 개발과정은 출력문을 사용하여서 기능을 개발하였는데, 여러가지 기능을 테스트 할 경우 테스트 코드를 활용하며 테스트 동작 시 배포를 진행
- 로깅의 시점은 요구사항에 따라 다름

### 어떻게 로깅을 사용하는가

- 출력문(System.out.print/ System.err.print)는 로그를 남길때 가장 쉬운 방법
- 로깅 프레임워크(SLF4J, Logback, Lof4j, nlog )

### 출력문, 로깅 framework 차이점

- 출력 형식을 지정할 수 있음
- 로그 레벨이 따라 남기고 싶은 로그를 별도로 지정할 수 있음
- 콘솔뿐 아니라, 파일이나 네트워크 등 로그를 별도의 위치에 남길 수 있음

### 로그레벨

- Fatal: 매우 심각한 에러, 프로그램이 종료되는 경우가 많음.
- Error: 의도하지 않은 에러가 발생한 경우, 프로그램이 종료되지는 않음.
- Warn: 에러가 될 수 있는 잠재적 가능성이 있는 경우
- Info: 명확한 의도가 있는 에러, 요구사항에 따라 시스템 동작을 보여줄때 사용.
- Debug: Info레벨보다 더 자세한 정보가 필요한 경우. Dev 환경
- Trace: Debug 레벨보다 더 자세함. Dev 환경에서 버그를 해결하기 위해 사용. (최종 프로덕션, 커밋에 포함되면 안됨)

### 로깅과 디버깅의 차이점

- 예외상황을 가장 잘 파악할 수 있는 것은 디버깅
- 프로그래밍의 절반은 디버깅
- 디버깅을 할 수 없는 상황에선 로깅이 최선의 선택 (실제 서버 구동중)

### SLF4J

- Simple Logging Facade for Java
- 다양한 로깅 프레임 워크에 대한 추상화 역할 
- 추상 로깅 프레임워크이기 때문에 단독으로 사용 불가능
- 최종 사용자가 배포시 원하는 구현체를 선택

### SLF4J 동작과정

- 개발시, SLF4J API를 사용해서 로깅 코드를 작성
- 배포시, 바인딩된 Logging Framework가 실제 로깅을 수행하는 과정을 거침

- Bridge: 다른 로깅 API로의 Logger 호출을 SLF4J API로 연결, 이전 레거시 로깅 프레임워크를 위한 라이브러리로 여러개 사용가능, Bridge와 Binding 모듈의 같은 종류의 프레임워크와 다름

- API 모듈: 로깅에 대한 추상 레이어(인터페이스) 제공, 하나의 API 모듈에 하나의 Binding 모듈

- Binding: SLF4J API를 로깅 구현체와 연결, 하나의 API 모듈에 하나의 Binding 모듈

- 로그 레벨 중 trace는 기본적으로 debug로 잡혀있음