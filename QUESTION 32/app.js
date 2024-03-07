"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let new_users = ['Admin', 'Eric', 'Saif', 'Awais', 'Fatima'];
let current_users = ['Admin', 'Eric', 'Sana', 'Ali', 'Yasmeen'];
new_users = new_users.map((new_user) => new_user.toLocaleLowerCase());
current_users = current_users.map((current_user) => current_user.toLocaleLowerCase());
// console.log(new_users)
// console.log(current_users)
new_users.forEach((new_user) => {
    if (current_users.includes(new_user)) {
        console.log(`Username ${new_user} is not available.please entre a new username.`);
    }
    else {
        console.log(`Username ${new_user} is available`);
    }
});
