// {} 와 object
const x: {} = 'hello';
const y: Object = 'hi'; // {}, Object : 모든 타입 (null, undefined 제외)
// const xx: object = 'hi'; // error : 참조하는 타입이 object 타입이 아니다.
const yy: object = {hello: 'world'}; // 실제 사용할 때는 object 지양, interface, type, class 사용
const z: unknown = 'hi';

// ts 4.8v 이상 :  unknown = {} | null | undefined
// unknown 타입도 모든 값을 대입할 수 있다. (any 보다 권장)
if(z) {
  z;
}

// readOnly, 인덱스드 시그니처, 맵드 타입스
interface AAA {
  readonly a: string;
  b: string;
}

const aaaa: AAA = {a: 'hello', b: 'world'};
// aaaa.a = '123'; // error : 읽기 전용 속성이므로 값을 바꿀 수 없다.