let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);


//i++ > 1: i++ uses the current value 1, then increases i to 2.
//So the comparison is 1 > 1, which is false.
//The ternary operator therefore evaluates the part after :: ++i.
//It first increases i to 3, then gives the value 3 to r.