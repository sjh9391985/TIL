## 프로그래머스 - 코딩테스트 연습 - [1차]비밀지도(2018 카카오 블라인드 채용)(LV.1)

### 문제

```
문제 설명
비밀지도
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

1 ≦ n ≦ 16
arr1, arr2는 길이 n인 정수 배열로 주어진다.
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
출력 형식
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
```
<image src="http://t1.kakaocdn.net/welcome2018/secret8.png"></image>

- 입출력 예
  | 매개변수 | 값 |
  | ------------- | ---------------- |
  | n | 5 |
  | arr1 | [9, 20, 28, 18, 11] |
  | arr2 | [30, 1, 21, 17, 28] |
  | 출력 | ["#####","# # #", "### #", "# ##", "#####"] |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
string toBinary(int n)
{
    string r;
    while (n != 0){
        r += ( n % 2 == 0 ? " " : "#" );
        n /= 2;
    }
    string temp;
    for(int i = r.size(); i >= 0; i--){
        temp += r[i];
    }
    
    return temp;
}
vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector <string> answer;
    vector <int> store;
    if( n >=1 && n <= 16){
        for(int i = 0; i < n; i++){
            store.insert(store.end(), arr1[i] | arr2[i]);
        }
    
        for(int i = 0; i < store.size(); i++){
            string temp = toBinary(store[i]).erase(0,1);
            if(temp.size() != n){
                int space_n = n - temp.size();
                string space;
                for(int i = 0; i < space_n; i++){
                    space += " ";
                }    
                answer.insert(answer.end(), space+temp);
            } else {
                answer.insert(answer.end(), temp);    
            }
            
        }    
        return answer;
    } else {
        
    }
}
```

### 풀이에 대한 이유

-  arr1, arr2 각각의 배열을 해당 배열의 번호마다 비트 연산을 통해서 값을 새로운 배열에 삽입
- 저장한 배열의 나머지 값을 구하는 식을 생성하여 가져옴(값을 가져올때 null이 제일 처음 담겨있기에 제거필요)
- 제거한 문자열의 크기중에 파라미터 n에 담긴 배열의 크기와 값이 일치하지 않으면 뺀 값만큼 공백을 채워주면 됨.