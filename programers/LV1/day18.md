## 프로그래머스 - 코딩테스트 연습 - 3진법 뒤집기(LV.1)

### 문제

```
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예 설명
입출력 예 #1

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
45	1200	0021	7
따라서 7을 return 해야 합니다.
입출력 예 #2

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
125	11122	22111	229
따라서 229를 return 해야 합니다.
```

- 입출력 예
  | n | result |
  | ------------- | ---------------- |
  | 45 | 7 | 
  | 125 | 229 |
  
### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>
#include <cmath>
using namespace std;

int solution(int n) {
    int answer = 0;
    vector<int> store;
    while(n > 0){
        answer = n % 3;
        store.insert(store.end(), answer);
        n = n / 3;
    }
    int result = 0;
    for(int i = 0; i < store.size(); i++){
        result += store[i] * pow(3, store.size() - i -1);
    }
    
    return result;
}
```

### 풀이에 대한 이유

- 3으로 나눈 수의 나머지를 먼저 구한다.
- 구한 나머지 값을 vector 에 넣고, 크기만큼 다시 10진법으로 만들어주면 된다.