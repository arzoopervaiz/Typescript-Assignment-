//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Array of favorite fruits
let favorite_fruits:string[]=['Apple','Banana','orange']

// Checking for specific fruits
if (favorite_fruits.includes('Apple')){
    console.log("You really like Apple!");
}
if (favorite_fruits.includes('Banana')){
    console.log("You really like Banana!");
}
if (favorite_fruits.includes('orange')){
    console.log("You really like orange");
}
if(favorite_fruits.includes('mango')){
    console.log("You really like mango")
}
if (favorite_fruits.includes('grapes')){
    console.log("You really like grapes")
}
