console.log('***** Music Collection *****')
//start a collection variable and record objects
let collection = [];
//creating function to add record to collection
function addToCollection(title, artist, yearPublished){
    newRecord = { 
        title,
        artist,
        yearPublished
    };
    collection.push(newRecord);
    return newRecord;
}
addToCollection('London Calling', 'The Clash', 1979);
//adding 6 albums to test
addToCollection('Sandinista!', 'The Clash', 1980);
addToCollection('Trompe Le Monde', 'Pixies', 1991);
addToCollection('The Chronic', 'Dr. Dre', 1992);
addToCollection('Kind of Blue', 'Miles David', 1959);
addToCollection('Discovery', 'Daft Punk', 2001);
addToCollection('Random Access Memories', 'Daft Punk', 2013);
//testing by displaying current collection, should be 7 total
console.log(collection);
//starting shoeCollection function
function showCollection(array){
    console.log('The collection length is: ', array.length);
    for(newRecord of collection){
    console.log(newRecord.title,'by', newRecord.artist, 'published in', newRecord.yearPublished);
    }

}
//forgot how to assign values from an old object, then got the newRecord.object
showCollection(collection)
//find by artist function

function findByArtist(artist){
    let artistSearch = [];
    console.log('Artists within the collection: ', artistSearch);
    for (let newRecord of collection) {
        if (newRecord.artist === artist) {
        artistSearch.push(newRecord);
        }
    }return artistSearch;
}

findByArtist('The Clash');
//I tested several other time with findByArtist('The Beat') and got back an empty array
//I also tested the function multiple times but it only worked once, if I tried running it again it came back empty. I'm so confused on this one, have not been this irritated with a question yet.
//I would definetely appreciate going through this one question monday.