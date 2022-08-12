/**
 *
 * 규칙.1
 * 클래스
 * - ES5의 함수보다 ES2015/ES6의 클래스를 사용하기
 * - 상속이 필요한 경우라면 클래스를 사용하는 것이 좋음.
 * - 크고 복잡한 객체가 필요한 경우가 아니라면 클래스보다 작은 함수를 사용할것.
 */

// 안 좋은 예
const Animal = function (age) {
  if (!(this instanceof Animal)) {
    throw new Error("Instantiate Animal with `new`");
  }

  this.age = age;
};

Animal.prototype.move = function () {};

const Mammal = function (age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error("Instantiate Mammal with `new`");
  }

  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function (age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error("Instantiate Human with `new`");
  }

  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};

// 좋은 예
class Animal {
  constructor(aeg) {
    this.age = age;
  }
    
    move()
}

class Mammal extends Animal{
    constructor(age, furColor) {
        super(age);
        this.furColor = furColor
    }

    liveBirth(){}
}

class Human extends Animal{
    constructor(age, furColor, languageSpoken) {
        super(age, furColor);
        this.languageSpoken = languageSpoken;
    }

    speak(){}
}

/**
 * 
 * 규칙.2
 * 메소드 체이닝 사용
 * 클래스 함수에서 단순히 모든 함수의 끝에 'this'를 리턴해주는것으로 클래스 메소드를 추가로 연결할 수 있음.
 * 
 */

class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car();
car.setColor('pink');
car.setMake('Ford');
car.setModel('F-150');
car.save();

// 좋은 예
class Car {
    constructor() {
        this.make = 'Honda';
        this.model = 'Accord';
        this.color = 'white';
    }

    setMake(make) {
        this.make = make;
        // 체이닝을 위해 this를 리턴해줌
        return this
    }

    setModel(model) {
        this.model = model;
        return this
    }

    setColor(color) {
        this.color = color;
        return this
    }

    save() {
        console.log(this.make, this.model, this.color);
        return this
    }
}
const car = new Car()
    .setColor('pink')
    .setMake('Ford')
    .setModel('F-150')
    .save();

/**
 * 
 * 규칙.3
 * 상속보단 조합을 사용할 것.
 * 
 * 조합보다 상속을 쓰는게 더 좋을 경우
 * 1. 상속관계가 has-a 관계가 아닌 is-a 관계일 경우(사람->동물, 유저->유저)
 * 2. 기반 클래스의 코드를 다시 사용할 수 있을 때
 * 3. 기반 클래스를 수정하여 파생된 클래스 모두를 수정하고 싶을 경우
 */

// 안 좋은 예
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// 안 좋은 이유: Employee 가 tax data를 가지고 있기 때문. EmployeeTaxData는 Employee 타입이 아님.
class EmployeeTaxData extends Employee {
    constructor(ssn, salary) {
        super();
        this.ssn = ssn;
        this.salary = salary;
    }
}

// 좋은 예 [조합 사용]
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
  
  // ...
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}