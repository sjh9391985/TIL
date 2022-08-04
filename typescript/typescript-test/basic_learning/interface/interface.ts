/**
 *
 * 인터페이스
 * 타입스크립트 여러 객체를 정의하는 일종의 규칙, 구조
 */

interface IUser11 {
  name: string;
  age: number;
  isAdult: boolean;
}

let user1: IUser11 = {
  name: "Neo",
  age: 123,
  isAdult: true,
};

/**
 * 
 * 인터페이스 조건에 맞지 않음.
    let user2: IUser11 = {
    name: "Neo",
    age: 123,
    };
 * 
 */

/**
 *
 * ? : 선택적으로 속성 정의
 * 선택적 속성: 필수가 아닌 속성으로 정의하는 방법
 */

interface IUser12 {
  name: string;
  age: number;
  isAdult?: boolean;
}

let uset3: IUser12 = {
  name: "Son",
  age: 27,
  //isAdult 는 선택
};
