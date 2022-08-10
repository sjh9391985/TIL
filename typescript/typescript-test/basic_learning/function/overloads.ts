/**
 *
 * 타입스크립트 오버로드
 * 매개변수 타입과 반환 타입이 다른 여러 함수를 가질 수 있는 것을 의미.
 */

function add(a: string, b: string): string; // 함수선언
function add(a: number, b: number): number; // 함수선언
function add(a: any, b: any): any {
  return a + b;
}

add("hello", "world~");
add(1, 2);
// add("hello", 2); Error, 오버로드에 맞지 않음.

/**
 *
 * 인터페이스나 타입 별칭 등의 메소드 정의에서도 오버로드를 활용가능함.
 */

interface IUser {
  name: string;
  age: number;
  getData(x: string): string[];
  getData(x: number): string;
}

let user: IUser = {
  name: "Neo",
  age: 36,
  getData: (data: any) => {
    if (typeof data === "string") {
      return data.split("");
    } else {
      return data.toString();
    }
  },
};

user.getData("Hello"); // ['h','e','l','l','o'];
user.getData(123); // '123'
