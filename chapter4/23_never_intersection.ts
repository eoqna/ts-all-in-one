// never
type IsNever<T> = [T] extends [never] ? true : false;

// 위 코드와 같이 true 값을 반환한다.
// type IsNever<T> = { type: T} extends { type: never } ? true : false;

// type IsNever<T> = T extends never ? true : false;
// 이렇게 사용하면 neverA는 true가 아닌 never가 된다.
// type 매개변수와 union이 만나면 분배 법칙이 실행된다.
// never는 공집합이기 때문에 분배 법칙이 실행되지 않고 never를 반환한다.
// never extends never는 실행이 되지않고 never를 반환한다.
// * extends는 같다(==)는 뜻이 아니다.
type neverA = IsNever<never>;
type neverB = IsNever<boolean>;

interface VO {
  value: any;
};

// 객체를 직접 넣으면 잉여 속성 검사가 바로 일어나지만,
// 객체 리터럴이 아닌 참조를 넣으면 잉여 속성 검사가 일어나지 않아서 error가 발생하지 않는다.
const voObject = { value: "hi", what: 123 };
const voA: VO = voObject;

// T가 VO라고 생각하면 안되고 VO의 부분 집합이라고 생각해야 한다.
const returnVO = <T extends VO>(): T => {
  return { value: "test" };
};

// never도 boolean의 부분 집합이기 때문에 에러가 발생한다.
function onlyBoolean<T extends boolean>(arg: T = false): T {
  return arg;
};


// intersection
type Union<T> = T extends { a: infer U, b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2, b: 2 | 3 }>;

// 매개변수가 아닌 반환값으로 해도 똑같이 union이 된다.
// type Union<T> = T extends { a: () => infer U, b: () => infer U } ? U : never;
// type Result1 = Union<{ a: () => 1 | 2, b: () => 2 | 3 }>;


// 교집합을 구하기 위해 쓰는 방식
// infer를 같은 type 매개변수를 두는 경우
type Intersection<T> = T extends {
  a: (pa: infer U) => void,
  b: (pb: infer U) => void,
} ? U : never;
type Result2 = Intersection<{ a(pa: 1 | 2): void, b(pb: 2 | 3): void}>;


// 눈으로 보기에는 동작되는 코드같지만 TypeScript 컴파일러가 Type을 결정할 때 T extends string ? string : number 이 부분을 결정하지 못한다.
// T extends string ? string : number 부분을 가장 마지막으로 평가하기 때문에 반환 타입이 T extends string ? string : number로 고정된다.
// 꼭 return type이 아닌 경우에도 지연 평가가 발생할 수 있다.
// Conditional Type일 경우 발생한다.

function double<T extends string | number>(x: T): T extends string ? string : number{
  return x;
};

// 해결 방법
// 1. 배열을 사용해서 TypeScript가 지연 평가하는 부분을 막는다.
function double2<T extends ([T] extends [string] ? string : number)>
(x: T): [T] extends [string] ? string : number{
  return x;
};

// 2. as로 x값을 선언해준다
function double3<T extends string | number>(x: T): T extends string ? string : number{
  return x as any;
};