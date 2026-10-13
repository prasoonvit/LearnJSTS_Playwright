let a = 37;
console.log(--a + a--);
console.log(a);


//Assuming you mean --a + a--:
// - --a is pre-decrement: it decreases a first, then uses the new value. So a becomes 36, and this part contributes 36.
// - a-- is post-decrement: it uses the current value first, then decreases a. It contributes 36, and then a becomes 35.
// So the first line prints 36 + 36 = 72, and the second prints 35.