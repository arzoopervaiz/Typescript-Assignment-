// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
console.log("\nInitial Invitation\n");
let Guest_list: string[] = ["Arzoo", "Aiman", "Saif", "Awais"];
let message: string =
  " \nI invite you to our party. Please come\n Thank you\n\n ";

// Initial invitation messages
for (let i = 0; i < Guest_list.length; i++) {
  console.log("Dear, " + Guest_list[i] + message);
}
console.log("\nUpdate Invitation\n");

let not_coming: string = "Aiman";
let new_guest: string = "Yasmeen";

// Update invitation by replacing the guest
Guest_list[1] = new_guest;
{
  for (let i = 0; i < Guest_list.length; i++)
    console.log("Dear, " + Guest_list[i] + message);
}

console.log(`${not_coming} is not coming to the party.Therefore, we are inviting another guest.\n`);

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
