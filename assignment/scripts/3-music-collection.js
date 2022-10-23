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