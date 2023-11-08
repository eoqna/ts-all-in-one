// Partial : interface의 객체를 모두 optional로 민들어 준다.
// 하지만, 모든 객체가 optional이 되므로 값을 안넣어도 에러가 나지 않는다.
// 그래서 보통 Pick이나 Omit을 사용한다.
interface Profile {
  name: string,
  age: number,
  married: boolean,
};

type P<T> = {
  [Key in keyof T]?: T[Key];
}

const dbshin: Profile = {
  name: "dbshin",
  age: 31,
  married: false,
};

// const newDbshin: Partial<Profile> = {
//   name: "dbshin",
//   age: 31,
// };

const newDbshin: P<Profile> = {
  name: "dbshin",
  age: 31,
};

// 제네릭을 여러 개 쓰면 제네릭 끼리 제한 조건을 먼저 붙여줘야 한다.
type Pi<T, S extends keyof T> = {
  [Key in S]: T[Key];
}