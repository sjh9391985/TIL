## 프로그래머스 - 코딩테스트 연습 - 약수의 합(LV.1)

### 문제

```
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.

입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

```

- 입출력 예
  | n | return |
  | ------------- | ---------------- |
  | 12 | 28 |
  | 5 | 6 |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int n) {
    int answer = 0;
        for(int i = 1; i < 3000; i++){
            if(!n){
                answer = 0;
            } else {
                if(n % i == 0){
                    answer += i;
            }
        }
    }
    return answer;
}
```

### 풀이에 대한 이유

- n은 0 ~ 3000 사이의 범위를 가지는 정수
- n이 0인 경우 결과값 0을 도출
- n이 0이 아닌 정수일 경우, 파라미터 n에서 i의 나머지가 0일 경우의 i는 약수이므로 덧셈을 해줌

<hr/>

### 다른 사람 풀이

```
#include<iostream>
#include <math.h>
using namespace std;

int sumDivisor(int n)
{
  int nSum=0;
  for (int i=1; i<=sqrt(n); i++)
  {
    if (n%i == 0)
    {
       nSum += (i + n/i);
    }
  }
    return nSum;
}

int main()
{
    int testCase = 12;
    int testAnswer = sumDivisor(testCase);

    cout<<testAnswer;
}
```
