// flat : 배열의 차원을 1개씩 낮추돼 1차원 배열은 그대로 놔둔다.
const flatA = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // [1, 2, 3, 1, 2, [1], [2]];

const flatB = [1, 2, 3, [1, 2]].flat(); [1, 2, 3, 1, 2];

type flatTypeA = {
  name: string,
  age: number,
};

type flatTypeB = flatTypeA[1 extends number ? "age" : "name"];

// flat의 인자에 숫자를 넣으면 해당 숫자만큼 배열의 차원을 낮춘다.
const flatC = [1, 2, 3, [1, 2], [[1], [2]]].flat(2); /// [1, 2, 3, 1, 2, 1, 2];

// 3차원 배열이 어떻게 1차원 배열로 추론되는 것인가
// FlatArray<A, D>
// FlatArray<(number[] | number[][] | number[][][]), 2>[]
// FlatArray<(number | number[] | number[][]), 1>[]\
// number가 Array가 아니면 number로 반환된다.
// FlatArray<(number | number[]), 0>[]
// FlatArray<number, -1>[]
// number[]