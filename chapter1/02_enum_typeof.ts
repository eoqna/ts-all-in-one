// 02 TypeScript enum & typeof keyof

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
};

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const a1 = EDirection.Up;
const b1 = EDirection.Down;

const obj = { a: '123', b: '345', c: 'world' };
type Key = keyof typeof obj;