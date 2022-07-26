## 프로그래머스 - 코딩테스트 연습 - 최소직사각형/완전탐색(LV.1)

### 문제

```
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

제한사항
sizes의 길이는 1 이상 10,000 이하입니다.
sizes의 원소는 [w, h] 형식입니다.
w는 명함의 가로 길이를 나타냅니다.
h는 명함의 세로 길이를 나타냅니다.
w와 h는 1 이상 1,000 이하인 자연수입니다.
```

- 입출력 예
  | 명함 번호 | 가로 길이 | 세로 길이 |
  | ------------- | ---------------- | ---------------- |
  | 1 | 60 | 50 |
  | 2 | 30 | 70 |
  | 3 | 60 | 30 |
  | 4 | 80 | 40 |

  

### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<vector<int>> sizes) {
    vector<int> r;
    vector<int> l;
    for(int i = 0; i < sizes.size(); i++){
        for(int j = 0; j < sizes[i].size(); j++){
            (j % 2 != 0) ? l.push_back(sizes[i][j]) : r.push_back(sizes[i][j]);
        }
    }
    int temp = 0;
    for(int i = 0; i < r.size(); i++){
        if(r[i] < l[i]){
            temp = r[i];
            r[i] = l[i];
            l[i] = temp;
        }
    }
    sort(r.rbegin(), r.rend());
    sort(l.rbegin(), l.rend());
    return r[0] * l[0];
}
```

### 풀이에 대한 이유

- 가로길이와 세로길이의 값을 각각 비교해서 더 큰 값을 한쪽으로 이동.
- 이동 후 가로의 가장 큰 길이와 세로의 가장 큰 길이를 곱셉을 하여 값을 도출하면 됨.

<hr/>

### 다른 사람 풀이

```
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> sizes)
{
    int answer=0;

    int w=0, h=0;
    for(int i=0; i<sizes.size(); i++)
    {
        w=max(w,min(sizes[i][0],sizes[i][1]));
        h=max(h,max(sizes[i][0],sizes[i][1]));
    }
    answer=w*h;

    return answer;
}
```

- 배열의 크기만큼 반복을 하는데, 한쪽에는 가장 작은 값중에서 큰 값을 나머지는 가장 큰 값중에서 큰 값을 구하여 곱을 함