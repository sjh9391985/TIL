/**
 *
 * 인텍싱 가능 타입
 * 인덱서의 타입은 string, number만 지정가능
 */
/*
interface INAME {
    [INDEXER_NAME: INDEXER_TYPE]: RETURN_TYPE;
}
*/

interface IItem {
  [itemIndex: number]: string; // index signiture
}

let item: IItem = ["a", "b", "c"];

console.log(item[0]); // 'a'
console.log(item[1]); // 'b'
console.log(item["0"]); // Error

/**
 *
 * 유니온 타입 사용가능
 */

interface IItem1 {
  [itemIndex: number]: string | boolean | number[];
}

/**
 *
 * keyof
 * 인덱싱 가능 타입에서 keyof를 사용하면 속성 이름을 타입으로 사용가능
 * 인덱싱 기능 타입의 속성 이름들은 유니온 타입으로 적용됨.
 */

interface ICountries {
  KR: "대한민국";
  US: "미국";
  CP: "중국";
}

let country: keyof ICountries;
country = "KR"; // ok
// country = 'RU'; Error
