/**
 *
 * 클래스 수식어
 * 타입스크립트와 관련된 클래스 수식어
 * 클래스 멤버에서 사용할 수 있는 접근제어자
 *
 * ---------------------------------------------------------------------------- *
 * public: 어디서나 자유롭게 접근 가능
 * protected: 나와 파생된 후손 클래스 내에서 접근 가능
 * private: 내 클래스에서만 접근 가능
 * ---------------------------------------------------------------------------- *
 *
 */

/**
 *
 * static : 정적으로 사용
 * readonly: 읽기 전용으로 사용
 */

class Animal {
  // public 수식어 사용 (생략가능)
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}

let cat = new Cat("Lucy");
console.log(cat.getName()); // Cat name is Lucy

cat.name = "Tiger";
console.log(cat.getName()); // Cat name is Tiger

/**
 *
 * protected 수식어 사용
 * 파생된 자식 클래스에서 this.~ 으로 참조할 수 있지만 인스턴스에서 접근 불가
 */

class Animal1 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Cat1 extends Animal1 {
  getName(): string {
    return `Cat name is ${this.name}`;
  }
}

let cat1 = new Cat("Lucy");
console.log(cat1.getName); // Cat name is Lucy

cat1.name = "Tiger"; // Error
console.log(cat1.getName()); // Error

/**
 *
 * private
 * 자식클래스에서 this.~ 으로 참조할 수 없고, 인스턴스에서도 접근 불가
 */
