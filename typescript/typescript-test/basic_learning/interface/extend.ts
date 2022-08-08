/**
 *
 * 인터페이스도 클래스처럼 extends 키워드를 이용해 상속가능
 */

interface IAnimal {
  name: string;
}

interface ICat extends IAnimal {
  meow(): string;
}

class Cat implements ICat {
  meow(): string {
    return "MEOW~~";
  }
  name: "meow~~";
}

/**
 *
 * 같은 이름의 인터페이스도 여러 개 생성가능
 */

interface IFullName {
  firstName: string;
  lastName: string;
}

interface IFullName {
  middleName: string;
}

const fullName: IFullName = {
  firstName: "Tomas",
  middleName: "Sean",
  lastName: "Connery",
};
