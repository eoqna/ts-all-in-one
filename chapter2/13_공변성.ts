// 공변성, 반공변성
// 함수간에 서로 대입할수 있냐 없냐를 구분하는 것

// 매개변수는 좁은 타입으로만 대입되지만 return은 넓은타입으로만 대입된다.
function convert(x: string | number): number {
  return +x;
}

convert("1");

type convertA = (x: string) => number;
let convertB: convertA = convert;

// function convert(x: string): number | string {
//   return +x;
// }

// type convertA = (x: string) => number;
// const convertB: convertA = a;

interface Axios {
  get(): void;
}

// interface는 javaScript에서 못쓴다.
// 따라서, javaScript에서도 쓸 수 있고 interface와 비슷한 역할을 해주는 class를 사용하면 된다.
class CustomError extends Error {
  response?: {
    data: any;
  }
}
declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    // typeScript는 건망증이 심하니까 변수로 만들어서 type을 지정해주는 것이 좋다.
    // 직접 custom한 type은 1회성이다.
    // as도 any만큼 안좋은 것. 따라서, unknown 타입인 경우가 아닌 이상 as를 쓰지않는다.
    // type가드로 type을 좁혀놨으면 unknown 이더라도 as를 안써도 된다.
    if( err instanceof CustomError ) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }
});