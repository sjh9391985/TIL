/**
 *
 * interface class type
 * 클래스를 정의하는 경우는 implements 키워드를 사용
 */

interface USER {
  name: string;
  getName(): string;
}

class User implements USER {
  constructor(public name: string) {}
  getName(): string {
    return this.name;
  }
}
const neo = new User("Neo");

neo.getName(); // => Neo

/**
 *
 * 정의한 클래스를 인수로 사용하는 경우
 */

interface ICat {
  name: string;
}

class Cat implements ICat {
  constructor(public name: string) {}
}

function makeKitten(c: ICat, n: string) {
  return new c(n);
}
const kitten = makeKitten(Cat, "Lucy");
console.log(kitten);
