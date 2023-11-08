/** 
 * bind : this를 없앤 원래 함수를 추출한다.
*/

function bindA(this: Window | typeof bindObjA) {
  console.log(this);
};

const bindObjA = { name: "dbshin" };
const bindObjB = bindA.bind(bindObjA);
bindObjB();

type TPT = ThisParameterType<typeof bindA>;
type Nothis = OmitThisParameter<typeof bindA>;

// OmitThisParamter : type 추론 실패 시 그 type 그대로 사용하고, 성공 시 매개변수와 리턴값 그대로 만들어라.
// this를 없앤 함수 타입을 추출해낼 수 있다.

// bind : this를 쓰는 경우와 this를 안쓰는 경우가 있다.
// 1. this를 사용하는 경우
const bindZerocho = {
  name : "zerocho",
  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  }
}

const sayHello = bindZerocho.sayHello;
// 원래는 this가 들어있는 함수인데 bind를 통해서 this를 없애버린 것 (OmitThisParameter)
const sayHi = bindZerocho.sayHello.bind({ name: "nero" });

// 2. this를 사용하지 않는 경우
function bindAdd(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
};

// this가 없을 경우 함수의 인수 그대로 간다.
const bindAdd1 = bindAdd.bind(null);
bindAdd1(1, 2, 3, 4, 5, 6);

// null이 this의 자리에 들어가고 1이 인수 a의 자리에 들어간다.
const bindAdd2 = bindAdd.bind(null, 1);
bindAdd2(2, 3, 4, 5, 6);

const bindAdd3 = bindAdd.bind(null, 1, 2);
bindAdd3(3, 4, 5, 6);

const bindAdd4 = bindAdd.bind(null, 1, 2, 3);
bindAdd4(4, 5, 6);

const bindAdd5 = bindAdd.bind(null, 1, 2, 3, 4);
bindAdd5(5, 6);

const bindAdd6 = bindAdd.bind(null, 1, 2, 3, 4, 5);
bindAdd6(6);