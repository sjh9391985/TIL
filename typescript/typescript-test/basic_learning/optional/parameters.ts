/**
 *
 * 매개 변수
 * '?' 키워드를 사용하여 타입을 선언시 선택적 매개변수를 지정할 수 있음.
 */

function add(x: number, y?: number): number {
  return x + (y || 0);
}
const sum = add(2);
console.log(sum); // 2

// '?' 키워드는  |undefined를 추가하는 것과 같음.
// const sum = add(2,undefined)
