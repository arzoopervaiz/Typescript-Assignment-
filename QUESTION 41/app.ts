//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Define a function to show magicians' names
function show_magicians(names:string[]):void{

// Iterate through each name in the array and print it
    names.forEach(name => {
        console.log(name);
        
    });
}

// Define an array of magician names
const magician_name:string[]=["Dynamo","David Copperfield","Harry Houdini"];


// Call the show_magicians function with the magician_names array
show_magicians(magician_name);
