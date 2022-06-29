## 프로그래머스 - 코딩테스트 연습 - 소수 찾기(LV.1)

### 문제

```
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

```

- 입출력 예
  | n | return |
  | ------------- | ---------------- |
  | 10 | 4 |
  | 5  | 3 |

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
    vector<bool> arr(n+1);
    
    // n이 10의 경우
    for(int i = 2; i <= sqrt(n); i++){
        // i : 2, 3
        if(arr[i]){
            continue;  
        }
        4 6 8 10/ 6 9  
        for(int j = i + i; j <= n; j += i){
            
           arr[j] = true; 
        }
           
    }
        // 소수 출력 
        for(int i = 2; i <= n; i++){
            if(!arr[i]) {
                answer++;    
            }
        }
	    
    return answer;
}
```

### 풀이에 대한 이유

- 에라토스테네스의 체를 이용하여서 문제에 접근 (대량의 소수들을 구해야할 때 아주 유용한 알고리즘으로 O(N^1/2)의 시간복잡도를 갖는다.) 
- 구하고자하는 수 n의 배열을 만든다 ex) 30이면 31로 설정.
- 먼저 입력값의 제곱수를 구해서 그 수를 반복하는데, i에 저장된 수의 반복만큼 해당 조건에 따라 배열을 true로 만들어줌
- true 저장된 수를 제외한 나머지가 소수 이므로 각 개수를 더해주는 방식

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    vector<bool> tmp(n+1, true); // tmp 배열의 값 true 선언

    for (int i=2; i<n+1; i++) {
        if (tmp[i] == true) {
            for (int j=2; i*j<n+1; j++) tmp[i*j] = false;
            answer++;
        }
    }
    return answer;
}
```