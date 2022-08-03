/**
 *
 * 타입 단언
 * 타입 추론을 통해 판단할 수 있는 타입의 범주를 넘는 경우, 더 이상 추론하지 않도록 지시가능
 *
 * val: 유니언 타입
 * isNumber: 이름을 통해 숫자 여부를 확인하는 값
 * => true 일 경우, val 은 숫자이며 toFixed를 사용가능
 * => 아래의 코드에서는 isNumber 만으로 추론이 불가능하기에 toFixed 사용을 할 수 없는 에러가 발생
 */

const someFunc = (val: string | number, isNumber: boolean) => {
  if (isNumber) {
    // val.toFixed(2); => Error

    (val as number).toFixed(2); // JSX를 사용하는 경우 특정 구문 파싱에서 문제가 발생, .tsx 파일에서는 사용불가
  }
};

/**
 *
 * Non-null 단언 연산자
 * ! 단언 연산자를 통해 피연산자가 Nullish 값이 아님을 단언할 수 있는데, 변수나 속성에서 간단히 사용할 수 있기에 유용함
 *
 */
const fn = (x: number | null | undefined) => {
  return x!.toFixed(2);
};
