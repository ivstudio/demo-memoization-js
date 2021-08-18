/* 
   Recursive Solution : 
   O(2^N) Time Comlexity (bad) 
*/
const fibonacci = (num) => {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};

/* Generic memoize function. */
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

/* 
   Memoize Recursive Solution.
   O(N) Time Comlexity (good) 
*/
const fib = memoize(fibonacci);
fib(20);

/*
  Alternative memoize fibonacci solution.
*/
const fibonacciMemo = () => {
  let cache = {};
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
};

/* 
   Memoize Recursive Alternative Solution.
   O(N) Time Comlexity (good) 
*/
const fibTwo = fibonacciMemo();
fibTwo(20);
