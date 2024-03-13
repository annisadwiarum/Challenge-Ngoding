// function updateLight(current) {
//     if (current === "green") {
//         return "yellow";
//     } else if (current === 'yellow') {
//         return 'red';
//     } else return 'green';
// }

// function updateLight(current) {
//     switch (current) {
//         case 'green': return 'yellow';
//         case 'yellow': return 'red';
//         case 'red': return 'green';
//   }
// }

const updateLight = (current) => current === "green" ? 'yellow' : current === 'yellow' ? 'red' : 'green';

console.log(updateLight("green"));
