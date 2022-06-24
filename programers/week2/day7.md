## 프로그래머스 - 코딩테스트 연습 - 짝수와 홀수(LV.1)

### 문제

```
문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
```

- 입출력 예
  | num | return |
  | ------------- | ---------------- |
  | "3" | "Odd" |
  | "4" | "Even" |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>

using namespace std;

string solution(int num) {
    return (num %2) ? "Odd" : "Even";
}
```

### 풀이에 대한 이유

- 3항 연산자를 이용하여 나머지 값이 0인 경우는 짝수를 의미, 1인 경우 홀수를 의미로 생각하여 작성
<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

string solution(int num) {
    string answer = "";

    return num & 1 ? "Odd" : "Even";
}
```

- 비트 연산을 통해 결과값을 도출
