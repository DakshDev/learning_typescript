type User = {
  name: string;
  age: number;
  isMale: boolean;
};

function userFunc(usr: User, callback: (user: User) => void): string {
  callback(usr);
  return "Hello World";
}

userFunc({ name: "Daksh", age: 15, isMale: true }, (data: User) => {
  console.log(data);
});
