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

/////////////////////////////////////////////

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

//////////////////////////////////////////////

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

//////////////////////////////////////////////

declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], el => { target.push(el) });
forEach([1, 2, 3], el => target.push(el));

interface D {
  talk: () => void;
}
const dd: D = {
  talk() { return 3 }
}
const ee = dd.talk();

/////////////////////////////////////////////

function numOrStr(a: number | string) {
  if(typeof a === 'number') {
    a.toFixed(1);

  } else {
    a.charAt(3);

  }

  if(typeof a === 'string') {
    a.charAt(3);
  }
}

numOrStr('123');
numOrStr(1);

function numOrNumArray(a: number | number[]) {
  if(Array.isArray(a)) { // number[]
    a.concat(4);

  } else { // number
    a.toFixed(3);
  }
}

numOrNumArray(123);
numOrNumArray([1, 2, 3]);

class AA {
  aaa() {}
}

class BB {
  bbb() {}
}

function aOrB(param: AA | BB) {
  if(param instanceof AA) {
    param.aaa();
  }
}

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
}