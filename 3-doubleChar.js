// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i];
//     }
    
//     return result;
// }

// function doubleChar(str) {
//     return str.split('').map((v) => v + v).join('');
// }

const doubleChar = (str) => str.split("").map((v) => v + v).join("");

console.log(doubleChar('Adidas'));
