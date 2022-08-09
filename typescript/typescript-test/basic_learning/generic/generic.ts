/**
 *
 * 재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공함.
 *
 * 타입을 인수로 받아서 사용한다고 생각하면 됨.
 */

function toArray(a: number, b: number): number[] {
  return [a, b];
}

toArray(1, 2);
// toArray('1', '2');  , Error

/**
 *
 * 범용적으로 만들기 위해서 유니언 방식을 사용.
 *
 */

function toArray1(a: number | string, b: number | string): (number | string)[] {
  return [a, b];
}

toArray1(1, 2);
toArray1("1", "2");
toArray1(1, "2"); // => 가독성이 떨어짐.

/**
 *
 * Generic 사용
 * 함수 이름 우측에 <T> 작성해서 사용
 * T는 타입변수로 사용자가 제공한 타입으로 변환될 식별자
 * 타입 변수는 매개 변수처럼 원하는 이름으로 지정할 수 있음.
 */

function toArray2<T>(a: T, b: T): T[] {
  return [a, b];
}

toArray2<number>(1, 2);
toArray2<string>("1", "2");
toArray2<string | number>(1, "2");
// toArray2<number>(1,'2') Error!

/**
 *
 * 타입 추론 사용
 * 사용 시점에 타입을 제공하지 않을 수 있음.
 */

function toArray3<T>(a: T, b: T): T[] {
  return [a, b];
}
toArray3(1, 2);
toArray3("1", "2");
// toArray3(1,'2') , Error
