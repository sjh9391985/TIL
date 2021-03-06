<h1>이더리움 백서</h1>

<h3>이더리움 백서의 개요</h3>

1. 백서의 역사

   - 2013년 이더리움 백서 공개 <br/><br/>

2. 이더리움 백서의 구조

   - 2-1. 비트코인과 기존 개념에 대한 소대
   - 2-2. 이더리움의 기술 요소
   - 2-3. 분산 어플리케이션<br/><br/>

3. 디지털 통화의 역사

   - 일상에서 사용하는 T-Money도 디지털 통화의 일종
   - 1980~90: 개인정보를 보호하는 암호 알고리즘에 기반한 익명 디지털 통화 제안
   - 1988: B-Money는 분산 합의와 퍼즐 계산을 통한 화폐 발행 개념 제시
   - 2005: Hall Finney는 재사용 가능한 작업 증명 방식 제시 -> B-Money에 해시 알고리즘을 적용
   - 2009: 사토시 나카모토에 의해 실제적으로 구현된 탈중앙화 화폐 탄생 -> 비트코인<br/><br/>

4. 작업증명의 혁신
   - 간단하면서 효과적인 합의 알고리즘 제공
   - 누구나 합의 프로세스에 참여할 수 있도록 허용
   - 각 노드의 결정권 크기를 그 노드의 계산 능력에 직접적으로 비례시키는 방식으로 구현 (Hash Rate, Hash Power)<br/><br/>

<h3>비트코인과 기존 기술 개념</h3>

- 비트코인 분산 합의 과정: '블록' 이라는 거래 이력 또는 트랜잭션 묶음의 계속 생성을 위해 노드 필요, 비트코인 네트워크는 10분마다 하나의 블록 생성, 각 블록은 타임스탬프, 논스, 이전 블록의 해시값, 이전 블록 이후 발생한 트랜잭션의 목록 포함<br/><br/>

- 블록 유효성 확인 절차

1. 블록에 의해 참조되는 이전 블록의 존재 \* 유효성 확인
2. 타임스탬프값이 이전 블록의 타임스탬프 값보다 크면서 2시간 이내인지 확인
3. 작업증명(proof of work)의 유효성 확인 ==> 해당 블록의 Hash값과 Nonce, 난이도(Difficulty)를 조합하여 해당 Hash값이 유효성 확인
4. S[0] 을 이전 블록의 마지막 상태(state)가 되도록 설정
5. TX를 n개의 트랜잭션을 가지는 블록의 트랜잭션 목록으로 가정
6. 참(True)을 리턴하고, S[n]을 이블록의 마지막 상태로 등록 (상태가 블록 내에 전혀 저장되지 않음)

   - 상태: 유효성을 검증하는 노드가 매번 계산해서 기억해야 할 완전히 추상적인 것 (원시상태부터 해당 블록까지의 모든 트랜잭션을 순차적으로 적용함으로써 계산)<br/><br/>

- 머클 트리

  - 해시 트리(머클 트리)
    - 노드의 이름이 자식 노드의 이름의 해시값으로 구성된 트리(발명가의 이름을 따서 만듬)
    - 여러 블록으로 구성된 데이터의 무결성을 보장하는 데 사용
    - 전체 데이터의 일부 데이터가 누락, 오류, 변조 될 경우 트리 구조의 오류를 쉽게 발견 가능<br/><br/>

- 블록체인 기술 3가지<br/><br/>
  1.  네임코인
      - 탈중앙화된 명칭 등록 데이터베이스
      - 비트코인 내 ID는 16진수 Hash Code: 식별이 어려운단점이 있는데 이를 해결하기 위해서 명칭을 등록할 수 있는 블록체인 제작
      - 인터넷상에서 계정, 도메인, 식별 가능한 지갑 ID 등을 구현하는데 사용<br/><br/>
  2.  컬러드 코인
      - 비트코인 위에서 개별 암호화폐를 발행 할 수 있는 프로토콜(자신만의 디지털 토큰을 발행하는 프로토콜 역할)
      - 비트코인 UTXO에 색깔(식별자)을 부여함으로써 구현
      - 블록체인을 처음부터 끝까지 역추적해 UTXO 색깔을 정함<br/><br/>
  3.  메타 코인
      - 거래 내역이 비트코인 블록체인 네트워크를 이용하는 개념
      - 비트코인 거래 메커니즘을 메타코인 거래에 이용함
      - 상태 변환 함수를 다르게 가짐
      - 비트코인 시스템 위에 운영되는 프로토콜을 가짐<br/><br/>

<h3>이더리움의 목적</h3>

