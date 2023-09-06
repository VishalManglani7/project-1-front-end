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
                $('.collection').append("<li>"+localStorage.getItem('title')+"</li>");
    
           })
    
 })        
}

             // 2. This code loads the IFrame Player API code asynchronously.
             var tag = document.createElement('script');
      
             tag.src = "https://www.youtube.com/iframe_api";
             var firstScriptTag = document.getElementsByTagName('script')[0];
             firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
       
             // 3. This function creates an <iframe> (and YouTube player)
             //    after the API code downloads.
             var player;
             function onYouTubeIframeAPIReady() {
               player = new YT.Player('player', {
                 height: '280',
                 width: '490',
                 videoId: 'pBk4NYhWNMM',
                 playerVars: {
                   'playsinline': 1
                 },
                 events: {
                   'onReady': onPlayerReady,
                   'onStateChange': onPlayerStateChange
                 }

                 
               });
             }
       
             // 4. The API will call this function when the video player is ready.
             function onPlayerReady(event) {
               event.target.playVideo();
             }
       
             // 5. The API calls this function when the player's state changes.
             //    The function indicates that when playing a video (state=1),
             //    the player should play for six seconds and then stop.
             var done = false;
             function onPlayerStateChange(event) {
               if (event.data == YT.PlayerState.PLAYING && !done) {
                 done = true;
               }
             }
             function stopVideo() {
               player.stopVideo();
             }
startApp();
onYouTubeIframeAPIReady();