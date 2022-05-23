'use strict';

/* const xy = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1994));

// let string = "How can mirrors be real if our eyes aren't real";
// let result = '';

// result = result + string[0].toUpperCase();
// let x = '';
// let y = '';
// for (let i = 1; i < string.length; i++) {
//   if (string[i - 1] === ' ') {
//     result = result + string[i].toUpperCase();
//     console.log(result[i]);
//   } else result = result + string[i];
// }

// console.log(result);

const temperatures1 = [3, 6, 'error', 13];
const temperatures2 = [13, 16, 'error', 1];

const calcTempAmplitudeBug = function (temperatures1, temperatures2) {
  const temperatures = temperatures1.concat(temperatures2);
  //console.log(temperatures);

  //bug introduced
  let max = 0;
  let min = 0;

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    if (typeof temp !== 'number') {
      console.log(`Found an temperature error`);
      continue;
    }

    if (temp > max) max = temp;

    if (temp < min) min = temp;
  }

  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitudeBug(temperatures1, temperatures2);

console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());



Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print 
"... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

1) write a funtion which take input as an array 
2) display a string where
    1) temperature from the array 
    2) days as the indices+1 of the value

how to add all the strings for every array value?
*/

const printForecast = function (arr) {
  let resultStr = '';
  for (let i = 0; i < arr.length; i++) {
    resultStr += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(resultStr + ' ...');
};

printForecast([12, 5, -5, 0, 4]);
