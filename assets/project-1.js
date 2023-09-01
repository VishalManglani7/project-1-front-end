//API FUNCTIONALITY
//upon starting page, function runs which uses fandango API to display the 3 newest releases (or most popular)
//function continues with the Youtube API. Searches the above movie name. Sorts searches by view count and displays the
//most viewed in the embeded API.

//USER INTERACTIONS/LOCAL STORAGE
//On.Click command associated with green checkbox next to each movie title
//Upon clicking, movie is added to local storage, and displayed on lefthand side bar.
//Upon clicking red X when movie is on the side bar, movie name is removed.

function startApp(){
    var requestURL = 'http://www.omdbapi.com/?t=barbie&apikey=5ee7c193'; //title, rating, genre, runtime
    $.ajax({
        url: requestURL,
        method: "GET"
    })
        .then(function(response){
            console.log(response);
            $('.title').text(response.Title);
            $('.rating').text("Rated: "+ response.Rated);
            $('.runtime').text("Runtime: "+ response.Runtime);
            $('.genre').text("Genre: "+ response.Genre);
            var seeList = JSON.parse(localStorage.getItem('seeList'))||[];
            var title = response.Title;
            $('.title').on('click', function(){
                localStorage.setItem('title', title);
                seeList.unshift(title);
                localStorage.setItem('seeList',JSON.stringify(seeList));
                $('.movie-list').append("<li>"+localStorage.getItem('title')+"</li>");
    
           })


 })
        
}
startApp();