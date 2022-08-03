/**
 *
 * 타입 가드
 * 타입을 매번 보장하기 위해 타입 단언을 여러 번 사용하게 되는 경우가 있는데
 * 타입 가드를 제공하면 타입스크립트가 추론 가능한 특정 범위에서 타입을 보장할 수 있음
 * Name is TYPE 형태의 타입 술부를 반환 타입으로 명시한 함수
 */

const isNumber = (val: string | number): val is number => {
  return typeof val === "number";
};

const someFunc1 = (val: string | number) => {
  if (isNumber(val)) {
    val.toFixed(2);
    isNaN(val);
  } else {
    val.split("");
    val.toUpperCase();
    val.length;
  }
};

// 기존 예제와 같이 `isNumber`를 제공(추상화)하지 않아도 `typeof` 연산자를 직접 사용하면 타입 가드로 동작합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof
function someFuncTypeof(val: string | number) {
  if (typeof val === "number") {
    val.toFixed(2);
    isNaN(val);
  } else {
    val.split("");
    val.toUpperCase();
    val.length;
  }
}

// 별도의 추상화 없이 `in` 연산자를 사용해 타입 가드를 제공합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in
function someFuncIn(val: any) {
  if ("toFixed" in val) {
    val.toFixed(2);
    isNaN(val);
  } else if ("split" in val) {
    val.split("");
    val.toUpperCase();
    val.length;
  }
}

// 역시 별도의 추상화 없이 `instanceof` 연산자를 사용해 타입 가드를 제공합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof
class Cat {
  meow() {}
}
class Dog {
  woof() {}
}
function sounds(ani: Cat | Dog) {
  if (ani instanceof Cat) {
    ani.meow();
  } else {
    ani.woof();
  }
}
