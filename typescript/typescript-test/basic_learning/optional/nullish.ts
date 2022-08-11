/**
 *
 * nullish 병합 연산자
 * 일반적으로는  || 를 사용해 falsy 체크(를 하는 경우가 많음.
 *
 * 0이나 "" 값을 유효 값으로 사용하는 경우 원치 않는 결과가 발생할 수 있는데, 이럴 때 유용한 nullish 병합 연산자 ?? 를 타입스크립트에서 지원
 */

const foo = null ?? "Hello nullish";
console.log(foo); // Hello nullish

const bar = false ?? true;
console.log(bar); // false

const baz = 0 ?? 12;
console.log(baz); // 0
