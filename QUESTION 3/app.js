"use strict";
//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstname = "eRic";
//toUppercase
console.log(firstname.toLocaleUpperCase());
//tolowercase
console.log(firstname.toLocaleLowerCase());
//titlecase
console.log(firstname.charAt(0).toUpperCase() + firstname.slice(1).toLocaleLowerCase());
