## 프로그래머스 - 코딩테스트 연습 - 전화번호 목록(LV.2)

### 문제

```
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

제한 사항
phone_book의 길이는 1 이상 1,000,000 이하입니다.
각 전화번호의 길이는 1 이상 20 이하입니다.
같은 전화번호가 중복해서 들어있지 않습니다.

```

- 입출력 예
  | phone_book | return |
  | ------------- | ---------------- |
  | ["119", "97674223", "1195524421"] | false |
  | ["123","456","789"] | true |
  | ["934793", "34", "44", "9347"] | false |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;
    sort(phone_book.begin(), phone_book.end());
    if(phone_book.size() >= 1 && phone_book.size() <= 1000000 ){
        for(int i = 1; i < phone_book.size(); i++){
            if(phone_book[i-1] == phone_book[i].substr(0, phone_book[i-1].size())){
                return false;
            }
        }
    }
    return answer;
}
```

### 풀이에 대한 이유

- 처음에 sort를 사용하지 않고 이중 반복문을 사용해서 풀엇을때 테스트 케이스는 전부 통과했지만 효율성에서 실패가 떳음
- 해당 벡터의 데이터 값이 문자열이므로 문자열을 정렬후 반복문을 한번 사용해서 현재 값과 다음값만 비교하여 문제의 결과를 도출해내는 방식 채택함.
