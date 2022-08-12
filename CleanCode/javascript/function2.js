/**
 *
 * 규칙.11
 * 명령형 프로그래밍보다 함수형 프로그래밍을 지향하세요.
 */

// 안 좋은 예
const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500,
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500,
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150,
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000,
  },
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// 좋은 예
const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500,
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500,
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150,
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000,
  },
];

const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, INNITIAL_VALUE);

/**
 *
 * 규칙.12
 * 조건문을 캡슐화
 */

// 안 좋은 예
if (fsm.state === "fetching" && isEmpty(listNode)) {
}

// 좋은 예
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
}

/**
 *
 * 규칙.13
 * 부정조건문 사용을 지양
 */

// 안 좋은 예
function isDomNodeNotPresent(node) {}

if (!isDomNodeNotPresent(node)) {
}

// 좋은 예
function isDomNodePresent(node) {}
if (isDomNodePresent(node)) {
}

/**
 *
 * 규칙.14
 * 조건문 작성을 피하기
 * 하나의 함수는 하나의 일을 하는 것이 이상적.
 */

// 안 좋은 예
class Airplane {
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

// 좋은 예

class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}

/**
 *
 * 규칙.15
 * 타입-체킹 [1]
 * 타입-체킹 말고도 다양한 화를 피할 많은 방법들이 존재함. 일관성 있는 API를 사용하는것.
 */

// 안 좋은 예
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location("texax"));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location("texax"));
  }
}

// 좋은 예
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location("texax"));
}

/**
 *
 * 규칙.16
 * 타입-체킹 [2]
 * Typescript 추천
 */

// 안 좋은 예
function combine(val1, val2) {
  if (
    (typeof val1 === "number" && typeof val2 === "number") ||
    (typeof val1 === "string" && typeof val2 === "string")
  ) {
    return val1 + val2;
  }

  throw new Error("Must be of type String or Number");
}

// 좋은 예
function combine(val1, val2) {
  return val1 + val2;
}
