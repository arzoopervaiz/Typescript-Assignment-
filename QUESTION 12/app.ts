//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// add names in Array
let names: string[] = ["Arzoo", "Laiba", "Aiman", "Maryam"];

//print a message
let message: string = `Hello! have a good day `;

//declear [i] variable
let i;

// Print personalized greetings for each person

for (i = 0; i < names.length; i++) {
  console.log(message + names[i]);
}
