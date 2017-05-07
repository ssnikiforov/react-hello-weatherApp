/**
 * Created by snikiforov on 07/05/2017.
 */

/*
 Callback pattern
 Проблемы:
 Мы описываем print out дважды, для каждого вида результата. И вызов коллбэка - тоже дважды.
 */
function getTempCallback (location, callback) {
    callback(undefined, 78); // successful call
    callback('City not found'); // error call
}


// getTempCallback('Kazan', function (err, temp) {
//     if (err) {
//         console.log('error', err); // print out error message
//     } else {
//         console.log('success', temp); // print out success message
//     }
// });

/*
 Promises pattern
 Проблемы:
 То же самое, что и выше, только без описанных проблем
 */
function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

// First - success case, second - error case
// getTempPromise('Kazan').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

// Challenge area

function addPromise (a, b) {
    return new Promise (function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        }
       reject('One of the args in NaN');
    });
}

addPromise(3, 2).then(function (sum) {
    console.log('promise sum result', sum);
});

addPromise(3, 'aa').then(null, function (err) {
    console.log('promise sum error', err);
});

// Below - alternative syntax for rejected results of promises
// addPromise(3, 'Not a number').then(null, function (err) {
//     console.log('promise sum error', err);
// });
//
// addPromise(3, 'Not a number').catch(function (err) {
//     console.log('promise sum error', err);
// });
