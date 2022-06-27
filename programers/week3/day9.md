## 프로그래머스 - 코딩테스트 연습 - 행렬의 덧셈(LV.1)

### 문제

```
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
```

- 입출력 예
  | arr1 | arr2 | return |
  | ------------- | ---------------- | ---------------- |
  | [[[1,2],[2,3]]] | [[[3,4],[5,6]]] | [[[4,6],[7,9]]] |
  | [[[1, 2, 3, 4], [4, 5, 6, 7], [1, 2, 3, 3]]] | [[[3, 2, 1, 5], [6, 5, 4, 9], [4, 5, 6, 7]]] | [[[4, 4, 4, 9], [10, 10, 10, 16], [5, 7, 9, 10]]] |

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
    vector<vector<int>> answer;
    vector<int> store;
    
    for(int i = 0; i < arr1.size(); i++){
        if(arr1[0].size() > 1){
            for(int j = 0; j < arr1[0].size(); j++){
            
                int temp = arr1[i][j] + arr2[i][j];
                store.insert(store.end(), temp);
                
                if(j == arr1[0].size()-1){
                    answer.insert(answer.end(), store);
                    store.clear();
                }
            }
        } else{
            int temp1 = arr1[i][0] + arr2[i][0];
            store.insert(store.end(), temp1);
            answer.insert(answer.end(), store);
            store.clear();
        }
    }
    return answer;
}
```

### 풀이에 대한 이유

- parameter n으로 배열이 들어오는데 배열의 크기만큼 해당 배열을 반복해서 각각의 위치에 따라 값을 더해서 새로운 배열에 넣고, 만든 배열을 다시 최종 배열에 합쳐준다.

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
    vector<vector<int>> answer;
    vector <int> Q;
    for(int i = 0 ; i< arr1.size();i++)
    {
        for(int j = 0; j< arr1[i].size();j++)
        {
            Q.push_back(arr1[i][j]+arr2[i][j]);
        }
         answer.push_back(Q);
        Q.clear();
    }
    return answer;
}
```

- 배열의 파라미터 사이즈만큼 반복해서 돌리고 단일 배열에 먼저 값을 넣은 후 만들어진 배열을 다시 넣어서 사용.
