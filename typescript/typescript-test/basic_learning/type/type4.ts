/**
 *
 * Void
 * 일반적으로 값을 반환하지 않는 함수에서 사용
 * void 위치는 함수가 반환 타입을 명시하는 곳
 */

const hello = (msg: string): void => console.log(`Hello ${msg}`);

const hi: void = hello("world!"); // return: Hello world!
console.log(hi); // 값을 반환하지 않는 함수는 실제로 undefined를 반환함.

//hello1 = (msg: string): undefined => console.log(`Hello ${msg}`);

/**
 *
 * Never
 * 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용불가
 */

const error = (msg: string): never => {
  throw new Error(msg);
};

const never: [] = [];
// never.push(3); => 빈 배열 타입으로 잘못 선언한 경우, Never를 볼 수 있음.

/**
 *
 * Union
 * 2개 이상의 타입을 허용하는 경우
 * '|' 를 통해 타입을 구분하며 '()'는 선택사항
 */

let union: string | number;
union = "Hello type!";
union = 123;
// union = false; => Error

/**
 *
 * Intersection
 * &를 사용해 2개 이상의 타입을 조합하는 경우, 인터섹션이라고 함.
 * 새로운 타입을 생성하지 않고 기존의 타입들을 조합할 수 있기 때문에 유용하지만, 자주 사용X
 */

interface User {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const son: User = {
  name: "son",
  age: 27,
  // isValid: true; => Error
};

const u: User & Validation = {
  name: "son",
  age: 27,
  isValid: true,
};

/**
 *
 * Function: 함수
 */

let myFunc: (arg1: number, arg2: number) => number;

myFunc = function (x, y) {
  return x + y;
};

let yourFunc: () => void;
yourFunc = function () {
  console.log("Hello World~");
};
