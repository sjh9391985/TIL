## 프로그래머스 - 코딩테스트 연습 - 나누어 떨어지는 숫자 배열(LV.1)

### 문제

```
문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

제한사항
arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.

입출력 예 설명
입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

```

- 입출력 예
  | arr | divisor | return |
  | ------------- | ---------------- | ---------------- |
  | [5, 9, 7, 10] | 5 | [5, 10] |
  | [2, 36, 1, 3] | 1 | [1, 2, 3, 36] |
  | [3,2,6] | 10 | [-1 ] |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
    vector<int> answer;

    for(int temp : arr){
        if(temp % divisor == 0){
            answer.insert(answer.begin(), temp);
        }
    }
    if(answer.size() == 0){
        answer.insert(answer.begin(), -1);
    } else {
        sort(answer.begin(), answer.end());
    }
    return answer;
}
```

### 풀이에 대한 이유

- 각 배열에 들어있는 정수의 값을 배열의 크기만큼 반복해서 배열의 값이 divisor와 나누었을때 나머지가 0이라면 그 정수를 answer 배열에 추가
- 그외의 경우는 넘어가고 이렇게 배열의 크기만큼 작업을 끝내고 나서 answer 배열의 크기가 0일 경우, 즉 딱 떨어지는 수가 아닌 경우 배열의 사이즈가 0이기에 -1 을 넣어준다.
- 나머지 값이 딱 떨어지는 값이 있는 answer 배열은 내림차순으로 정렬을 해주면 됩니다.

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
    vector<int> answer;
    sort(arr.begin(), arr.end());

    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] % divisor == 0)
            answer.push_back(arr[i]);
    }

    return answer.empty() ? vector<int>(1, -1) : answer;
}
```

### 풀이에 대한 이유

- 각 배열에 들어있는 정수의 값을 배열의 크기만큼 반복해서 배열의 값이 divisor와 나누었을때 나머지가 0이라면 그 정수를 answer 배열에 추가
- 이후 return 값에서 삼항연산자를 이용하여 배열이 비었을 경우에는 -1을 넣어주고 아니라면 answer 배열을 리턴해준다.
