//API FUNCTIONALITY
//upon starting page, function runs which uses fandango API to display the 3 newest releases (or most popular)
//function continues with the Youtube API. Searches the above movie name. Sorts searches by view count and displays the
//most viewed in the embeded API.

//USER INTERACTIONS/LOCAL STORAGE
//On.Click command associated with green checkbox next to each movie title
//Upon clicking, movie is added to local storage, and displayed on lefthand side bar.
//Upon clicking red X when movie is on the side bar, movie name is removed.

function startApp(){
    var requestURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5ee7c193' //title, rating, genre, runtime
    fetch(requestURL)
        .then(function(response){
            return response.json();
        .then(function(){
            return response.json();
        }
}}