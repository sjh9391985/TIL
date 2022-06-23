## 프로그래머스 - 코딩테스트 연습 - x만큼 간격이 있는 n개의 숫자(LV.1)

### 문제

```
문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.

```

- 입출력 예
  | x | n | answer |
  | ------------- | ---------------- | ---------------- |
  | 2 | 5 | [2,4,6,8,10] |
  | 4 | 3 | [4,8,12] |
  | -4 | 2 | [-4, -8] |

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

```

```
