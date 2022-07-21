## Logback

### Logback 개념

- SLF4J의 구현체
- Log4J를 토대로 만든 프레임워크

### Logback 구조

- logbakc-core: 다른 두 모듈을 위한 기반 역할을 하는 모듈. Appender와 Layout 인터페이스가 이 모듈에 속함
- logback-classic: logback-core를 가지며 SLF4J API를 구현. Logger 클래스가 이 모듈에 속함
- logback-access: Servlet container와 통합되어 HTTP 액세스에 대한 로깅 기능ㅇ을 제공, 웹 어플리케이션 레벨이 아닌 컨테이너 레벨에서 설치되어야 함

### Logback 설정요소

- Logger : 어떻게 기록할지?, 실제 로깅을 수행하는 구성요소 (출력 레벨 조정 : TRACE < DEBUG < INFO < WARN < ERROR )
- Appender : 로그 메시지가 출력할 대상 결정 (ConsoleAppender, FileAppender, RollingFileAppender)
- Layout : Encoder(Layout) Appender에 포함, 사용자가 지정한 형식으로 표현 될 로그 메시지를 변환하는 역할
- 테스트 개발환경시 Info 레벨은 console에, 프로덕션 환경에서는 Info, Warn, Error 레벨 별 로그를 파일로 남김
