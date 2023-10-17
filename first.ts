// 01 TypeScript Type
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;

const g: true = true;

const arr: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
const arr4: [number, number, string] = [1, 2, 'string'];

// function add( x: number, y: number ): number { return x + y };

// function add(x: number, y: number): number;

// function add(x, y) { return x + y };

let aa = 123;
aa = 'hello' as unknown as number;

// type Add = ( x: number, y: number ) => number;
// const add: Add = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

// tuple : 길이와 type이 정해진 배열
const tuple: [string, number] = ['1', 1];

// 02 TypeScript enum & typeof keyof

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
};

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const a1 = EDirection.Up;
const b1 = EDirection.Down;

const obj = { a: '123', b: '345', c: 'world' };
type Key = keyof typeof obj;

// 03 TypeScript interface & type

type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const zerocho: Human = { breath: true, breed: true, think: true };

interface A {
  breath: true
};

interface B extends A {
  breed: true
};

const bb: B = { breath: true, breed: true };

// 04 TypeScript Function

declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], el => { target.push(el) });
forEach([1, 2, 3], el => target.push(el));

interface D {
  talk: () => void;
};

const dd: D = {
  talk() { return 3 }
};

const ee = dd.talk();

// 05 TypeScript type gard

function numOrStr(a: number | string) {
  if(typeof a === 'number') {
    a.toFixed(1);

  } else {
    a.charAt(3);

  }

  if(typeof a === 'string') {
    a.charAt(3);
  }
};

numOrStr('123');
numOrStr(1);

function numOrNumArray(a: number | number[]) {
  if(Array.isArray(a)) { // number[]
    a.concat(4);

  } else { // number
    a.toFixed(3);
  }
};

numOrNumArray(123);
numOrNumArray([1, 2, 3]);

class AA {
  aaa() {}
};

class BB {
  bbb() {}
};

function aOrB(param: AA | BB) {
  if(param instanceof AA) {
    param.aaa();
  }
};

aOrB(new AA);
aOrB(new BB);

type BBB = {type: 'b', bbb: string}
type CCC = {type: 'c', ccc: string}
type DDD = {type: 'd', ddd: string}

function typeCheck(a: BBB | CCC | DDD) {
  if('bbb' in a) {
    a.bbb;
  } else if(a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
};

// 커스텀 타입 가드
interface Cat { meow: number };
interface Dog { bow: number };

function catOrDog( a: Cat | Dog ): a is Dog {
  if((a as Cat).meow) { return false }
  return true;
};

function pet(a: Cat | Dog) {
  if(catOrDog(a)) {
    console.log(a.bow)
  }
  if('meow' in a) {
    console.log(a.meow);
  }
};

// {} 와 object
const x: {} = 'hello';
const y: Object = 'hi'; // {}, Object : 모든 타입 (null, undefined 제외)
// const xx: object = 'hi'; // error : 참조하는 타입이 object 타입이 아니다.
const yy: object = {hello: 'world'}; // 실제 사용할 때는 object 지양, interface, type, class 사용
const z: unknown = 'hi';

// ts 4.8v 이상 :  unknown = {} | null | undefined
// unknown 타입도 모든 값을 대입할 수 있다. (any 보다 권장)
if(z) {
  z;
}

// readOnly, 인덱스드 시그니처, 맵드 타입스
interface AAA {
  readonly a: string;
  b: string;
}

const aaaa: AAA = {a: 'hello', b: 'world'};
// aaaa.a = '123'; // error : 읽기 전용 속성이므로 값을 바꿀 수 없다.

// 인덱스드 시그니처
type BBBBB = 'Human' | 'Mammal' | 'Animal'; // Key값을 정확하게 하고 싶을 때 사용한다.
type AAAAA = { [key in BBBBB ]: number }; // 들어가는 어떤 속성이든 간에 key의 타입도 string이고 value의 타입도 string이다.
// type AAAAA = { [key: string]: string }; // 들어가는 어떤 속성이든 간에 key의 타입도 string이고 value의 타입도 string이다.
// const aaaaa: AAAAA = { a: 'b', c: 'd' };
const aaaaa: AAAAA = { 'Human': 1, 'Mammal': 2, 'Animal': 7, };

// 추상에 의존하고, 구현에 의존하지 말라.
// class 객체 내에서 private, protect, public 을 사용할 수 있다.
class B2 implements AAA {
  readonly a: string = '123';
  // private readonly a: string = '123';
  b: string = 'world';
  c: string = 'wow';

  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

// 옵셔널, 제네릭 기본
function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);

// 옵셔널 : b는 있어도 되고 없어도 된다.
let obj2: {a: string, b?: string} = { a: 'hello', b: 'string' };
obj2 = {a: 'hello'};

// 제네릭 (return, 매개변수 모두 타입이 같은 경우 T라는(다른 알파벳 사용 가능) 타입을 지정해서 선언한다.)
// 만들어질 때는 type이 뭔지 모르지만 실제로 사용할 때 type이 정해진다.

// 'T'가 어떤 타입이든 선언할 수 있기 때문에 (true, false) 같은 것도 사용이 가능해진다.
// 따라서, 'T'에 extends로 type을 제한해서 사용해야 한다.
// function add<T extends number | string>(x: T, y: T): T {

// 제네릭을 여러 개 만들 수 있다.
function add<T extends number, K extends string>(x: T, y: K) {};

// add(1, 2);
// add('1', '2');

// add(true, false);
// add('1', 2);
// add('2', 1);
add(1, '2');

// forEach 직접 만들기
interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T, i: number) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
};

