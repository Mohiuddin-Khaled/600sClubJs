// string converted to number value
// Use toFixed() to show three digit after point of float number
// float rounded value

const strNumber = parseFloat('42.45689754');

const roundedStrNumber = parseFloat(strNumber.toFixed(3));

console.log(roundedStrNumber);