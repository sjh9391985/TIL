## 프로그래머스 - 코딩테스트 연습 - x만큼 간격이 있는 n개의 숫자(LV.1)

### 문제

<img src="https://github.com/sjh9391985/TIL/blob/main/images/%EA%B0%84%EA%B2%A9%EC%9E%88%EB%8A%94n%EA%B0%9C%EC%88%AB%EC%9E%90.png?raw=true">

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<long long> solution(int x, int n) {
    vector<long long> answer;
    int first_parameter = x;
    for(int i = 0; i < n; i++){
        answer.push_back(x);
        x += first_parameter;
    }
    return answer;
}
```

### 풀이에 대한 이유

- x값에는 값을 더하는 정수가 들어오고, n값에는 x를 얼만큼 더해야할지 생각해봐야함.
- 먼저 n의 수 만큼 반복해서 더해줘야하기에 n의 크기만큼 반복문을 돈다.
- 그리고 한번씩 돌때마다 해당 x의값을 배열에 넣어주고 나서 x의 값을 더해주는 방식으로 구현하면 됨.

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

vector<long long> solution(int x, int n) {
    vector<long long> answer(n, x);

    for (int i = 1; i < n; i++)
        answer[i] = answer[i - 1] + x;

    return answer;
}
```

- n번 반복시 answer 배열의 값에 x를 추가하는 방법
