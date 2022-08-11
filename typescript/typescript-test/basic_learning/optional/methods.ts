/**
 *
 * '?' 키워드를 속성과 메소드 타입 선언에도 사용할 수 있음.
 */

interface IUser {
  name: string;
  age: number;
  isAdult?: boolean;
}

let user1: IUser = {
  name: "neo",
  age: 123,
  isAdult: true,
};

let user2: IUser = {
  name: "even",
  age: 456,
};

interface IUser {
  name: string;
  age: number;
  isAdult?: boolean;
  validate?(): boolean;
}

/**
 *
 * type이나 class에서도 사용할 수 있음.
 */

type TUser = {
  name: string;
  age: number;
  isAdult?: boolean;
  validate?(): boolean;
};

abstract class CUser {
  abstract name: string;
  abstract age: number;
  abstract isAdult?: boolean;
  abstract validate?(): boolean;
}
