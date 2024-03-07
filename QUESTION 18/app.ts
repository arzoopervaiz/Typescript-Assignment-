// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

let seeing_the_world:string[]=['China','Denmark','Brazil','Afghanistan.'];
console.log("Original order", seeing_the_world);

// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order",[...seeing_the_world].sort());

// • Show that your array is still in its original order by printing it.
console.log("Again Original order",seeing_the_world);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order",[...seeing_the_world].reverse());

// • Show that your array is still in its original order by printing it again
console.log("Again in original order", seeing_the_world);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original order reverse",seeing_the_world.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Again in original order",seeing_the_world.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort in alphabetical order",seeing_the_world.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("original order reverse agian",seeing_the_world.reverse());



