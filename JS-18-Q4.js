/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function calculates(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 !== "number" || typeof num2 !== "number") {
        reject("Both inputs must be numbers");
      } else if (num1 < 0 || num2 < 0) {
        reject("Negative numbers are not allowed");
      } else {
        resolve(num1 + num2);
      }
    }, 2000);
  });
}
console.log(calculates(2,8));
console.log(calculates(-8,6));