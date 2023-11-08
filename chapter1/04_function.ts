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