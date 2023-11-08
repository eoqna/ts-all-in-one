// Required, Record, NonNullable Type
interface Profile2 {
  name?: string,
  age?: number,
  married?: boolean,
};

// Required : 모든 속성을 필수로 만들고 싶을 때 사용한다.
// -? : modifier : 옵셔널을 다 빼버린다.
// +? === ?(Optional)
// const requiredDbshin: Required<Profile> = {
//   name: "dbshin",
//   age: 30,
//   married: false,
// };

type R<T> = {
  [Key in keyof T]-?: T[Key];
}

const requiredDbshin: R<Profile> = {
  name: "dbshin",
  age: 30,
  married: false,
};

// ReadOnly : 객체를 수정할 수 없게 만든다.
// const readOnlyDbshin: Readonly<Profile> = {
//   name: "dbshin",
//   age: 30,
//   married: false,
// };

// Key를 가져올 때 readonly 속성을 붙여서 수정이 불가능하게 만든다.
// -readonly를 붙이면 readonly를 제거할 수 있다.
type RO<T> = {
  // -readonly [Key in keyof T]: T[Key];
  // -readonly [Key in keyof T]-?: T[Key];
  readonly [Key in keyof T]: T[Key];
};

const readOnlyDbshin: RO<Profile> = {
  name: "dbshin",
  age: 30,
  married: false,
};

// error : Readonly에 의해 수정이 불가능하므로 에러가 발생한다.
// readOnlyDbshin.age = 29;

//Record
interface Obj {
  [key: string]: number;
};

// key값만 필요하기 때문에 제한조건 (keyof any)를 준다.
type RC<T extends keyof any, S> = {
  [Key in T]: S;
};

const ObjA: Obj = { a: 3, b: 5,};

const ObjB: Record<string, number> = { a: 3, b: 5 };

const ObjC: RC<string, number> = { a: 3, b: 5 };

// NonNullable
// 새로운 타입을 생성하고 싶은데 null과 undefined를 빼고 가져오고 싶을 때 사용한다.
// key에 적용된다.
// 제외하고 싶으면 never, 제외하기 싫으면 type
type NN<T> = T extends null | undefined ? never : T; 

type RCA = string | null | undefined | boolean | number;
type RCB = NonNullable<RCA>;
type RCC = NN<RCA>;