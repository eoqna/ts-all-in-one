// InstanceType
// type InstanceType<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never
type IT<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

// type Params = Parameters<typeof zip>;
type Params = PR<typeof zip>;
type First = Params[2];
// type Ret = ReturnType<typeof zip>;
type Ret = RT<typeof zip>;

// 클래스는 type으로 바로 쓸 수 있다.
// 정확히는 instance(new) 이다.
class CCP {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
};

const CCCP = new CCP("123", 456, true);
// 매개 변수의 타입을 가져온다.
type CPA = ConstructorParameters<typeof CCP>;

// 생성자의 타입을 가져온다.
type ITA = InstanceType<typeof CCP>;