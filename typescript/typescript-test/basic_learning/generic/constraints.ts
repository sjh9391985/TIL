/**
 *
 * 제약 조건
 *
 * 인터페이스나 타입 별칭을 사용하는 제네릭을 작성할 수 있음
 */

interface MyType<T> {
  name: string;
  value: T;
}

const dataA: MyType<string> = {
  name: "Data A",
  value: "Hello world",
};

const dataB: MyType<number> = {
  name: "Data B",
  value: 1234,
};

const dataC: MyType<boolean> = {
  name: "Data C",
  value: true,
};

const dataD: MyType<number[]> = {
  name: "Data D",
  value: [1, 2, 3, 4],
};

/**
 *
 * 타입변수 T가 string ,number인 경우만 허용하려면 extends 키워드를 사용하는 제약 조건을 추가가능
 */

type U = string | number | boolean;

// type 식별자 = 타입 구현
type MyType1<T extends U> = string | T;

// interface 식별자 {타입 구현}
interface IUser<T extends U> {
  name: string;
  age: T;
}
