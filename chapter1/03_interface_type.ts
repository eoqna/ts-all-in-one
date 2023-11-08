// 03 TypeScript interface & type

type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const zerocho: Human = { breath: true, breed: true, think: true };

interface A {
  breath: true
};

interface B extends A {
  breed: true
};

const bb: B = { breath: true, breed: true };