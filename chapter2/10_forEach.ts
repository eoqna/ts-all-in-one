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
