/**
 *
 * 옵셔널 체이닝을 통한 '?.' undefined 문제해결
 */

/**
 *
 * obj?.prop;
 * obj?.[expr]
 * arr?.[index]
 * func?.(args)
 */

// Error, Object is 'undefined'
function toString(str: string | undefined) {
  return str.toString();
}

// Type assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

// Optional chaining
function toString(str: string | undefined) {
  return str?.toString();
}

// && 연산자를 사용해 각 속성을  nullish 체크하는 부분에서 유용함.

/**
 * //Before
 * if (foo && foo.bar && foo.bar.baz) {}
 *
 * // After
 * if (foo?.bar?.baz) {}
 */
