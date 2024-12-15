function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }
  return a + b;
}
console.log(foo(1, "1")); // Output: NaN

function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1, "1")); // Output: 2