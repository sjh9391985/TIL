/**
 *
 * 규칙.1
 * 의미있고 발음하기 쉬운 변수 이름을 사용하기
 */

// 안좋은 예
const yyyymmdstr = momnet().format("YYYY/MM/DD");

// 좋은 예
const curentDate = momnet().format("YYYY/MM/DD");

/**
 *
 * 규칙.2
 * 동일한 유형의 변수에 동일한 어휘를 사용
 */

// 안좋은 예
getUserInfo();
getClientData();
getCustomerRecord();

// 좋은 예
getUser();

/**
 *
 * 규칙.3
 * 검색가능한 이름 사용
 * 코드를 읽기 쉽고 검색 가능하게 작성해야함.
 */

// 안좋은 예, 사용자의 의도를 알지 못함.
setTimeout(blastOff, 86400000);

// 좋은 예
// 대문자로 const 전역변수를 선언
const MILLISECONDS_IN_A_DAY = 8640000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

/**
 *
 * 규칙.4
 * 의도를 나타내는 변수들을 사용하기
 */

// 안 좋은 예
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

// 좋은 예

const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

/**
 *
 * 규칙.5
 * 자신만 알아볼 수 있는 작명 피하기
 */

// 안좋은 예
const locations = ["서울", "인천", "수영"];
locations.forEach((1) => {
   
});

// 좋은 예
locations.forEach(locations => {
    console.log(locations)
})


/**
 * 
 * 규칙.6
 * 문맥상 필요없는 것들을 쓰지말기
 */

// 안좋은 예
const Car = {
    carMake: 'BMW',
    carModel: 'M3',
    carColor: 'blue'
}
function paintCar(car) {
    car.carColor = 'red';
}

// 좋은 예
const Car = {
    make: 'BMW',
    model: 'M3',
    color: 'blue'
}
function paintCar(car) {
    car.color = 'red';
}

/**
 * 
 * 규칙.7
 * 기본 매개변수가 short circuiting 트릭이나 조건문보다 깔끔함.
 * 
 */

// 안좋은 예
function createMicroBrewery(name) {
    const breweryName = name || 'Hipster Brew Co.';
}

// 좋은 예
function createMicroBrewery(name = 'Hipster Brew Co.') {
    
}