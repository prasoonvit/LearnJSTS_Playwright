let a = 100;

console.log(a++ + ++a + a++ + ++a);

console.log(a);


//The increments are evaluated left to right:
// - a++ contributes 100, then a becomes 101
// - ++a makes it 102, contributes 102
// - a++ contributes 102, then a becomes 103
// - ++a makes it 104, contributes 104
// So the sum is 100 + 102 + 102 + 104 = 408.