## 프로그래머스 - 코딩테스트 연습 - 핸드폰 번호 가리기(LV.1)

### 문제

<img src="">

### 풀이

1. 풀이방식(1)

```
#include <iostream>
#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = "";
    string back = phone_number.substr(phone_number.length() - 4);

    string temp;
    for(int i = 4; i < phone_number.length(); i++){
        temp += "*";
    }
    answer = temp+back;


    return answer;
}
```

### 풀이에 대한 이유

- phone_number의 파라미터로 들어오는 값에서 뒤에서 4자리의 숫자가 필요함
- 그외의 문자는 전부'\*' 로 표현
- 그렇기에 파리미터로 들어오는 값 중 뒤에서 4개는 잘라서 하나의 변수에 저장
- 나머지는 파라미터의 길이에서 뒤에 4자리를 제외한 반복을 돌려서 '\*' 로 합쳐서 다른 변수에 저장
- '\*' 로 저장된 변수와 4개의 번호값이 저장된 변수를 더해서 return 해주면 됨

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = "";

    for (int i = 0; i < phone_number.size() - 4; i++ )
    {
        phone_number[i] = '*';
    }

    answer = phone_number;

    return answer;
}
```

- 0번째부터 뒤에서 4번째 자리 전까지의 값은 전부 '\*' 표현하고 나머지 4자리의 값은 그대로 번호로 표현하는 방법을 사용
