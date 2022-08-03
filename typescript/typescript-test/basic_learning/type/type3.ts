/**
 *
 * Any: 모든 타입
 * 모든 타입을 의미함
 * 일반적인 자바스크립트 변수와 동일하게 어떤 타입의 값도 할당할 수 있음
 * 외부 자원을 활용해 개발시 불가피하게 타입을 단언할 수 없을 경우, 유용하게 사용가능
 */
let any: any = 123;
any = "Hello World!";
any = {};
any = null;

/**
 *
 * 다양한 값을 포함하는 배열을 나타낼때 사용
 * 강한 타입 시스템을 유지하기 위해선 Any 사용을 금지: 옵션으로 "noImplicitAny" : true 를 통해 Any 사용 시 에러를 발생 시킬 수 있음.
 */
const list: any[] = [1, true, "anything"];

/**
 *
 * 알 수 없는 타입: Unknown
 * Any와 같이 최상위 타입인 Unknown은 알 수 없는 타입을 의미함.
 * Any와 같이 Unknown에는 어떤 타입의 값도 할당할 수 있지만, Unknown을 다른 타입에 할당할 수 없음
 */

let a1: any = 123;
let u1: unknown = 123;

let v1: boolean = a1;
// let v2: number = u1; => 알 수 없는 타입은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없음.

let v3: any = u1; // any에 unknown 타입 할당은 가능
let v4: number = u1 as number; // 타입을 단언할 경우 할당가능

/**
 *
 * Unknown 타입보단 좀 더 명확한 타입을 사용하는것을 권장
 

type Result =
  | {
      success: true;
      value: unknown;
    }
  | {
      success: false;
      error: Error;
    };

export default function getItems(user: IUser): Result {
  if (id.isValid) {
    return {
      success: true,
      value: ["Apple", "Banana"],
    };
  } else {
    return {
      success: false,
      error: new Error("Invalid user"),
    };
  }
}
*/

/**
 *
 * Object : 객체
 * 기본적으로 typeof 연산자가 "object"로 반환하는 모든 타입을 나타냄
 * 컴파일러 옵션에서 엄격한 타입 검사(strict)를 true로 설정하면, null은 포함되지 않음
 *
 * 여러 타입이 상위 타입이기 때문에 그다지 유용하지는 않음.
 */

let obj: object = {};
let arr: object = [];
let func: object = () => {};
// let nullValue: object = null; => null 할당 X
let date: object = new Date();

/**
 *
 * 보다 정확한 타입 지정을 위해 객체 속성들에 대한 타입을 개별적으로 지정가능
 */
let userA: { name: string; age: number } = {
  name: "Son",
  age: 27,
};

let userB: { name: string; age: number } = {
  name: "Son",
  age: 27,
  // age: false => Error
  // email: 'sjh9391985@naver.com' => Error
};

/**
 *
 * 반복적으로 사용을 할 경우: interface 혹은 type를 사용하는 것을 추천
 */
interface IUser1 {
  name: string;
  age: number;
}

let userA1: IUser1 = {
  name: "Son",
  age: 27,
};

/**
 * 
 * Null, Undefined
 * Null, Undefined는 모든 타입의 하위 타입
 * 서로의 타입에 할당이 가능함
 * => 막상해보면 안됨? 

let num2: number = undefined;
let str2: string = null;
let obj2: { a: 1, b: false } = undefined;
let arr2: any[] = null;
let und2: undefined = null;
let nul2: null = undefined;
let voi2: void = null;
 */
