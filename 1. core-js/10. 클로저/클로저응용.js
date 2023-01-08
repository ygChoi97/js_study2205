// /*
// const increase = (() => {
//     let num = 0; // 상태 변수
//     return () => ++num;
// })();

// const decrease = (() => {
//     let num = 0; // 상태 변수
//     return () => --num;
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());
// console.log(increase()); */

// const c = (function() {
//     let num = 0;

//     return {
//         increase: () => ++num,
//         decrease: () => --num
//     };
// })();

// console.log(c.increase());
// console.log(c.increase());
// console.log(c.increase());
// console.log(c.decrease());
// console.log(c.decrease());
// console.log(c.increase()); // 2


// console.log('=================콜백 클로저=================');
// console.log(counter(n => n += 2)); // 2
// console.log(counter(n => n ** 3)); // 8
// console.log(counter(n => n / 2));  // 4

// // 콜백을 이용한 클로저
// function abc() {
//     let num = 0;

//     function def(callback) {
//         num = callback(num);
//         return num;
//     }
//     return def;
// };

// const counter = abc;

// const co = counter();

// function triple(m) {
//     return m += 3;
// }

// let n = co(triple);
// n = co(triple);
// n = co(triple);
// n = co(triple);
// n = co(triple);

// console.log(`n: ${n}`);

// //==============================================

// const counter_ = (() => {

//     let num = 0;

//     return (callback) => {
//         return num = callback(num);
//     };
// })();

const counter = (() => {

    let num = 0;

    return (callback) => {
        return num = callback(num);
    };
})();

const increase = n => ++n;
const decrease = n => --n;

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));
