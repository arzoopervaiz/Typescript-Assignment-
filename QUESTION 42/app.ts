// 42.Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Define the Great_magicians function
function Great_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Initial list of magicians
let magicians: string[] = ["Dynamo","David Copperfield","Harry Houdini"];

// Call Great_magicians to modify the list of magicians
Great_magicians(magicians);

// Call show_magicians to verify the changes
show_magicians(magicians);
