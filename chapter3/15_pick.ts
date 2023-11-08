// Pick : 선택한 변수만 값을 넣어줄 수 있다.
// const pickDbshin: Pick<Profile, "name" | "age"> = {
//   name: "dbshin",
//   age: 31,
// };

const pickDbshin: Pi<Profile, "name" | "age"> = {
  name: "dbshin",
  age: 31,
};