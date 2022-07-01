## 프로그래머스 - 코딩테스트 연습 - 하샤드 수(LV.1)

### 문제

```
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
```

- 입출력 예
  | arr | return |
  | ------------- | ---------------- |
  | "10" | "true" |
  | "12" | "true" |
  | "11" | "false" |
  | "13" | "false" |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool solution(int x) {
    string str = to_string(x);
    int temp = 0;
    for (char c : str) {
        temp +=  c - '0';
    }
    return (x%temp == 0) ? true : false;
}
```

### 풀이에 대한 이유

- 정수 x를 문자열로 나눈 후 각각의 문자값을 분리 함.
- 분리한 문자를 더한 값을 정수 x로 나눈 나머지의 값에 따라 결과를 도출

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    int src = x;
    int sum=0;
    while(x >0)
    {
        sum+=x%10;
        x/=10;
    }

    return src%sum==0;

}
```

- 파라미터로 오는 정수 x를 나머지 값을 구한 후 몫을 구해서 0보다 클 경우 반복을 통해서 결과값을 도출
