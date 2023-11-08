// 인덱스드 시그니처
type BBBBB = 'Human' | 'Mammal' | 'Animal'; // Key값을 정확하게 하고 싶을 때 사용한다.
type AAAAA = { [key in BBBBB ]: number }; // 들어가는 어떤 속성이든 간에 key의 타입도 string이고 value의 타입도 string이다.
// type AAAAA = { [key: string]: string }; // 들어가는 어떤 속성이든 간에 key의 타입도 string이고 value의 타입도 string이다.
// const aaaaa: AAAAA = { a: 'b', c: 'd' };
const aaaaa: AAAAA = { 'Human': 1, 'Mammal': 2, 'Animal': 7, };

// 추상에 의존하고, 구현에 의존하지 말라.
// class 객체 내에서 private, protect, public 을 사용할 수 있다.
class B2 implements AAA {
  readonly a: string = '123';
  // private readonly a: string = '123';
  b: string = 'world';
  c: string = 'wow';

  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}