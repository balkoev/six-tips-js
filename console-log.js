const foo = { name: 'Adam', age: 28, married: false };
const bar = { name: 'Rustam', age: 19, married: true };
const baz = { name: 'Halid', age: 6, married: false };

'Плохой код 💩';

console.log(foo);
console.log(bar);
console.log(baz);

'Хороший код ✅';

console.log('%c Мои друзья', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });

console.table([foo, bar, baz]);


console.time('looper');

let i = 0;
while (i < 1000000) {
    i++;
}

console.timeEnd('looper');



// const deleteMe = () => console.trace('bye bye database');

// deleteMe();
// deleteMe();
