let x: number = 1;
console.log(x);
// x = "hello World"  // this will throw an error of type casting to invalid type
x = 2;
console.log(x);

// If you have to surely do the above scenrio so this is the way to do it
let x2: number | string = 3;
console.log(x2);
x2 = "hello World";
console.log(x2);
x2 = 5;
console.log(x2);

// ====== Question 1 =============//

// Greeting function in js //
// function GreetJS(name) {
//   console.log(`Hello, ${name}`);
// }
// GreetJS("Waqar");

// Greeting function in Ts //
function GreetTS(name: string) {
  console.log(`Hello, ${name}`);
}
GreetTS("Waqar");
GreetTS("NewUser");

// ====== Question 2 =============//
function sum(a: number, b: number): number {
  // Here in this line after the parameters the number tells us the return type of function
  return a + b;
}
const sumResult = sum(4, 6);
console.log("The sum of two given numbers is : ", sumResult);

// ====== Question 3 =============//
function isLegal(age: number) {
  if (age > 18) return true;
  else false;
}
const result = isLegal(15);
if (result) console.log("The user is legal");
else console.log("The user is not legal");

// ====== Question 4 =============//

// This line tell that passedFun is parameter and datatype is a function and that function must have a return type which is given here void
function DelayedCall(passedFun: () => void) {
  setTimeout(passedFun, 2000);
}
DelayedCall(() => {
  console.log("Hello World after 2 seconds");
});

// ====== Question 5 =============//

function delayedFunc2(anotherFn: () => number): void {
  setTimeout(() => {
    const result: number = anotherFn();
    console.log(result);
  }, 1000);
}

function add2(x: number, y: number): number {
  return x + y;
}

// delayedFunc2(add2(89,9))

// The error here is that the function `delayedFunc2` expects a function that returns a number
// but we are passing a number directly to it. This is because the function `add2` is called
// immediately and its return value (a number) is passed to `delayedFunc2` instead of the
// function itself. To fix this, we should pass the function `add2` itself to `delayedFunc2`
// and then call it inside the `setTimeout` callback.

delayedFunc2(() => add2(89, 22));
// this will be the right way to pass the function as an argument without getting invoked directly
