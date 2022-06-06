<h1>solidity 언어 개요</h1>

<h3>스마트 계약 기초</h3>

- 스마트 계약 예제

    - `pragma solidity ^0.4.0` : 이전 버전의 호환성 보장 및 오류 방지
    - `contract` : 함수, 변수, 연산문으로 구성
    - `unit` : state 변수

- 이더리움 블록체인의 특징
    - 전세계적으로 공유되어 있는 거래이력을 담은 데이터베이스
    - 네트워크에 참여하는 누구나 데이터을 읽을 수 있음
    - 데이터 수정불가
    - 추가적인 transaction 만 생성가능
    - transaction을 통해서 상태의 변경
    - transaction은 Sender의 암호키로 인증되어 전송
    - 생성된 거래는 이더리움 네트워크에 배포되어 합의 알고리즘을 거쳐 신뢰가 부여됨
    - 처리 성능을 위하여 transaction을 묶어서 처리함
    - 블록 단위로 Proof-of-work를 실행하여 네트워크 참여자들 간의 합의를 이룸
    - 신규 블록에 대한 보상으로 신규 coin을 지급하여 mining이라고 함

- EVM
    - 이더리움 네트워크에서 스마트 계약이 실행되는 환경
    - 외부와의 통신 및 파일을 생성하거나 읽는것이 불가능함
    - 외부계정: 공개키에 의해 통제, 사람이 컨트롤함, 지갑이라고 불림
    - 계약계정: 코드에 의한 통제, address는 contract 생성시간에 의해서 생성됨

- GAS
    - 이더리움 경제 생태계를 유지하고 무한 루프와 같은 과도한 스마트 계약의 실행을 방지하는 역할
    - GAS Price: 송신자에 의해 결정됨
    - 소모된 GAS는 환불처리 되지 않고 채굴자에게 지불됨

- Storage
    - 각 Account는 이더리움 네트워크 상에서 Storage라고 불리는 영구적인 메모리 영역을 가짐(key-value 방식)

- Memory
    - 스마트 계약이 실행될 때 생성되며 실행이 종료되면 사라지는 일종의 휘발성 데이터 저장소
    - 256bit 단위로 확장

- Stack
    - 스마트 계약의 연산물이 처리될 때 사용되는 데이터 저장소 영역

<h3>스마트 계약 구조</h3>

- State Variables
    - 스마트 계약에서 사용되는 변수

- Functions
    - SimpleStorage Contract는 set()과 get() 함수를 가짐

- Function Modifiers
    - 함수의 로직을 선언단계에서 수정하거나 체크하는데 사용됨
    
- Event
    - event를 통해서 선언됨
    - EVM 의 Log를 생성하는데 사용됨
    - emit를 통해서 event가 호출됨

- Struct Types
    - 개발자가 정의하는 변수 유형으로 여러 변수를 포함
    - struct를 통해서 선언됨


<h3>데이터 유형</h3>

- Value Types : Value 유형으로 선언된 변수에 값이 복사되어 할당

    - Booleans: true/false 가능
    - Integers: int(양수, 음수 가짐)/ uint(양수정수 가짐)
    - Address: 스마트 계약의 계약주소를 저장하는데 사용됨
    - Byte arrays: 고정, 동적크기 byte array 가 있음
    - 다른 프로그래밍 언어와 달리 float 유형을 지원하지 않음
    - conversions: 변수에 값을 할당시 기본적인 데이터 유형 간의 변환이 가능

<h3>Solidity 언어의 변수</h3>

    - 1 ehter
        = 1,000 finney
        = 1,000,000 szabo
        = 1,000,000,000,000,000,000 wei
    
    - gwei, kwei 단위
        - 논리적인 단위
        - Solidity에서 사용 가능한 Ethereum 단위는 아님

    - Time Units
        - 시간 단위로 seconds, minutes, hours, days, weeks 를 사용가능(단위를 명시하지 않으면 seconds로 간주)
    
    - blockhash(unit blocknumber): 주어진 blockNumber에 해당하는 hash값을 리턴

    - block.coinbase: 현재 블록 마이너의 주소

    - block.difficulty: 현재 블록의 채굴 난이도

    - block.gaslimit: 현재 블록의 가스 리미트

    - block.number: 현재 블록의 넘버

    - block.timestamp: 현재 블록의 timestamp로서 unix epoch 이후 초 단위를 알려줌

    - gasleft(): 남은 가스량

    - msg.data: 현재 message call의 전체 data

    - msg.sig: msg.data 또는 Call Data의 첫 4 byte, 함수 ID로 사용됨

    - msg.value: 현재 message call과 함께 전송된 Ether, wei 단위로 표현됨

    - now: 현재 블록의 timestamp

    - tx.gasprice: transaction의 gas price

    - tx.origin: transaction sender의 주소

- contract
    - object-oriented 언어에서 class와 유사함
    - Solidity를 contract-oriented 언어라고 부르기도 함

- contract 생성 시
    - constructor 키워드로 선언된 함수 contract가 최초 생성 시 호출
    - constructor는 오직 한 번 선언이 가능하며 override가 불가능함

- visibility
    - 스마트 계약의 주요 구성요소인 함수와 state 변수에 대한 접근 여부를 말함

    - state variable 접근 유형
        1. External은 타 스마트 계약 및 거래를 통해서 호출이 가능
        2. public은 내부 호출 또는 message call을 통해서 호출 또는 접근이 가능
        3. Internal로 선언된 함수 및 변수는 해당 Contract 내부적으로만 접근이 가능
        4. private의 solidity contract도 object와 같이 상속이 가능함

    - constant state variables: 변경되지 않은 상숫값 변수를 선언할 때 사용됨

    - Function Overloading
        - Contract 내 함수에서 동일한 함수명을 쓰되 다른 유형 및 개수의 Input Parameters를 쓰는 복수의 함수를 선언할 수 있음
        




    









