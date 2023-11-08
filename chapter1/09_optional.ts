// 옵셔널, 제네릭 기본
function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);

// 옵셔널 : b는 있어도 되고 없어도 된다.
let obj2: {a: string, b?: string} = { a: 'hello', b: 'string' };
obj2 = {a: 'hello'};

// 제네릭 (return, 매개변수 모두 타입이 같은 경우 T라는(다른 알파벳 사용 가능) 타입을 지정해서 선언한다.)
// 만들어질 때는 type이 뭔지 모르지만 실제로 사용할 때 type이 정해진다.

// 'T'가 어떤 타입이든 선언할 수 있기 때문에 (true, false) 같은 것도 사용이 가능해진다.
// 따라서, 'T'에 extends로 type을 제한해서 사용해야 한다.
// function add<T extends number | string>(x: T, y: T): T {

// 제네릭을 여러 개 만들 수 있다.
function add<T extends number, K extends string>(x: T, y: K) {};

// add(1, 2);
// add('1', '2');

// add(true, false);
// add('1', 2);
// add('2', 1);
add(1, '2');