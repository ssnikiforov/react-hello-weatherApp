/**
 * Created by snikiforov on 07/05/2017.
 */

// Step 1
// var names = ['Bob', 'John', 'Shawn'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// Step 2

// var returnMe = (name) => name + '!';
// console.log(returnMe('Stepan'));

// Step 3

// var names = ['Bob', 'John', 'Shawn'];
//
// var personUndefined = {
//     name: 'Stepan',
//     greet: function () {
//         names.forEach(function (name) {
//            console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// personUndefined.greet(); // undefined says hi to Bob // потерялся контекст, обновился бандинг потому что
//
// var personSuccess = {
//     name: 'Stepan',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// personSuccess.greet(); // Stepan says hi to Bob

// Step 4 - challenge

function sumFromAnonymousFunction (a, b) { // anonymous function
    return a + b;
}

console.log(sumFromAnonymousFunction, sumFromAnonymousFunction(1, 3));
console.log(sumFromAnonymousFunction, sumFromAnonymousFunction(9, 0));

var sumFromFuncWithCurlyBraces = (a, b) => { // statement
    return a + b;
};

console.log(sumFromFuncWithCurlyBraces, sumFromFuncWithCurlyBraces(1, 3));
console.log(sumFromFuncWithCurlyBraces, sumFromFuncWithCurlyBraces(9, 0));

var sumFromFuncWithoutCurlyBraces = (a, b) => a + b; // expression

console.log(sumFromFuncWithoutCurlyBraces, sumFromFuncWithoutCurlyBraces(1, 3));
console.log(sumFromFuncWithoutCurlyBraces, sumFromFuncWithoutCurlyBraces(9, 0));
