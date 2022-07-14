## 프로그래머스 - 코딩테스트 연습 - 완주하지 못한 선수(LV.1)

### 문제

```
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
```

- 입출력 예
  | participant | completion | return |
  | ------------- | ---------------- | ---------------- |
  | ["leo", "kiki", "eden"] | ["eden", "kiki"] | "leo" | 
  | ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko" |
  | ["mislav", "stanko", "mislav", "ana"] | ["stanko", "ana", "mislav"] | "mislav" |
  
### 풀이

1. 풀이방식(1)

```
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    
    sort(participant.begin(), participant.end());
    sort(completion.begin(), completion.end());
    
    for(int i = completion.size()-1; i >= 0; i--){
        if (participant.back() != completion[i]){
            cout  << completion[i] << endl;
            return participant.back();
            break;
        } else {
            participant.pop_back();    
        }
    }
    answer = (answer.empty()) ? participant[0] : "";
    return answer;
}
```

### 풀이에 대한 이유

- 먼저 참가자, 완주자 vector를 오름차순 정렬을 해준다.
- 이후 정렬된 완주자 vector의 크기만큼 뒤에서 부터 참가자의 값과 비교해서 다를 경우에는 해당 참가자의 값을 return
- 뒤에서부터 모든 값이 같을 경우 마지막 첫번째 배열 하나가 남는데 전부 같으면 첫번째 것을 return 해주면된다.