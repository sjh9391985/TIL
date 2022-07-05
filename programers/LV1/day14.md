## 프로그래머스 - 코딩테스트 연습 - 예산(LV.1)

### 문제

```
문제 설명
S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

제한사항
d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

```

- 입출력 예
  | d | budget | result |
  | ------------- | ---------------- | ---------------- |
  | [1,3,2,5,4] | 9 | 3 |
  | [2,2,3,3] | 10 | 4 |

### 풀이

1. 풀이방식(1)

```
#include <iostream>
#include <stdio.h>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> d, int budget) {
    int answer = 0;
    int count = 0;
    sort(d.begin(), d.end());
    if(d.size() >= 1 && d.size() <= 100){
        for(int temp : d){
            answer += temp;
            if(answer > budget){
                break;            
            }
            count++;
        }    
    }
    return count;
}
```

### 풀이에 대한 이유

- 파라미터로 들어오는 배열의 값을 내림차순으로 정렬
- 정렬 후 배열의 크기만큼 반복을 해서 더하여 배열의 값이 예산을 초과할 경우 반복을 멈추고 계수가 된 배열의 갯수를 return 해줌.

<hr/>

### 다른 사람 풀이

```
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> d, int budget) {
    sort(d.begin(), d.end());
    int i;
    for (i = 0; (budget=budget-d[i]) >= 0 && i < d.size(); i++) ;
    return i;
}
```

- 먼저 파라미터로 들어오는 배열을 내림차순으로 정렬
- 이후 배열의 크기와 예산이 0 이하로 될때까지 반복을 하여 증가한 i의 수를 return 해줌.