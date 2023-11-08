// infer (Parameters, ReturnType, ConstructorParameters, InstanceType)
// Parameters : type을 가져와서 배열로 타입을 저장한다.
// 저장한 type을 index로 접근할 수 있다.
// infer : TypeScript가 알아서 추론한 것. (inference) => typescript가 매개변수의 type을 추론한다.
//         extends에서만 사용 가능하다.
//         추론조건 ? 추론 성공 시 : 추론 실패 시
function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean} {
  return { x, y, z};
};

// Type을 함수로 제한하는 방법 (...args: any) => any
type PR<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;

// Return Type 추론
type RT<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

// ConstructorParameters
// type ConstructorParameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never
type CP<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;
