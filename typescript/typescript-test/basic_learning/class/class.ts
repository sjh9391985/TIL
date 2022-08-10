/**
 *
 * 클래스란
 * 클래스의 생성자 메소드와 일반 메소드 멤버와 다르게, 속성은 name: string; 같이 클래스 바디에 별도로 타입을 선언
 */

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}`;
  }
}
let cat: Cat;
cat = new Cat("Lucy");
console.log(cat.getName()); // Cat name is Lucy
