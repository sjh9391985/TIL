## 프로그래머스 - 코딩테스트 연습 - 숫자 문자열과 영단어/ 2019 카카오 채용연계형 인턴십(LV.1)

### 문제

```
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
```

- 입출력 예
  | s | result |
  | ------------- | ---------------- |
  | "one4seveneight" | 1478 |
  | "23four5six7" | 234567 |
  | "2three45sixseven" | 234567 |
  
### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(string s) {
    int answer = 0;
    string temp = "";
    string store = "";
    if(s.size() >= 1 && s.size() <= 50){
        for(int i = 0 ; i < s.size(); i++){
            if((int)s[i] >= 97){
                temp += s[i];
                if(temp == "zero"){
                    store += "0";
                    temp = "";
                } else if (temp == "one") {
                    store += "1";
                    temp = "";
                } else if (temp == "two") {
                    store += "2";
                    temp = "";
                } else if (temp == "three") {
                    store += "3";
                    temp = "";
                } else if (temp == "four") {
                    store += "4";
                    temp = "";
                } else if (temp == "five") {
                    store += "5";
                    temp = "";
                } else if (temp == "six") {
                    store += "6";
                    temp = "";
                } else if (temp == "seven") {
                    store += "7";
                    temp = "";
                } else if (temp == "eight") {
                    store += "8";
                    temp = "";
                } else if (temp == "nine") {
                    store += "9";
                    temp = "";
                } 

            } else {
                store += s[i]; 
            }
        }    
    }
    answer = stoi(store);
    
    return answer;
}
```

### 풀이에 대한 이유

- 해당 단어가 영어일 경우에는 각 문자의 아스키코드 값이 97을 넘을 경우에는 소문자가 들어오는데 각 단어의 조합을 하여 해당 문자열을 숫자로 변환
- 그외의 숫자는 그대로 사용하여 문자를 이어붙인후 정수로 변환하면됨.

<hr/>

### 다른사람 풀이

1. 풀이방식(1)

```
#include <bits/stdc++.h>
using namespace std;

int solution(string s) {
    s = regex_replace(s, regex("zero"), "0");
    s = regex_replace(s, regex("one"), "1");
    s = regex_replace(s, regex("two"), "2");
    s = regex_replace(s, regex("three"), "3");
    s = regex_replace(s, regex("four"), "4");
    s = regex_replace(s, regex("five"), "5");
    s = regex_replace(s, regex("six"), "6");
    s = regex_replace(s, regex("seven"), "7");
    s = regex_replace(s, regex("eight"), "8");
    s = regex_replace(s, regex("nine"), "9");    
    return stoi(s);
}
```

### 풀이에 대한 이유

- 각 문자열의 정규표현식을 사용하여 각 단어마다 해당하는 단어는 0으로 치환 후 문자열을 정수로 변환하여 반환하는 식을 사용
- regex() 과 replace 함수를 사용하여 간단히 푼 문제