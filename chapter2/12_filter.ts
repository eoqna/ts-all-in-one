// filter 직접 만들기
const filterA: Arr<number> = [1, 2, 3];
const resultFilterA = filterA.filter((v): v is number => v % 2 === 0); // [2] number[]

const filterB: Arr<number | string> = [1, "2", 3, "4", 5];
const resultFilterB = filterB.filter((v): v is string => typeof v === "string"); // ["2", "4"] string[]

const predicate = (v: string | number): v is number => typeof v === "number";
const resultFilterC = filterB.filter(predicate); // [1, 3, 5] string[]