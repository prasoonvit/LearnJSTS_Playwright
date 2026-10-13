let a = 5; 
let b = a-- - --a; 
console.log(b, a);

// Evaluation goes left to right:
// 1. a-- uses the current value 5, then decreases a to 4.
// 2. --a decreases a to 3, then uses 3.
// 3. b = 5 - 3, so b is 2.