### 카프카 프로듀서 어플리케이션

- 프로듀서는 데이터를 카프카에 보내는 역할을 함.
- ex) 많은 양의 클릭 로그들을 대량, 실시간으로 카프카에 적재할때 프로듀서를 사용할 수 있음.

#### 프로듀서 역할
- 데이터를 카프카 토픽에 생산하는 역할
- 특정 토픽으로 데이터를 전송

```
Springboot Kafka Library settings

// gradle
compile group: 'org.apache.kafka', name: 'kafka-clients', version: '2.3.0'

// maven
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>2.3.0</version>
</dependency>

버전 세팅시 브로커 버전과 클라이언트 버전의 호환성 확인필요.
```