/**
 *
 * 규칙.1
 * 함수 인자는 2개 이하가 이상적
 * - 매개변수의 개수를 제한하는 것은 함수 테스트를 쉽게 만들어 줌.
 * - 함수가 기대하는 속성을 좀 더 명확히 하기 위해선 es6의 비구조화 구문을 사용할 수 있음.
 *      장점1: 함수의 시그니쳐를 볼 때 어떤 속성이 사용되는지 즉시 알 수 있음.
 *      장점2: 비구조화 함수에 전달된 인수 객체의 지정된 기본타입 값을 복제하며 사이드 이펙트가 일어나는 것을 방지함.
 *      장점3: Linter를 사용시 사용하지않는 인자에 대해 경고해주거나 비구조화 없이 코드를 짤 수 없게 할 수 있음.
 */

// 안 좋은 예

function createMenu(title, body, buttonText, cancellable) {}

// 좋은 예

function createMenu({ title, body, buttonText, cancellable }) {}
createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});

/**
 *
 * 규칙.2
 * 함수는 하나의 행동만 해야함.
 * 하나의 함수가 하나의 행동을 정의하는 것이 가능해지면, 함수는 좀 더 고치기 쉬워지고 코드들은 읽기 쉬워짐
 */

// 안 좋은 예
function emailClients(clients) {
  clients.array.forEach((client) => {
    const clientRecord = database.lookup(client);

    if (clientRecord.isActive()) {
      emailClients(client);
    }
  });
}

// 좋은 예
function emailClient(clients) {
  clients.filter(isClientActive).forEach(email);
}

function isClientActive(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

/**
 *
 * 규칙.3
 * 함수명을 통해 함수의 작동을 알 수 있어야함.
 */

// 안 좋은 예
function AddToDate(date, month) {}

const date = new Date();
AddToDate(date, 1);

// 좋은 예
function AddMonthToDate(date, month) {}
const date = new Date();
AddToDate(date, 1);

/**
 *
 * 규칙.4
 * 함수는 단일 행동을 추상화 해야함.
 * 추상화된 이름이 여러 의미를 내포하고 있다면 그 함수는 많은 일을 하게끔 설계된것.
 * 함수들을 나눠서 재사용가능하고 테스트하기 쉽게 만들것.
 */

// 안 좋은 예
function parseBetterJSAlternative(code) {
  const REGEXES = [
    //...
  ];

  const statements = code.split(" ");
  const token = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  token.forEach((token) => {
    // ...
  });

  ast.forEach((node) => {});
}

// 좋은 예
function tokenize(code) {
  const REGEXES = [
    //...
  ];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push();
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push();
  });
  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {});
}

/**
 *
 * 규칙.5
 * 중복된 코드를 작성X
 *
 * - 중복 코드가 있다는 것은 어떤 로직을 수정해야 할 일이 생겼을 때 수정 해야 할 코드가 한 곳 이상이라는 것을 의미
 *
 */

// 안 좋은 예
function showDeveloperList(developers) {
  developers.forEach((developers) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}

function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const githubLink = employee.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

/**
 *
 * 규칙.6
 * Object.assign을 사용하여 기본 객체를 생성하기
 */

// 안 좋은 예
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true,
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// 좋은 예
const menuConfig = {
  title: "Order",
  // 유저가 'body' key의 value를 정하지 않았다.
  buttonText: "Send",
  cancellable: true,
};

function createMenu(config) {
  config = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true,
    },
    config
  );

  // config는 이제 다음과 동일합니다: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);

/**
 *
 * 규칙.7
 * 매개변수로 플래그를 사용하지 말것.
 * 플래그를 사용하는 것 자체가 함수가 한가지 이상의 역할을 하고 있다는 것을 의미함.
 * boolean 기반으로 함수가 실행되는 코드가 나뉠경우 함수를 분히할것.
 */

// 안 좋은 예
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// 좋은 예
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

/**
 *
 * 규칙.8
 * 사이드 이팩트 피하기 (part1)
 * 함수는 값을 받아서 일을 하거나 값을 리턴할 경우 사이드 이팩트를 만들어냄. 사이드 이팩트는 파일에 쓰여질 수도 있고, 전역 변수를 수정할 수 있으며, 실수로 모든 돈을 다른 사람에게 보낼 수 있음.
 * 어떠한 구조체 없이 객체 사이의 상태를 공유하거나, 무엇이든 쓸 수 있는 변경 가능한 데이터 유형을 사용하거나, 같은 사이드 이펙트를 만들어내는 것을 여러 개 만들거나 하면 안됨.
 */

// 안 좋은 예
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();
console.log(name); // ['Ryan', 'McDermott];

// 좋은 예
function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const name = "Ryan McDermott";
const newName = splitIntoFirstAndLastName(name);

console.log(name); // "Ryan McDermott"
console.log(newName); // ['Ryan', 'McDermott];

/**
 *
 * 규칙.8
 * 사이드 이팩트 피하기 (part2)
 * 기본타입 자료형은 값을 전달하고 객체와 배열은 참조를 전달함.
 */

// 안 좋은 예
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// 좋은 예
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};

/**
 *
 * 규칙.10
 * 전역 함수 사용 X
 * - 전역 환경을 사용하는것은 Js에서 나쁜 관행
 * - 다른 라이브러리간의 충돌
 */

// 안 좋은 예
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter((elem) => !hash.has(elem));
};

// 좋은 예
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter((elem) => !hash.has(elem));
  }
}