- 분산 어플리케이션 제작을 위한 프로토콜 제작
- 대규모 분산 애플리케이션 제작 도구 제공
- 빠른 개발 시간
- 높은 보안성 공유
- 다른 어플리케이션과의 상호 작용

  - 튜링 완전 언어를 내장한 블록체인

    - 스마트 계약, 분산 어플리케이션 작성
    - 소유권에 대한 임의의 규칙생성
    - 트랜잭션 형식 생성
    - 상태 변환 함수 생성<br/><br/>

  - EX) 네임코드의 기본적인 형태

    - 두 줄 정도의 코드로 작성 가능
    - 통화나 평판 시스템 관련 프로토콜은 스무 줄 내외의 코드로 만들 수 있음
    - 특정한 조건들을 만족했을 때만 그 값을 얻을 수 있게 하는 스마트 계약을 만들 수 있음<br/><br/>

  - 튜링 완전 언어(solidity)

    - Solidity는 튜링 완전성을 통해 어떤 수학 함수식이나 알고리즘을 구현
    - 범용적인 어플리케이션 제작 가능
    - 블록체인의 헤더 정보인 Nonce, Difficulty 등의 정보를 활용하여 응용 프로그래밍 가능<br/><br/>

<h3>이더리움 디자인 철학, 기술요소</h3>

- 디자인철학

   1. 단순함
   - 추가적인 데이터 저장 비용, 시간 비효율성이 발생하더라도 가급적 단순함을 유지
   - 평균적인 개발자도 이더리움의 명세를 준수할 수 있도록 함
   - 개방성 유지, 암호화폐가 가져올 민주주의 가치 구현

   2. 보편성
   - 이더리움의 개별적 특징을 가지지 않는 데 있음
   - 튜링 완전한 프로그래밍 언어를 내장하여 보편적인 스마트 계약을 구현

   3. 모듈화
   - 이더리움 블록체인 기반의 생태계에 영향을 최소화함

   4. 민첩성
   - 성능 및 보안에 상당한 향상을 얻기 위해서 최상위 구성도 기민하게 구성

   5. 차별 및 검열 금지
   - 특정 사용을 제한, 금지하지 않음
   - 특정 목적의 애플리케이션을 제약하는 대신 직접적인 피해를 규제하는 방식으로 설계<br/><br/>

- 이더리움 계정 

   - 이더리움 상태: 20바이트의 주소를 가지는 계정이라는 객체들로 구성
   
   - 외부 소유 계정: 개인키로 통제되며, 거래를 발생시키면 개인키로 암호화되어 서명함

   - 계약 계정: 이더리움 네트워크상의 일종의 자율 에이전트 역할<br/><br/>

- 메시지, 트랜잭션

   - 거래: 외부 소유 계정이 보낼 메시지를 가지고 있는 서명된 데이터 단위를 의미

   - 이더리움 거래
      1. 메시지 수신처
      2. 발신처를 확인할 수 있는 서명
      3. 발신처가 수신처로 보내는 Ether의 양
      4. 데이터 필드
      5. Start Gas값(Gas limit)
      6. Gas Price

   - Start Gas: Gas limit라고 하는 것을 의미

   - 메시지: 계약 계정에 전달되는 거래 내역 중에서 실제 스마트 계약 프로그램에서 처리하는 영역

   - 스마트 계약: 다른 스마트 계약 계정에 메시지를 전달할 수 있음(다중 스마트 계약 간에 연결되어 실행가능)<br/><br/>

- 이더리움 상태 변환 함수

   1. Transaction이 유효하고 형식에 맞는지 확인
   2. 서명(Sign)이 유효한지 확인
   3. Start Gas X Gas Price로 수수료를 계산하여 수수료만큼의 Ether를 가지고 있는지 확인하고 차감<br/><br/>

- 코드 실행
   
   - 이더리움 스마트 계약 코드: "EVM코드" 로 불리는 로우-레벨 바이트 코드 언어로 변환되어 실행됨

      1. 연속된 Byte로 구성
         - 각각의 바이트는 연산을 나타냄
         - 코드 실행은 0부터 시작하는 현재 프로그램 카운터를 하나씩 증가시키면서 반복적으로 연산을 수행하도록 구성된 무한 루프
         - 코드의 마지막에 도달하거나 오류, STOP, RETURN 명령을 만나면 실행을 멈추게됨

      2. 연산을 수행하는 데이터 저장공간
         - stack: LIFO 데이터 구조로 여기에 값을 밀어 넣거나 뺄 수 있음(컨테이너 박스가 대표적인 스택구조)
         - 메모리: 무한대로 확장이 가능한 바이트 배열
         - 장기저장소: K-V 방식의 데이터 구조, 스마트 계약 계산이 끝나면 리셋되는 스택이나 메모리와 달리 영속적으로 유지

      3. 블록 헤더 데이터값 및 메시지 데이터 접근 가능
         - 결과값으로 데이터의 바이트 배열 반환<br/><br/>

