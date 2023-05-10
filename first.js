"use strict";
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;
const f = true;
const g = true;
const arr = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456];
const arr4 = [1, 2, 'string'];
// function add( x: number, y: number ): number { return x + y };
// function add(x: number, y: number): number;
// function add(x, y) { return x + y };
let aa = 123;
aa = 'hello';
// type Add = ( x: number, y: number ) => number;
// const add: Add = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
// tuple : 길이와 type이 정해진 배열
const tuple = ['1', 1];
;
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
const a1 = 0 /* EDirection.Up */;
const b1 = 1 /* EDirection.Down */;
const obj = { a: '123', b: '345', c: 'world' };
const zerocho = { breath: true, breed: true, think: true };
;
;
const bb = { breath: true, breed: true };
let target = [];
forEach([1, 2, 3], el => { target.push(el); });
forEach([1, 2, 3], el => target.push(el));
const dd = {
    talk() { return 3; }
};
const ee = dd.talk();
/////////////////////////////////////////////
function numOrStr(a) {
    if (typeof a === 'number') {
        a.toFixed(1);
    }
    else {
        a.charAt(3);
    }
    if (typeof a === 'string') {
        a.charAt(3);
    }
}
numOrStr('123');
numOrStr(1);
function numOrNumArray(a) {
    if (Array.isArray(a)) { // number[]
        a.concat(4);
    }
    else { // number
        a.toFixed(3);
    }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);
class AA {
    aaa() { }
}
class BB {
    bbb() { }
}
function aOrB(param) {
    if (param instanceof AA) {
        param.aaa();
    }
}
aOrB(new AA);
aOrB(new BB);
function typeCheck(a) {
    if ('bbb' in a) {
        a.bbb;
    }
    else if (a.type === 'c') {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
;
;
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ('meow' in a) {
        console.log(a.meow);
    }
}
