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