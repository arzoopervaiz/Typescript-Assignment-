// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("\nInitial Invitation\n");
let Guest_list: string[] = ["Arzoo", "Aiman", "Saif", "Awais"];
let message: string =" \nI invite you to our party. Please come\n Thank you\n\n ";

for (let i = 0; i < Guest_list.length; i++) {
  console.log("Dear, " + Guest_list[i] + message);
}
console.log("\nUpdate Invitation\n");

let not_coming: string = "Aiman";
let new_guest: string = "Yasmeen";
Guest_list[1] = new_guest;
{
  for (let i = 0; i < Guest_list.length; i++)
    console.log("Dear, " + Guest_list[i] + message);
}

console.log( `${not_coming} is not coming to the party.Therefore, we are inviting another guest.\n`);

console.log("\nFinal Invitation\n");

//•Add one new guest to the beginning of your array.
Guest_list.unshift("Pervaiz");

// • Add one new guest to the middle of your array.
Guest_list.splice(3, 0, "Ayesha");

// • Add one new guest to the end of your array.
Guest_list.push("Maryam");

// All guests invited message.
for (let i = 0; i < Guest_list.length; i++)
  console.log(`Dear, ${Guest_list[i]}` + message);

console.log("we have found a bigger dinner table so we invited more guest.\n");

console.log("Unfortunately, we can only invite just 2 people.\n");

console.log("Not Invited guests:");

while (Guest_list.length > 2) {
  let removeguest = Guest_list.pop();
  console.log(`Dear ${removeguest} ,sorry you are not invited\n`);
}
console.log("Invited guest people: \n");

Guest_list.map((item) => console.log(`Dear ${item},you are still invited\n`));

Guest_list.pop();
Guest_list.pop();
console.log(` Remainig guest :${Guest_list}`);
