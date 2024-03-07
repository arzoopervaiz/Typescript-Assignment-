"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names) {
    names.forEach(name => {
        console.log(name);
    });
}
const magician_name = ["Dynamo", "David Copperfield", "Harry Houdini"];
show_magicians(magician_name);
