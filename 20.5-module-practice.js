// task 1 : Write a JavaScript code to reverse the array colors without using the reverse method.
// system no : 1 with for of loop
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversed = [];
// for(const color of colors){
//     reversed.unshift(color);
// }
// console.log(reversed);


// system no : 2 with for loop
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversed = [];
// for(let i = 0; i < colors.length; i++){
//     let reverse = colors[i]; 
//     reversed.unshift(reverse);
// }
// console.log(reversed);

// system no : 3 with for loop decremental way.
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversed = [];
// for(let i = colors.length - 1; i >= 0; i--){
//     let reverse = colors[i];
//     reversed.push(reverse);
// }
// console.log(reversed);


// task 2 : Write a JavaScript code to get the even numbers from an array using any looping technique.

// system no 1 with for of loop
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for(const num of numbers){
//     if(num % 2 === 0){
//         console.log('even numbers is :', num);
//     }
// }

// system no 2 with for loop

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for(let i = 0; i < numbers.length; i++){
//     let result = numbers[i];
//     if(result % 2 !== 1){
//         console.log('even number is :', result);
//     }
// }

// system no 3 with while loop.
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let i = 0;
// while(i < numbers.length){
//     let result = numbers[i];
//     if(result % 2 === 0){
//         console.log('even number is :', result);
//     }
//     i++;
// }


// task 3 : Use a for...of loop to concatenate all the elements of an array into a single string.

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = '';
// for(num of numbers){
//     result = result + num;
// }
// console.log(result);

// task 4 : Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// system 1 with for of loop
// let statement = ['I', 'am', 'a', 'hard', 'working', 'person'];
// let reverse = '';
// for(letter of statement){
//     reverse = letter + ' ' + reverse;
// }
// console.log(reverse);

// system 2 with for loop
// let statement = ['I', 'am', 'a', 'hard', 'working', 'person'];
// let reverse = '';
// for(let i = 0; i < statement.length; i++){
//     let result = statement[i];
//     reverse = result + ' ' + reverse;
// }
// console.log(reverse);

// system 2 with for while
// let statement = ['I', 'am', 'a', 'hard', 'working', 'person'];
// let reverse = '';
// let i = 0;
// while (i < statement.length){
//     let result = statement[i];
//     reverse = result + ' ' + reverse; 
//     i ++;
// }
// console.log(reverse);

// system 4 with some methods
// const statement = 'I am a hard working person';
// const reversed = statement.split(' ').reverse().join(' ');
// console.log(reversed);

// task 5 : Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// const inputArray = [1, 2, 3];
// let copiedArray = inputArray.slice();
// copiedArray[0] = 99;
// console.log('original array is :', inputArray);
// console.log('copied array is :', copiedArray);


// task 6 : Given an array of student objects, print each student’s name and marks.

// system 1
// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// for (const student of students){
//     console.log(student.name + ' scored ' + student.marks);
// }


// system 2
// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// for(let student of students){
//     let result = student.name;
//     let result2 = student.marks
//     let finalResult = result + ' scored ';
//     let finalResult2 = result2;
//     let confirmResult = finalResult + finalResult2;
//     console.log(confirmResult);
// }

// system 3
// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// let result = students[0].name;
// let result1 = students[0].marks;
// let result2 = students[1].name;
// let result3 = students[1].marks;
// let finalResult = result + ' scored '+ result1;
// let finalResult2 = result2 + ' scored ' +  result3;  
// console.log(finalResult);
// console.log(finalResult2);

// task 7 : Given a 2D array, update the value at second row first item to 99 and print the updated array.

// let numbers =[
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// numbers[1][0] = 99;
// console.log(numbers);

// ----------------------------
let numbers =[
  [1, 2],
  [3, 4],
  [5, 6]
];
numbers[1] = [99, 20];
console.log(numbers);
// console.log();