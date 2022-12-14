JAVA - LinkedList
- Collection 프레임워크의 일부, java.util 패키지 소속
- 데이터가 연속된 위치에 저장되지 않고 모든 데이터가 데이터 부분과 주소 부분을 별도로 가지고 있음
- 자주 삽입, 삭제가 이뤄지는 경우 용이하여 arraylist 보다 선호됨, 대신 검색속도는 더 느림


LinkedList 사용법
LinkedList list = new LinkedList(); // 타입 미설정 Obj 로 선언됨
LinkedList<Student> members = new LinkedList<Student>(); // 타입설정 student 객체만 사용가능
LinkedList<Integer> members = new LinkedList<Integer>(); 
LinkedList<Integer> members = new LinkedList<>(); 
LinkedList<Integer> members = new LinkedList<Integer>(Arrays.asList(1,2)); // 생성시 값추가

- 초기의 크기를 미리 생성할 수 없음
- 사용타입을 명시해주는것이 좋음
- 제너릭스는 선언가능한 타입이 객체 타입이기에 wrapper 클래스를 사용해야함
값 추가
LinkedList<Integer> list = new LinkedList<Integer>();
list.addFirst(1); // 가장 앞에 데이터 추가
list.addLast(2); // 가장 뒤에 데이터 추가
list.add(3); // 데이터 추가
list.add(1,10); // index 1에 데이터 10추가
