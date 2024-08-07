const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

let temperature = [];
temperatures.forEach((num) => {
  if (num >= 25) {
    temperature.push(num);
  }
});
console.log(temperature);

const temperature2 = temperatures.filter((num) => {
  if (num < 20) {
    return true;
  }
});
console.log(temperature2);

// const result = temperatures.map((temp) => {
//   return (temp * 9) / 5 + 32;
// });

// console.log(result);

const result = temperatures.filter((temp) => {
  if (temp > 25) {
    return true;
  }
});
console.log(result);

const result2 = temperatures.map((temp) => {
  if (temp >= 25) {
    return "warm";
  }
  if (temp >= 20 && temp <= 24) {
    return "Mild";
  }
  if (temp < 20) {
    return "cool";
  }
});
console.log(result2, "ll");

let max = 0;
const result3 = temperature.forEach((temp) => {
  if (temp > max) {
    max = temp;
  }
});
console.log(max);

let min = 30;
const result4 = temperature.forEach((temp) => {
  if (temp < min) {
    return min;
  }
});
console.log(result4);

const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];
//const result5 = transactions.filter((num) => {
// if (num[0] == "income") {
//    return true;
// }
//});
//console.log(result5);

const result6 = transactions.filter((num) => {
  if (num[0] == "expense") {
    return true;
  }
});
console.log(result6);

let sum = 0;
const result7 = transactions.filter((num) => {
  if (num[0] == "income") {
    return (sum = sum + num[1]);
  }
});
console.log(sum);

let sum1 = 0;
const result8 = transactions.filter((num) => {
  if (num[0] == "expense") {
    return (sum = sum + num[1]);
  }
});
console.log(sum1);

let sum3 = 0;
const result9 = transactions.filter((num) => {
  if (num[0] == "income") {
    sum3 = sum3 + num[1];
  } else if (num[0] == "expense") {
    sum3 = sum3 - num[1];
  }
});
console.log(sum3);
