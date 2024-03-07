// 43.Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


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
const originalMagicians: string[] = ["Dynamo","David Copperfield","Harry Houdini"];

// Call show_magicians to display the original list of magicians
show_magicians(originalMagicians);

// Call Great_magicians to modify the original list of magicians
Great_magicians(originalMagicians);

// Call show_magicians to display the modified list of magicians
show_magicians(originalMagicians);
