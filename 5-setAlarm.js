// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(false, false));

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false