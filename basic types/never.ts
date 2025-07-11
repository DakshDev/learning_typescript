// if you use never type in function then your code will not compile next to the never typed function

function neverFun(): never {
  while (true) {}
}

neverFun();

console.log("This line will not compile");
