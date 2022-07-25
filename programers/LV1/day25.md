## 프로그래머스 - 코딩테스트 연습 - 2016년(LV.1)

### 문제

```
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
```

- 입출력 예
  | a | b | result |
  | ------------- | ---------------- | ---------------- |
  | 5 | 24 | "TUE" |
  | 1 | 1 | "FRI" |
  

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>
using namespace std;

string solution(int a, int b) {
    string answer = "";
    vector<string> day = {"THU","FRI","SAT","SUN","MON","TUE","WED"};
    vector<int> month_day = {31,29,31,30,31,30,31,31,30,31,30,31};
    int sum_month = 0;
    for(int i = 0; i < a-1; i++){
        sum_month += month_day[i];
    }
    return day[(sum_month+b)%7];
}
```

### 풀이에 대한 이유

- 2016년의 1월 1일은 금요일이다. 먼저 a = 1, b = 1일 경우에 금요일이 나오게 요일을 세팅한다.
- 요일을 순서대로 세팅을 한 후 윤년 기준의 각 월별 일수를 세팅해줌
- 후에 요일의 일수를 모두 더한 수에 해당 일수를 더하고 7의 나머지 값을 구한 수의 요일을 구하면 됨.