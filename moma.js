// Random Item Generator from the Museum of Modern Art API//


// User clicks button to generate a new random item //
document.getElementById("btn").addEventListener("click", fetchData());

/* Callback function runs a promise chain of fetch commands, first to acquire the objectID and then to use that ID to get 
an object from the API. The object is then parsed for data and published to the HTML page */

function fetchData() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then(response => {return response.json();})
    .then(data => {
        let max = data.total; // "total" is the paramater provided by the MOMA API, which is the total # of objects
        let randomId = Math.floor(Math.random() * (max +1)); // using max as the largest index possible in the array to get a random ObjectId
        let objectId = data.objectIDs[randomId];
        console.log(objectId);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
        .then(response => {
            return response.json();
        }).then(data => {
            let image = (data.primaryImageSmall);
            let desc = (data.title);
            let artist = (data.artistDisplayName);
            let date = (data.objectDate);
            document.getElementById("image").src=image;
            document.getElementById("desc").innerHTML=desc;
            document.getElementById("artist").innerHTML=artist;
            document.getElementById("date").innerHTML=date;
        });
    }); 
    
}


    



