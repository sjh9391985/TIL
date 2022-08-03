/**
 *
 * Tuple: 튜플
 * 배열과 유사하지만 정해진 타입의 고정된 길이 배열을 표현
 */

let tuple: [string, number];
tuple = ["a", 1];
//tuple = ['a', 1, 2]; => Error
//tuple = [1, 'a']; => Error

let userId: number = 1234;
let userName: string = "Son";
let isValid: boolean = true;

let user: [number, string, boolean] = [1234, "Son", true];
console.log(user[0]); // 1234
console.log(user[1]); // Son
console.log(user[2]); // true

/**
 *
 * 2차원 배열사용
 */
let users1: [number, string, boolean][];
let users2: Array<[number, string, boolean]>;

users1 = [
  [1, "Neo", true],
  [2, "Even", false],
];
users2 = [
  [1, "Neo", true],
  [2, "Even", false],
];

/**
 *
 * 값으로 타입 대신사용
 */

let tuple1: [1, number];
tuple1 = [1, 2];
tuple1 = [1, 3];
// tuple1 = [2, 2]; => Error

/**
 *
 * Tuple은 정해진 타입의 고정된 길이 배열을 표현하지만, 이는 할당에 국한됨
 * .push()나 .splice() 등을 통해 값을 넣는 행위를 막을 수 없음
 */

let tuple2: [string, number];
tuple2 = ["a", 1];
tuple2 = ["b", 2];
tuple2.push(3);
console.log(tuple2); // => ['b', 2, 3];
// tuple2.push(true) => Error, 타입 할당 X

/**
 *
 * readonly : 읽기 전용 튜플 생성
 */
let a: readonly [string, number] = ["Hello", 123];
// a[0] = 'World'; => Error, only read

/**
 *
 * Enum: 열거형
 * 숫자 or 문자열 값 집합에 이름을 부여할 수 있는 타입
 * 값의 종류가 일정한 범위로 정해져 있는 경우 유용함
 * 기본적으로 0부터 시작하며 값은 1씩 증가
 */

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

/**
 *
 * Enum 값 매핑
 */
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
console.log(Color.Red); // red
console.log(Color["Green"]); // green
