let fruits = ['blackberry', 'strawberry', 'kiwi', 'lime', 'raspberry'];

// Question 1:
// console.log(fruits[fruits.length -1]);

// Question 2:
fruits[0] = 'something else';
console.log(fruits);

// Question 3:
fruits[fruits.length -1] = 'mango';
console.log(fruits);

// Question 4:
fruits.unshift('blueberry');
console.log(fruits);

// Question 5:
fruits.pop();
// console.log(fruits);

// Question 6:
console.log(fruits.length);

// Question 7:
fruits.shift();
console.log(fruits);

// Question 8:
console.log(fruits.join(' & '));

// Question 9:
let twoArr = [['Gintoki', 'Hijikata', 'Okita'], ['Zura', 'Kagura', 'Otae', 'Tsukuyo']];
let longestArr = twoArr[0].length > twoArr[1].length ? twoArr[0] : twoArr[1];

// console.log(longestArr);

// Question 10:
let midElement = [['Pizza', 'Sushi', 'Takoyaki', 'Tempura'], ['Apples', 'Oranges', 'Grapes']];
let middle = Math.floor(midElement[0].length / 2);
let middle2 = Math.floor(midElement[1].length / 2);

if (middle % 2 === 0) {
  console.log('Oops, there\'s no middle.');
} else {
  console.log(midElement[0][middle]);
};

if (middle2 % 2 === 0) {
  console.log('Oops, there\'s no middle.');
} else {
  console.log(midElement[1][middle2]);
}

// Question 11:
let sumArray = [3, 5, 2, 8, 6];
let sum = 0;

for(let i = 0; i < sumArray.length; i++) {
  sum += sumArray[i];
}

console.log(sum);

// Question 12:
let nums = [4,9];
let range = [];

for (let i = nums[0]; i <= nums[nums.length -1]; i++){
  range.push(i);
}
console.log(range);

// Question 13:

// STUCK: WILL WORK ON AGAIN LATER.

// let rangeWithStep = [3, 27, 3];
// let resultWithStep = [];
// // let numbers2 = [4, 12];
// // expected output: 3, 6, 9, 12, 15, 18, 21, 24, 27]
//
//   for (let i = rangeWithStep[0]; i <= rangeWithStep[1]; i+=rangeWithStep[2]){
//     if (!resultWithStep[rangeWithStep[i]]) {
//     resultWithStep[rangeWithStep[i]] = 1;
//   } else {
//   resultWithStep[rangeWithStep[i]] += rangeWithStep[2];
//   }
// }
// console.log(resultWithStep);


// Question 14:

let someNumbers = [5, 20, 15];
let doubleTrouble = [];

for (let d = 0; d < someNumbers.length; d++) {
  doubleTrouble.push(someNumbers[d] * 2);
}

console.log(doubleTrouble);


// Question 15:

let numArr = [5, 6, 3, 7, 9];
let target = 13;
let result = [];
// expect: [2,3]



for (let n = 0; n < numArr.length -1; n++) {
  for (let h = n + 1; h < numArr.length; h++) {
    if (numArr[n] + numArr[h] === target) {
      result.push(numArr[n], numArr[h]);
    }
  }
}
console.log(result);