const forA: Arr<number> = [1, 2, 3];

forA.forEach((item, index) => {
  console.log(item, index);
  item.toFixed(1);
});
forA.forEach((item) => {
  console.log(item);
  return "3";
});

const forB: Arr<string> = ["1", "2", "3"];

forB.forEach((item) => {
  console.log(item);
  item.charAt(3);
});
forB.forEach((item) => {
  console.log(item);
  return "3";
});

// map 직접 만들기
const mapA: Arr<number> = [1, 2, 3];
const resultMapA = mapA.map((v, i) => v + 1); // [2, 3, 4]
const resultMapB = mapA.map((v) => v.toString()); // ["1", "2", "3"]
const resultMapC = mapA.map((v) => v % 2 === 0); // [false, true, false];

const mapB: Arr<string> = ["1", "2", "3"];
const resultMapD = mapB.map((v) => +v);

// filter 직접 만들기
const filterA: Arr<number> = [1, 2, 3];
const resultFilterA = filterA.filter((v): v is number => v % 2 === 0); // [2] number[]

const filterB: Arr<number | string> = [1, "2", 3, "4", 5];
const resultFilterB = filterB.filter((v): v is string => typeof v === "string"); // ["2", "4"] string[]

const predicate = (v: string | number): v is number => typeof v === "number";
const resultFilterC = filterB.filter(predicate); // [1, 3, 5] string[]

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

// Partial : interface의 객체를 모두 optional로 민들어 준다.
// 하지만, 모든 객체가 optional이 되므로 값을 안넣어도 에러가 나지 않는다.
// 그래서 보통 Pick이나 Omit을 사용한다.
interface Profile {
  name: string,
  age: number,
  married: boolean,
};

type P<T> = {
  [Key in keyof T]?: T[Key];
}

const dbshin: Profile = {
  name: "dbshin",
  age: 31,
  married: false,
};

// const newDbshin: Partial<Profile> = {
//   name: "dbshin",
//   age: 31,
// };

const newDbshin: P<Profile> = {
  name: "dbshin",
  age: 31,
};

// 제네릭을 여러 개 쓰면 제네릭 끼리 제한 조건을 먼저 붙여줘야 한다.
type Pi<T, S extends keyof T> = {
  [Key in S]: T[Key];
}

// Pick : 선택한 변수만 값을 넣어줄 수 있다.
// const pickDbshin: Pick<Profile, "name" | "age"> = {
//   name: "dbshin",
//   age: 31,
// };

const pickDbshin: Pi<Profile, "name" | "age"> = {
  name: "dbshin",
  age: 31,
};

// Omit : 선택한 변수 값을 제외한 변수만 넣어줄 수 있다.
const omitDbshin: Omit<Profile, "married"> = {
  name: "dbshin",
  age: 31,
};