- 블록체인, 채굴
   
   - 이더리움은 상태정보를 블록에 저장함 (블록에 최신상태를 포함)

   - 패트리시아 트리 => 머클 트리의 변형을 통해 효율적 구현

   - State Tree: 해당 블록에서 변형된 Account State만 생성하여 이전 블록의 State Tree를 포함한 Merkle Tree를 구성<br/><br/>

- 신규 블록 검증 절차
   
   1. 참조하고 있는 이전 블록이 존재하고 유효한지 확인
   2. 현재 블록의 타임스탬프가, 참조하고 있는 이전 블록의 타임스탬프보다 작은지 확인
   3. 블록 넘버, 난이도, 트랜잭션 루트, 엉클 트리 루트, 가스 리미트 등이 유효한지 확인
   4. 블록에 포함된 블록 헤더 해시 값, 논스, 난이도 값을 통해 작업 증명이 유효한지 확인
   5. 거래에 대해 상태 변환을 적용<br/><br/>

<h3>이더리움 애플리케이션</h3>

   - 금융 애플리케이션
      
      1. 암호화폐
      2. 파생금융상품
      3. 예금용 전자지갑
      4. 유언장<br/><br/>

   - 준 금융 애플리케이션
      - 상당부분 비화폐적인 면이 존재하는 계약을 위한 애플리케이션이 해당됨<br/><br/>

   - 금융과 관련 없는 애플리케이션
      - 미화/금 등과 연동된 하위화폐
      - 주식, 스마트자산
      - 위조 불가능 쿠폰<br/><br/>


   - 이더리움 토큰 시스템
      - 기본 블록체인 시스템에 비해 매우 쉽게 구현
      - 이더리움 스크립트를 이용하면 토큰 거래 구현이 가능함<br/><br/>
   
   - 네임코인
      - 비트코인과 유사한 블록체인을 이용해, 사용자가 공공 DB에 다른 데이터와 함께 본인의 이름을 등록하는 명의등록 시스템<br/><br/>

   - 스마트 계약
      - 이더리움 네트워크 안에 저장되어 수정하거나 지울 수 없는 데이터베이스를 구현함
      - 누구든 수수료로 소량의 Ether를 이용해 본인의 명의를 등록할 수 있으며 한 번 등록하면 영구적으로 보존함<br/><br/>

   - 분산형 파일 저장소
      - 개인 하드드라이브를 대여해주는 대가로 소액의 돈을 받을 수 있음
      - 핵심 기반은 "분산형 파일 저장 스마트 계약" 으로 구현 됨
      - P2P 파일 전송 시스템인 토렌트와 블록체인이 결합된 형태로 구현 가능<br/><br/>
   
   - 이더리움의 문제점
      - 블록체인 기술이 동영상과 같은 대용량 파일을 저장하기에 적합하지 않은 구조
      - 이더리움 네트워크의 가스비용으로 인해 경제성이 없음<br/><br/>

<h3>이더리움 관련 이슈</h3>

   - GHOST 기법: 선택되지 못하는 Sub tree까지 작업 증명에 포함하여 보안성 문제를 해결(엉클 트리에 대한 보상을 통해 채굴자 파워에 의한 중앙화 문제 완화)

   - EVM 특징
      - 악의적 사용자가 계산을 무한 순환에 빠트리는 방법으로 채굴자와 풀 노드를 마비시켜버릴 수 있음
      - 일반적으로 어떤 주어진 문제가 궁극적으로 멈추는지 아닌지 미리 판별할 방법은 없음
      - 한 거래에 최대로 계산할 수 있는 단계 수를 설정함으로써 문제 해결 가능
      - 계산 단계가 그 최대 수보다 더 많으면 계산은 원점으로 돌아가지만, 수수료는 그대로 지불됨

   - 이더리움 채굴 방식
      - 각 채굴자가 상태정보에서 무작위의 정보를 가져와, 무작위로 선택된 최근 몇 개의 블록내역을 해싱 작업하고 결과값을 내놓는 것

   - 이더리움 채굴 방식 이점
      - 이더리움 계약이 모든 종류의 컴퓨터 계산방식 포괄
      - 채굴자들은 작업 시 전체 블록체인을 다운 받아 이체내역 검증
      - 












