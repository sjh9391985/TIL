/**
 *
 * 조건부 타입
 * 제약 조건과 다르게 '타입 구현' 영역에서 사용하는 extends는 삼항 연산자를 사용할 수 있음.
 */

type UU = string | number | boolean;

// type 식별자 = 타입 구현
type MyT<T> = T extends U ? string : never;

// interface 식별자 {타입 구현}
interface IUser1<T> {
  name: string;
  age: T extends U ? number : never;
}

// T는 boolean 타입으로 제한
interface IUser2<T extends boolean> {
  name: string;
  age: T extends true ? string : number; // 'T'의 타입이 true인 경우 string, 아닌 경우 number 반환
  isString: T;
}

const str: IUser2<true> = {
  name: "Neo",
  // age: 12, String
  age: "12",
  isString: true,
};

const num: IUser2<false> = {
  name: "son",
  age: 12,
  isString: false,
};

/**
 *
 * infer
 * 타입 변수의 타입 추론여부를 확인할 수 있음
 *
 * 타입 변수 R은 MyT2에서 받은 타입 number가 되고 infer 키워드를 통해 타입 추론이 가능한지 확인.
 * number 타입은 당연히 타입 추론이 가능하니 R은 반환하게 됨.
 */

type MyT2<T> = T extends infer R ? R : null;

const a: MyT2<number> = 123;
