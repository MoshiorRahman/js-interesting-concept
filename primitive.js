/*
Primitive data types
1. Number
2. String
3. boolean
4. undefined
5. null
6. symble

Non premitive data Types
1. object
*/

// premitive
let a = 'hello'
let b = a;
console.log(a, b)
a = 'gello'
console.log(a, b)

// Non-Premitive
const x = { job: 'web developer' }
const y = x;
console.log(x, y)
// x.job = 'back end developer'
y.job = 'font end developer'
console.log(x, y)