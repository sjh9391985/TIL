## 프로그래머스 - 코딩테스트 연습 - 이상한문자만들기 (LV.1)

### 문제

```
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

```

- 입출력 예
  | s | return |
  | ------------- | ---------------- |
  | try hello world | TrY HeLlO WoRlD |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <iostream>
#include <sstream>
#include <vector>

using namespace std;
string solution(string s) {
    string answer = "";

    istringstream ss(s);
    string strBuffer;
    vector<string> v;

    v.clear();
    while (getline(ss, strBuffer,' ')){
         v.push_back(strBuffer);
    }
    string temp = "";

    for(string word : v){

         for (int j = 0; j < word.size(); j++){
             if (j % 2){
                 word.at(j) = tolower(word[j]);
             } else {
                 word.at(j) = toupper(word[j]);
             }

         }
         temp += word+" ";
    }
    answer = temp.substr(0,temp.size()-1);
    cout << answer ;
    return answer;
}
```

<br/>

2. 풀이방식(2)

```
#include <string>
#include <iostream>
#include <sstream>

using namespace std;
string solution(string s) {
    string answer = "";
    stringstream ss(s);
    ss.str(s);

    string temp = "";
    string word;

    while(ss >> word){

         for (int j = 0; j < word.size(); j++){
             if (j % 2){
                 word.at(j) = tolower(word[j]);
             } else {
                 word.at(j) = toupper(word[j]);
             }

         }
         temp += word+" ";
    }
    answer = temp.substr(0,temp.size()-1);
    cout << answer ;
    return answer;
```

### 풀이에 대한 이유

- C++에 대한 문법을 학습하고 있는 단계였고 기존의 java, js 등의 언어를 사용했을 경우의 구현방식을 참조해서 코드를 짯는데 결론적으로 테스트 케이스는 통과하였지만 제출 후 채점하기에서 실패가 계속해서 떳음.
- 먼저 공백을 기준으로 공백이 몇개든 상관없이 잘라서 배열로 만드는것을 생각했고, 배열에 대한 데이터를 홀,짝수 찾아서 대,소문자로 변경하였음.
- 테스트 케이스의 경우 '\_' 공백 하나가 아닌 '**\_**'여러개의 공백도 넣어서 실행을 했고, 테스트 케이서의 return 값은 통과했지만 채점에서 fail.
- 채점시 몇개의 실패에 대한 원인은 찾지 못하였고, 다른 문제풀이를 봤음.

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    int index = 0;
    int i;

    for(i = 0; i < s.size(); i++) {
        if(s[i] == ' ') {
            answer.push_back(' ');
            index = 0;
            continue;
        }

        if(index % 2 == 0) {    // 짝수 - 대문자
            if(s[i] > 90 )
                answer.push_back(s[i] - 32);
            else
                answer.push_back(s[i]);


        } else {                // 홀수 - 소문자
            if(s[i] < 97)
                answer.push_back(s[i] + 32);
            else
                answer.push_back(s[i]);
        }

        index++;
    }

    return answer;
}
```

- 이 풀이의 경우에는 내가 넣은 여러개 공백의 테스트케이스는 실패했지만 채점시 통과를 했음.
- 작성 방법은 문자열의 크기만큼 반복문을 돌려서 공백이 있으면 넘어가고 홀,짝을 구분해서 대소문자 변환을 합니다.
