/**
 *
 * Number: 숫자
 * 모든 부동 소수점 값을 사용가능
 * ES6에 도입된 2진수 및 8진수 리터럴도 지원
 */

let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

/**
 *
 * String: 문자열
 * 작은따옴표('), 큰따옴표("") 뿐 아니라 ES6의 템플릿 문자열도 지원함
 */

let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}`;
let yourColor: string = `Your color is` + green;

/**
 *
 * Array: 배열
 * 순차적으로 값을 가지는 일반 배열을 나타냄
 */

let fruit1: string[] = ["Apple", "Banana", "Mango"];
let fruit2: Array<string> = ["Apple", "Banana", "Mango"];
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
let oneToSix: number[] = [1, 2, 3, 4, 5, 6];

/**
 *
 * 유니언 타입
 * 문자열과 숫자를 동시에 가지는 배열을 선언가능
 * any[]: 배열이 가지는 항목의 값을 단언할 수 없을 경우
 */

let array1: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];
let array2: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];
let someArr: any[] = [0, 1, {}, [], "str", false];

/**
 *
 * 인터페이스, 커스텀 타입 사용
 */

interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}

let userArr: IUser[] = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
];

/**
 *
 * 읽기 전용 배열 생성
 */

let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [1, 2, 3, 4];

// arrA[0] = 123; => 읽기전용이기에 수정, 추가불가
// arrA.push(123); => 읽기전용이기에 수정, 추가불가
