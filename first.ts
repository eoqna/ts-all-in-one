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


// Exclude와 Extract 차이 : Exlclude는 입력한 key만 제외, Extract는 입력한 key만 추출
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
type AAnimal = "Cat" | "Dog" | "Human";
type MMammal = Exclude<AAnimal, "Human">;
type HHuman = Extract<AAnimal, "Human">;

type ExcludeType = Exclude<keyof Profile, "married">;

// keyof를 붙이고 안붙이고의 차이
// keyof를 붙여서 키 값을 추출해 아래의 구조처럼 만들기 위함
// "key" | "key" | "key"
const newPickDbshin: Pick<Profile, Exclude<keyof Profile, "married">> = {
  name: "dbshin",
  age: 31,
};

// S에 extends keyof를 붙이면 다른 객체의 key값들만 올 수 있다고 조건을 줄 수 있다.
// S => string | number | symbol
type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

// Omit : 선택한 변수 값을 제외한 변수만 넣어줄 수 있다.
// Exclude<T, U> : T에서 U타입을 제외한다.
// const omitDbshin: Omit<Profile, "married"> = {
//   name: "dbshin",
//   age: 31,
// };

const omitDbshin: O<Profile, "married"> = {
  name: "dbshin",
  age: 31,
};

// Required, Record, NonNullable Type
interface Profile2 {
  name?: string,
  age?: number,
  married?: boolean,
};

// Required : 모든 속성을 필수로 만들고 싶을 때 사용한다.
// -? : modifier : 옵셔널을 다 빼버린다.
// +? === ?(Optional)
// const requiredDbshin: Required<Profile> = {
//   name: "dbshin",
//   age: 30,
//   married: false,
// };

type R<T> = {
  [Key in keyof T]-?: T[Key];
}

const requiredDbshin: R<Profile> = {
  name: "dbshin",
  age: 30,
  married: false,
};

// ReadOnly : 객체를 수정할 수 없게 만든다.
// const readOnlyDbshin: Readonly<Profile> = {
//   name: "dbshin",
//   age: 30,
//   married: false,
// };

// Key를 가져올 때 readonly 속성을 붙여서 수정이 불가능하게 만든다.
// -readonly를 붙이면 readonly를 제거할 수 있다.
type RO<T> = {
  // -readonly [Key in keyof T]: T[Key];
  // -readonly [Key in keyof T]-?: T[Key];
  readonly [Key in keyof T]: T[Key];
};

const readOnlyDbshin: RO<Profile> = {
  name: "dbshin",
  age: 30,
  married: false,
};

// error : Readonly에 의해 수정이 불가능하므로 에러가 발생한다.
// readOnlyDbshin.age = 29;

//Record
interface Obj {
  [key: string]: number;
};

// key값만 필요하기 때문에 제한조건 (keyof any)를 준다.
type RC<T extends keyof any, S> = {
  [Key in T]: S;
};

const ObjA: Obj = { a: 3, b: 5,};

const ObjB: Record<string, number> = { a: 3, b: 5 };

const ObjC: RC<string, number> = { a: 3, b: 5 };

// NonNullable
// 새로운 타입을 생성하고 싶은데 null과 undefined를 빼고 가져오고 싶을 때 사용한다.
// key에 적용된다.
// 제외하고 싶으면 never, 제외하기 싫으면 type
type NN<T> = T extends null | undefined ? never : T; 

type RCA = string | null | undefined | boolean | number;
type RCB = NonNullable<RCA>;
type RCC = NN<RCA>;


// infer (Parameters, ReturnType, ConstructorParameters, InstanceType)
// Parameters : type을 가져와서 배열로 타입을 저장한다.
// 저장한 type을 index로 접근할 수 있다.
// infer : TypeScript가 알아서 추론한 것. (inference) => typescript가 매개변수의 type을 추론한다.
//         extends에서만 사용 가능하다.
//         추론조건 ? 추론 성공 시 : 추론 실패 시
function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean} {
  return { x, y, z};
};

// Type을 함수로 제한하는 방법 (...args: any) => any
type PR<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;

// Return Type 추론
type RT<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

// ConstructorParameters
// type ConstructorParameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never
type CP<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;


// InstanceType
// type InstanceType<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never
type IT<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

// type Params = Parameters<typeof zip>;
type Params = PR<typeof zip>;
type First = Params[2];
// type Ret = ReturnType<typeof zip>;
type Ret = RT<typeof zip>;

// 클래스는 type으로 바로 쓸 수 있다.
// 정확히는 instance(new) 이다.
class CCP {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
};

const CCCP = new CCP("123", 456, true);
// 매개 변수의 타입을 가져온다.
type CPA = ConstructorParameters<typeof CCP>;

// 생성자의 타입을 가져온다.
type ITA = InstanceType<typeof CCP>;

// Promise, Awaited
// Promise
const p1 = Promise.resolve(1).then((a) => a + 1).then((a) => a + 1).then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result); // ["3", 2, undefined]
});

// T = [p1, p2, p3] "0": p1, "1": p2, "2": p3, "length": 3
// keyof T = 0 | 1 | 2 | length

const pArr = [1, 2, 3] as const;
type PArrT = keyof typeof pArr;
const pkey: PArrT = 1;

// TypeScript에서는 Promise대신 then이라는 객체를 사용해서 코드를 작성할 수 있다.
type PromiseResult = Awaited<{then(onfullfilled: (v: number) => number): any}>; //thenable

/** 
 * bind : 
*/

function bindA(this: Window | typeof bindObjA) {
  console.log(this);
};

const bindObjA = { name: "dbshin" };
const bindObjB = bindA.bind(bindObjA);
bindObjB();

type TPT = ThisParameterType<typeof bindA>;


// OmitThisParamter : type 추론 실패 시 그 type 그대로 사용하고, 성공 시 매개변수와 리턴값 그대로 만들어라.