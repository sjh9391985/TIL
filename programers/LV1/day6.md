## 프로그래머스 - 코딩테스트 연습 - 자릿수 더하기(LV.1)

### 문제

```
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
```

- 입출력 예
  | n | answer |
  | ------------- | ---------------- |
  | "123" | "6" |
  | "987" | "24" |

### 풀이

1. 풀이방식(1)

```
#include <iostream>

using namespace std;
int solution(int n)
{
    int temp = 0;
    while(n > 0){
        temp += n % 10;
        n = n/10;
    }
    return temp;
}
}
```

### 풀이에 대한 이유

- parameter n으로 들어온 정수를 10으로 나눈 나머지를 구한 후
- 몫을 10으로 나누어서 값을 구하면 됨.

<hr/>

### 다른 사람 풀이

```
#include <iostream>
#include <string>

using namespace std;
int solution(int n)
{
    int answer = 0;
    string s = to_string(n);
    for(int i = 0; i < s.size(); i++) answer += (s[i] - '0');
    return answer;
}
```

- parameter n의 정수를 문자열로 바꾼후 아스키 값에 따라 값을 구하는 방법
