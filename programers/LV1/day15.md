## 프로그래머스 - 코딩테스트 연습 - 문자열 내 마음대로 정렬하기(LV.1)

### 문제

```
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

```

- 입출력 예
  | strings | n | return |
  | ------------- | ---------------- | ---------------- |
  | ["sun", "bed", "car"] | 1 | ["car", "bed", "sun"] |
  | ["abce", "abcd", "cdx"] | 2 | ["abcd", "abce", "cdx"] |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
int N;

bool cmp(string a, string b){
     return (a[N] == b[N])? a < b : a[N] < b[N];
        
}
vector<string> solution(vector<string> strings, int n) {
    vector<string> answer = strings;
    N = n;
    sort(answer.begin(), answer.end(), cmp);
    
    return answer;
}
```

### 풀이에 대한 이유

- 문제에서 요구하는 사항은 sort() 함수 사용, sort()함수안에 비교함수를 사용하여 값을 도출하는 방식을 학습하는것이 중요해보임
- cmp는 사용자 정의 비교함수를 가리키는 포인터로 함수는 함수명 자체로 포인터이기 때문에 이름만 적어서 사용
- 비교함수에 따라서 오름차순 정렬 