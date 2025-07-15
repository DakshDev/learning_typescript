// Type Inetrfaces
// 1) Inference
// 2) Annotation

// if typescript automatic set type that's called (inference)
let a = 15;

// if you set type that's called (annotation)
let b: number;

// (annotation) and (inference) with function parms
function myFun(name: string, age): void {
  let fullInfo = name + " age is " + age;
}
