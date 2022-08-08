/**
 *
 * 함수타입
 * 함수 타입을 인터페이스로 정의하는 경우, 호출 시그니처라는 것을 사용
 * 호출 시그니처는 함수의 매개 변수와 반환 타입을 지정함.
 */

/*  
    interface IName {
        (PARAMETER : PARAM_TYPE): RETURN_TYPE // call signature
    }
*/

interface IUser {
  name: string;
}

interface IGetUser {
  (name: string): IUser;
}

// 매개변수 이름이 인터페이스와 일피할 필요는 없음. 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있음.

const getUser: IGetUser = function (n) {
  return user;
};

getUser("Heropy");
