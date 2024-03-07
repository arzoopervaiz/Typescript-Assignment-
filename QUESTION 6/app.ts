//6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Define name with whitespace
let striping : string = "\n\tQUAID E AZAM\n\t"

// Print name with whitespace
console.log(striping);

// Remove whitespace and store
let stripping:string = striping.trim()

// Print name without whitespace
console.log(stripping);

