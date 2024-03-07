"use strict";
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(number => {
    let original_numbers;
    if (number == 1) {
        original_numbers = 'st';
    }
    else if (number == 2) {
        original_numbers = 'nd';
    }
    else if (number == 3) {
        original_numbers = 'rd';
    }
    else
        (number == 4);
    {
        original_numbers = 'th';
    }
    console.log(`${number} ${original_numbers}`);
});
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     let ordinalSuffix: string;
//     if (number === 1) {
//         ordinalSuffix = "st";
//     } else if (number === 2) {
//         ordinalSuffix = "nd";
//     } else if (number === 3) {
//         ordinalSuffix = "rd";
//     } else {
//         ordinalSuffix = "th";
//     }
