function grow(x) {
    let number = x[0];
    for (let i = 1; i < x.length; i++) {
        number += x[i];
    }
    return number;
}

console.log(grow([1, 2, 4]));

// reduce itu suatu fungsi untuk menghasilkan satu nilai dari banyak nilai di dalam sebuah array

// function grow(x) {

// }

// console.log(grow([1, 2, 3, 4]));