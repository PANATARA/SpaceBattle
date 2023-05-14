// var plusOne = function(digits) {
//   var num = ''
//   for (var i = 0; i < digits.length; i++){
//     num = num + String(digits[i]);
//   }
//   num = Number(num) + 1;
//   const dig = Math.floor(Math.log10(num)) + 1;
//   var arr = [];
//   for (var ind = 1; ind < dig + 1; ind++){
//     arr.push(Math.floor(num/10**(dig - ind )) % 10)

//   }
//   return arr;
// };
// console.log(plusOne([1,2,3]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

//https://leetcode.com/problems/plus-one/

// var plusOne = function(digits) {
//   var num = ''
//   for (var i = 0; i < digits.length; i++){
//     num = num + String(digits[i]);
//   }
//   num = parseInt(num, 10) + 1;
//   const dig = Math.floor(Math.log10(num)) + 1;
//   var arr = [];
//   for (var ind = 1; ind < dig + 1; ind++){
//     arr.push(Math.floor(num/10**(dig - ind )) % 10)
//   }
//   if (digits[digits.length - 1] === 0) {
//     arr[dig - 1] = digits[digits.length - 1] + 1;
//   }
//   return arr;
// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


//https://leetcode.com/problems/bulb-switcher/

var bulbSwitch = function(n) {
    
};