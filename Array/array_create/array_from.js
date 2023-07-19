/* ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아
배열로 변환하여 반환한다. */

// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" }); // -> ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from("Hello"); // -> ['H','e','l','l','o']

/* Array.from을 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.
Array.from 메서드는 두 번째 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소값과
인덱스를 순차적으로 전달하면서 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다. */

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
Array.from({ length: 3 }); // [undefined,undefined,undefined]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
Array.from({ length: 3 }, (_, i) => i); // -> [0, 1, 2]

/* 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근랑 수 있고 length 프로퍼티를 갖는
객체를 말한다. 유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다. */

// 유사 배열 객체
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3, //length는 생략 불가능
};

// 유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다.
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

//------------------------------
var abc = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

var arr = Array.from(abc, (x) => x * x);
console.log(arr);
