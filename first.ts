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

// 커밋 테스트