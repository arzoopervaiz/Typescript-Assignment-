"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Define an array of animals with a common characteristic
let animals = ['Cow', 'Sheep', 'Camel', 'Goat'];
// Loop through the array and print the name of each animal
for (let i = 0; i < animals.length; i++) {
    // Modify the loop to print a statement about each animal
    console.log(animals[i]);
}
for (let j of animals) {
    console.log(`${j} would make a great pet!`);
}
// Add a line at the end of the program stating what these animals have in common
console.log(`All this animals ${animals[0]} , ${animals[1]} , ${animals[2]} , ${animals[3]} meat is Halal in Islam.`);
