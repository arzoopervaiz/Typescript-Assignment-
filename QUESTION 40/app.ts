//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Define a function make_album that takes three parameters: artist, title, and track.
function make_album(artist: string,title: string,trake: number): 
  { artist: string; title: string; trake: number } {
  // Create a dictionary object to store artist, title, and track.
  const dictionaries = {
    // Capitalize the first letter of the artist's name.
    artist: artist.charAt(0) + artist.slice(1),
    // Capitalize the first letter of the title.
    title: title.charAt(0) + title.slice(1),
    // Assign the track number as is.
    trake: trake,
  }
  // Return the constructed dictionary object.
  return dictionaries;
}

// Create an album using the make_album function and log it to the console.
let album = make_album("Abida Parveen", "Raqs-e-Bismil", 11);
console.log(album);

// Create another album using the make_album function and log it to the console.
album = make_album("Coke Studio", "Season 14", 15);
console.log(album);
