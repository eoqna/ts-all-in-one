// forEach
interface FunctionArr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T, index: number) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const Arr1: FunctionArr<number> = [1, 2, 3];
Arr1.forEach((item) => {
  console.log(item);
  item.toFixed(1);
});

const Arr2: FunctionArr<string> = ["1", "2", "3"];
Arr2.forEach((item, index) => {
  console.log(item, index);
  item.charAt(3);
});

const Arr3: FunctionArr<boolean> = [true, false, true];
Arr3.forEach((item, index) => {
  console.log(item, index);
});

// map
const Arr4: FunctionArr<number> = [1, 2, 3];
const Arr5 = Arr4.map((v) => v + 1);
const Arr6 = Arr4.map((v) => v.toString()); // ["1", "2", "3"]; string[]
const Arr7 = Arr4.map((v) => v % 2 === 0); // [false, true, false]; boolean[]


// filter
const Arr8: FunctionArr<number> = [1, 2, 3];
const Arr9 = Arr8.filter((v): v is number => v % 2 === 0);

const Arr10: FunctionArr<number | string> = [1, "2", 3, "4", 5];
const Arr11 = Arr10.filter((v): v is string => typeof v === "string"); // ["2", "4"] string[]