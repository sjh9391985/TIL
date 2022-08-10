/**
 *
 * 함수
 * this
 * 함수 내 this는 전역 객체를 참조하거나, undefined가 되는 등 원하는 콘텍스트를 읽고 다른 값이 되는 경우들이 있음.
 */

const obj1 = {
  a: "Hello~",
  b: function () {
    console.log(this.a); // obj.a

    function b() {
      console.log(this.a); // global.a
    }
  },
};

/**
 *
 * 호출하지 않은 메소드를 사용하는 경우 this로 인한 문제가 발생
 * 객체 데이터 obj에서 b 메소드는 a 속성을 this를 통해 참조함.
 */

const obj2 = {
  a: "Hello~",
  b: function () {
    console.log(this.a);
  },
};

obj2.b(); // Hello~
const b = obj2.b;
b(); // a를 읽을 수 없음.

function someFn(cb: any) {
  cb();
}

someFn(obj2.b); // a를 읽을 수 없음.

/**
 *
 * bind 메소드 사용하여 this 직접 연결
 */

obj2.b(); // Hello~
const b2 = obj2.b.bind(obj2);
b2(); // Hello~

function someFn1(cb: any) {
  cb();
}

someFn(obj2.b.bind(obj2)); // Hello~

/**
 *
 * 화살표 함수 사용방법
 */

obj2.b();

const b3 = () => obj2.b();
b3();

function someFn2(cb: any) {
  cb();
}
someFn(() => obj2.b); //Hello~

/**
 *
 * 클래스의 메소드 멤버를 정의하는 경우, 프로토타입 메소드가 아닌 화살표 함수 사용가능.
 */

class Cat {
  constructor(private name: string) {}
  getName = () => {
    console.log(this.name);
  };
}

const cat = new Cat("Lucy");
cat.getName(); // Lucy

const getName = cat.getName;
getName();

function someFn3(cb: any) {
  cb();
}
someFn3(cat.getName); // 'Lucy'

/**
 *
 * 명시적 this
 */

interface ICat {
  name: string;
}

const cat2: ICat = {
  name: "Lucy",
};

function someFn4(greeting: string) {
  console.log(`${greeting} ${this.name}`); // Error
}

someFn4.call(cat, "Hello");

function someFn5(this: ICat, greeting: string) {
  console.log(`${greeting} ${this.name}`);
}

someFn4.call(cat, "Hello"); // Hello Lucy
