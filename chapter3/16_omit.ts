// Exclude와 Extract 차이 : Exlclude는 입력한 key만 제외, Extract는 입력한 key만 추출
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
type AAnimal = "Cat" | "Dog" | "Human";
type MMammal = Exclude<AAnimal, "Human">;
type HHuman = Extract<AAnimal, "Human">;

type ExcludeType = Exclude<keyof Profile, "married">;

// keyof를 붙이고 안붙이고의 차이
// keyof를 붙여서 키 값을 추출해 아래의 구조처럼 만들기 위함
// "key" | "key" | "key"
const newPickDbshin: Pick<Profile, Exclude<keyof Profile, "married">> = {
  name: "dbshin",
  age: 31,
};

// S에 extends keyof를 붙이면 다른 객체의 key값들만 올 수 있다고 조건을 줄 수 있다.
// S => string | number | symbol
type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

// Omit : 선택한 변수 값을 제외한 변수만 넣어줄 수 있다.
// Exclude<T, U> : T에서 U타입을 제외한다.
// const omitDbshin: Omit<Profile, "married"> = {
//   name: "dbshin",
//   age: 31,
// };

const omitDbshin: O<Profile, "married"> = {
  name: "dbshin",
  age: 31,
};