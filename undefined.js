/* 
1. value not assigned
2. function but did't return anything
3. just wrote return but did't return anything
4. parameter that isn't passed
5. proparty that doesn't exist in an object
6. accessing array element out of range
7. accessing delete array element
8. explicity set value to undefined

*/
// Ex-1
let first;
// console.log(first)

// Ex-2
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 5);
// console.log(result)

// Ex-3
function add(a, b) {
    const sum = a + b;
    if (b < 34) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(3, 5)
// console.log(fourth)

// Ex-4
function double(a, b) {
    const result = a * b;
    // console.log(b);
    return result;
}
double(42);

// Ex-5
const fifth = {
    name: 'sogir',
    age: 35,
    location: "bandarban"
}
console.log(fifth.phone)

// Ex-6
const sixth = [23, 34, 6, 78, 75]
// console.log(sixth[8])
delete sixth[2];
console.log(sixth[2])

// Ex-7
const seventh = undefined;
console.log(seventh)

// Ex-8
const myobj = { name: 'samad', profession: null }
