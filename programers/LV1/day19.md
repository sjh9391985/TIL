## 프로그래머스 - 코딩테스트 연습 - 소수 만들기(LV.1)

### 문제

```
문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
```

- 입출력 예
  | nums | result |
  | ------------- | ---------------- |
  | [1,2,3,4] | 1 | 
  | [1,2,7,6,4] | 4 |
  
### 풀이

1. 풀이방식(1)

```
#include <vector>
#include <iostream>
#include <cmath>
using namespace std;

bool sosu(int num) {
	if (num < 2) return false;
	int a = (int) sqrt(num);
	for (int i = 2; i <= a; i++) if (num % i == 0) return false;
	return true;
}

int solution(vector<int> nums) {
    
    vector<int> store;
    int count = 0;
    for(int i = 0; i < nums.size()-2; i++){
        for(int j = i+1; j < nums.size()-1; j++){
            for(int k = j+1; k < nums.size(); k++){
                int sosu_value = nums[i] + nums[j] + nums[k];
                if(sosu(sosu_value)){
                    count++;
                } 
            }
        }
    }
    return count;
}
```

### 풀이에 대한 이유

- 배열안의 3개의 값을 더한것을 먼저 전부 찾는다.
- 더한 배열 값 중에서 소수인것을 다시 찾아서 찾은 갯수만큼 개수를 해주면된다.