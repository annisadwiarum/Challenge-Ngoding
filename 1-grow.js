// function grow(x) {
//     let number = x[0];
//     for (let i = 1; i < x.length; i++) {
//         number += x[i];
//     }
//     return number;
// }

// reduce itu suatu fungsi untuk menghasilkan satu nilai dari banyak nilai di dalam sebuah array

// function grow(x) {
//     const result = x.reduce((acc, curr) => acc * curr, 1);
//     return result;
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([1, 2, 5]));