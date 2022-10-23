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
