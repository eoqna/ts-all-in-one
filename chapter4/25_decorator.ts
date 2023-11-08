// 데코레이터
// typeScript 5.0부터 추가된 함수
// ts보단 js에 가까움
// 함수, 속성, 클래스를 꾸며준다. (기능 변형)
class Deco {
  eat() {
    console.log("start");
    console.log("Eat");
    console.log("end");
  }
  work() {
    console.log("start");
    console.log("Work");
    console.log("end");
  }
  sleep() {
    console.log("start");
    console.log("Sleep");
    console.log("end");
  }
};

// 중복된 함수가 많지만 시작과 끝부분에 있기때문에 제거하기 어렵다.
// 이럴 때 데코레이터를 사용해준다.
// 데코레이터를 여러 개 붙일 수 있다.
// 데코레이터의 제약 조건 : 새로운 함수를 리턴해야 한다.

// 메소드의 데코레이터
// 매개변수가 있을 경우 새로 생성한 함수에 매개변수를 작성해주면 되고
// 리턴값이 있을 경우 새로 생성한 함수 안에서 return 해주면 된다.
function startAndEnd(originalMethod: any, context: any) {
  return function replacementMethod(this: any, ...args: any[]) {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  }
};

class Deco1 {
  @startAndEnd 
  eat() {
    console.log("Eat");
  }
  @startAndEnd 
  work() {
    console.log("Work");
  }
  @startAndEnd 
  sleep() {
    console.log("Sleep");
  }
};

// @classDecorator : 새로운 클래스를 리턴한다.
// class 자체를 꾸미는 메소드는 context에 ClassDecoratorContext 타입이 온다.

// any 없애기
function startAndEnd2<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return, 
  context: ClassMethodDecoratorContext
) {
  return function replacementMethod(this: This, ...args: Args) {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  }
};

// 데코레이터 뒤에 인수를 받는 경우
// 함수를 고차 함수(3차 함수)로 만들어야 한다.
function startAndEnd3(start = "start", end = "end") {
  return function DealDecorator<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return, 
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    return function replacementMethod(this: This, ...args: Args) {
      console.log(context.name, start);
      const result = originalMethod.call(this, ...args);
      console.log(context.name, end);
      return result;
    }
  }
};

class Deco3 {
  @startAndEnd3()
  eat() {
    console.log("Eat");
  }
  @startAndEnd3("시작", "끝")
  work() {
    console.log("Work");
  }
  @startAndEnd3() sleep() {
    console.log("Sleep");
  }
};

// 데코레이터 뒤에 인수를 받는 경우
// 함수를 고차 함수(3차 함수)로 만들어야 한다.
function startAndEnd4(start = "start", end = "end") {
  return function DealDecorator<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return, 
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    if(context.kind === "method") {
      return function replacementMethod(this: This, ...args: Args) {
        console.log(context.name, start);
        const result = originalMethod.call(this, ...args);
        console.log(context.name, end);
        return result;
      }
    }
    return originalMethod;
  }
};

// 원본 클래스(value)를 상속하는 대체 클래스를 Return해주면 된다.
function log<Input extends new (...args: any[]) => any>(value: Input, context: ClassDecoratorContext) {
  if(context.kind === "class") {
    return class extends value {
      constructor(...args: any[]) {
        super(args);
      }
      log(msg: string) {
        console.log(msg);
      }
    }
  }
  // class가 아닌 경우 원본을 그대로 사용하겠다.
  return value;
};

function bound(originalMethod: unknown, context: ClassMethodDecoratorContext<any>) {
  const methodName = context.name;
  if( context.kind === "method" ) {
    context.addInitializer(function () {
      this[methodName] = this[methodName].bind(this);
    });
  }
};

// 데코레이터의 순서는 중요하다.
@log
class Deco4 {
  @startAndEnd4()
  @bound
  eat() {
    console.log("Eat");
  }

  @bound
  @startAndEnd4("시작", "끝")
  work() {
    console.log("Work");
  }
  @startAndEnd4() sleep() {
    console.log("Sleep");
  }
};