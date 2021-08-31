/* 
Falsy :
1. false
2. 0
3. empty string
4. undefiend
5. null 
6. NaN

Truthy:
1. true
2. any number (positive or nagative)
3. any string
4. any string including single whitespace, '0', 'false'
5. []
6. {}
7. anything else that is not falsy will be truthy


*/


// const x = true;
// const x = false
// const x = 4
// const x = -35
// const x = 0
// const x = ''
// const x = ' '
// const x = '0'
let x = []

/* 
Undefiend case
let x;
console.log('value of x ', x)
*/

if (x) {
    console.log('valiable is truthy')

}
else {
    console.log('variable is Falsy')
}