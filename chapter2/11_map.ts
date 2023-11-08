// map 직접 만들기
const mapA: Arr<number> = [1, 2, 3];
const resultMapA = mapA.map((v, i) => v + 1); // [2, 3, 4]
const resultMapB = mapA.map((v) => v.toString()); // ["1", "2", "3"]
const resultMapC = mapA.map((v) => v % 2 === 0); // [false, true, false];

const mapB: Arr<string> = ["1", "2", "3"];
const resultMapD = mapB.map((v) => +v);
