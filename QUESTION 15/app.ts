//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let Guest_name: string[] = [ "Quaid e Azam", "Imran Khan","Kamran khan Tessori"];

// Invite the initial list of guests
for (let i = 0; i < Guest_name.length; i++) {
  console.log("Dear Mr." +Guest_name[i] +".\nIt is our pleaure to invite you in our Party.\nThank you!\n");
}

// Declare the absent guest and the new guest
let absent_Guest: string = "Imran Khan";
let new_Guest: string = "Nawaz Shareef";

// Replace the absent guest with the new guest
Guest_name[1] = new_Guest;

// Invite the updated list of guests
for (let i = 0; i < Guest_name.length; i++) {
  console.log("Dear Mr." + Guest_name[i] +".\nIt is our pleaure to invite you in our Party.\nThan you!\n");
}
// Print the name of the absent guest
console.log(`Mr.${absent_Guest} is not coming to the party`);
