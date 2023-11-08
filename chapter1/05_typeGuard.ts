// 05 TypeScript type guard

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