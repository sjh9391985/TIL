/**
 *
 * 규칙.1
 * Getter, Setter를 사용하기
 */

// 안 좋은 예
function makeBankAccount() {
  return {
    balance: 0,
  };
}

const account = makeBankAccount();
account.balance = 100;

// 좋은 예

function makeBankAccount() {
  //private로 선언된 변수
  let balance = 0;

  // return를 통해 public으로 선언된 'getter'
  function getBalance() {
    return balance;
  }

  // return를 통해 public으로 선언된 'setter'
  function setBalance(amount) {
    balance = amount;
  }

  return {
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);

/**
 *
 * 규칙.2
 * 객체에 비공개 멤버 생성 - 클로져를 이용하면 가능함.
 */

// 안 좋은 예
const Employee = function (name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee("John Doe");
console.log(`Employee name : ${employee.getName()}`); // Employee name : John Doe

delete employee.name;
console.log(`Employee name : ${employee.getName()}`); // Employee name :

// 좋은 예
function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}

const employee = makeEmployee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
