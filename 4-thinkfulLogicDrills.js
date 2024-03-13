// function updateLight(current) {
//     if (current === "green") {
//         return "yellow";
//     } else if (current === 'yellow') {
//         return 'red';
//     } else return 'green';
// }

// pake switch
// function updateLight(current) {
//     switch (current) {
//         case 'green': return 'yellow';
//         case 'yellow': return 'red';
//         case 'red': return 'green';
//   }
// }

//pake ternary
// const updateLight = (current) => current === "green" ? 'yellow' : current === 'yellow' ? 'red' : 'green';

//pake object
const updateLight = (current) => {
  return {
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current];
};

console.log(updateLight("green"));
