/**
 *
 * 추상 클래스
 * 다른 클래스가 파생될 수 있는 기본 클래스로, 인터페이스와 굉장히 유사.
 * 클래스뿐만 아니라 속성, 메소드에도 사용가능
 * 직접 인스턴스를 생성할 수 없기 때문에 파생된 후손 클래스에서 인스턴스를 생성해야함.
 */

abstract class Animal {
  abstract name: string; // 파생된 클래스에서 구현해야함.
  abstract getName(): string; // 파생된 클래스에서 구현해야함.
}

class Cat extends Animal {
  constructor(public name: string) {
    super();
  }
  getName(): string {
    return this.name;
  }
}

// new Animal(); Error, 추상 클래스는 직접 인스턴스 생성이 불가

const cat = new Cat("Lucy");
console.log(cat.getName()); // Lucy

/**
 *
 * 추상 클래스는 인터페이스와 차이점이 속성이나 메소드 멤버에 대한 세부 구현이 가능하다는 점.
 */
interface IAnimal {
  name: string;
  getName(): string;
}

class Dog implements IAnimal {
  constructor(public name: string) {}
  getName(): string {
    return this.name;
  }
}
