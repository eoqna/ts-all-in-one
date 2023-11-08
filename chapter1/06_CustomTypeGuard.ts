// 커스텀 타입 가드
interface Cat { meow: number };
interface Dog { bow: number };

function catOrDog( a: Cat | Dog ): a is Dog {
  if((a as Cat).meow) { return false }
  return true;
};

function pet(a: Cat | Dog) {
  if(catOrDog(a)) {
    console.log(a.bow)
  }
  if('meow' in a) {
    console.log(a.meow);
  }
};