// 앰비언트 선언, 선언 병합

// 앰비언트 선언
declare namespace NS {
  const v: string;
};

declare enum Enum {
  Admin = 1
}

// 앰비언트 선언 병합
// 이름이 겹칠 수 있다.
// 앰비언트 선언한 선언끼리의 병합
// 생성자를 선언할 때 new가 붙어야 에러가 나지 않고
// 함수를 선언할 때 new가 붙으면 에러가 발생한다.
// 아래의 코드는 new를 붙이거나 안붙여도 에러가 나지않게 만든 코드이다.
declare class classA {
  constructor(name: string);
};
function classA(name: string) {
  return new classA(name);
};
new classA("zerocho");
classA("zerocho");


// 함수는 함수대로 사용하고
// 외부에 선언하면 선언이 병합된다.
function Ex() {
  return "hello";
};
namespace Ex {
  export const a = "world";
  export type B = number;
};

Ex(); // hello
Ex.a; // world
const exB: Ex.B = 123;


// 함수와 enum은 선언 병합이 불가능하기 때문에 error가 발생한다.
// enum은 enum끼리만 병합이 가능하다.
function Ex2() { return "hello"; };
enum Ex2 {}

// namespace에서 interface와 type은 js에서 사라진다.
// 사실상 아래의 코드는 namespace Example {} 과 같은 코드이다.
namespace Example {
  interface Inner {
    test: string;
  }
  type test2 = number;
}

// 변수를 넣어주면 js에서는 객체 형식이 된다.
// Example2 = { a: "hi" }
namespace Example2 {
  interface Inner {
    test: string;
  }
  type test2 = number;
  const a = "hi";
}
