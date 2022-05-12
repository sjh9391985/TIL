<h1>Cocoa Touch</h1>

1. 코코아 터치계층

- ios 어플리케이션 개발환경의 토대
- 코코아 터치계층은 ios 어플리케이션 개발에 주 축을 이루는 개발환경
- 어플리케이션의 다양한 기능 구현에 필요한 여러 프레임워크를 포함하는 최상위 프레임워크 계층
  <br/><br/>

2. Foundation 프레임워크

- 코코아 터치 프레임워크에 포함된 Foundation 프레임워크
- ios 어플리케이션의 운영체제 서비스와 기본 기능을 포함하는 프레임워크
- 원시 데이터 타입(String, int, Double), 컬렉션 타입(Array, Dictionary,Set) 및 운영체제 서비스를 사용해 어플리케이션의 기본적인 기능을 관리하는 프레임워크
  <br/><br/>

3. Foundation 기능별 요소

   ## <h4><strong>기본</strong></h4>

- Number, Data, String: 원시 데이터 타입 사용
- Collection: Array, Dictionary, Set 등과 같은 컬렉션 타입 사용
- Date and Time: 날짜와 시간을 계산하거나 비교하는 작업
- Unit and Measurement: 물리적 차원을 숫자로 표현 및 관련 단위 간 변환 기능
- Data Formatting: 숫자, 날짜, 측정값 등을 문자열로 변환 또는 반대 작업
- Filter and Sorting: 컬렉션의 요소를 검사하거나 정렬하는 작업<br/><br/>

  ## <h4><strong>어플리케이션 지원</strong></h4>

- Resources: 애플리케이션의 에셋과 번들 데이터에 접근 지원
- Notification: 정보를 퍼뜨리거나 받아들이기는 기능 지원
- App Extension: 확장 애플리케이션과의 상호작용 지원
- Error and Exceptions: API와의 상호작용에서 발생할 수 있는 문제 상황에 대처할 수 있는 기능 지원<br/><br/>

  ## <h4><strong>파일 및 데이터 관리</strong></h4>

- File System: 파일 또는 폴더를 생성하고 읽고 쓰는 기능 관리
- Archives and Serialization: 속성 목록, JSON, 바이너리 파일들을 객체로 변환 또는 반대 작업 관리
- iCloud: 사용자의 iCloud 계정을 이용해 데이터를 동기화하는 작업 관리<br/><br/>

  ## <h4><strong>네트워킹</strong></h4>

- URL Loading System: 표준 인터넷 프로토콜을 통해 URL과 상호작용하고 서버와 통신하는 작업
- Bonjour: 로컬 네트워크를 위한 작업
  <br/><br/>

4. UIKit 프레임워크

- ios 어플리케이션 개발시 사용자에게 보여질 화면 구성 및 사용자 액션 대응에 관련된 다양한 요소를 포함
- 제스처 처리, 애니메이션, 그림 그리기, 이미지 처리 등 사용자 이벤트 처리를 위한 클래스를 포함합니다.
  <br/><br/>

5. UIKit 기능별 요소

   ## <h4><strong>사용자 인터페이스</strong></h4>

- View and Control : 화면에 콘텐츠 표시
- View Controller : 사용자 인터페이스 관리
- Animation and Haptics : 애니메이션과 햅틱을 통한 피드백 제공
- Window and Screen : 뷰 계층을 위한 윈도우 제공<br/><br/>

  ## <h4><strong>사용자 액션</strong></h4>

- Touch, Press, Gesture: 제스처 인식기를 통한 이벤트 처리 로직
- Drag and Drop: 화면 위에서 드래그 앤 드롭 기능
- Peek and Pop: 3D 터치에 대응한 미리 보기 기능
- Keyboard and Menu: 키보드 입력을 처리 및 사용자 정의 메뉴 표시<br/><br/>
