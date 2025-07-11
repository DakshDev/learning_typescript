// ( unknown )

// if your type is ( unknown ) then first you want to check type using "type of" and then write code of that type otherwise it threw error

let bcd: unknown;
bcd = 5;
bcd = "hello world";
if (typeof bcd === "string") bcd.toUpperCase();
