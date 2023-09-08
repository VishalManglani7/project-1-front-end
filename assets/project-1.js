//API FUNCTIONALITY
//upon starting page, function runs which uses fandango API to display the 3 newest releases (or most popular)
//function continues with the Youtube API. Searches the above movie name. Sorts searches by view count and displays the
//most viewed in the embeded API.

//USER INTERACTIONS/LOCAL STORAGE
//On.Click command associated with green checkbox next to each movie title
//Upon clicking, movie is added to local storage, and displayed on lefthand side bar.
//Upon clicking red X when movie is on the side bar, movie name is removed.

function startApp(){
     var seeList = JSON.parse(localStorage.getItem('seeList'))||[];
      var requestURLBarbie = 'http://www.omdbapi.com/?t=barbie&apikey=5ee7c193'; //title, rating, genre, runtime
      $.ajax({
          url: requestURLBarbie,
          method: "GET"        
      })
          .then(function(response){
              console.log(response);
              $('.barbie-title').text(response.Title);
              $('.barbie-rating').text("Rated: "+ response.Rated);
              $('.barbie-runtime').text("Runtime: "+ response.Runtime);
              $('.barbie-genre').text("Genre: "+ response.Genre); 
              var seeList = JSON.parse(localStorage.getItem('seeList'))||[];
              var barbieTitle = response.Title;
              localStorage.setItem('barbie-title', barbieTitle);
              $('.barbie-title').on('click', function(){
                seeList.unshift(barbieTitle);
                localStorage.setItem('seeList',JSON.stringify(seeList));
                  $('.movie-list').append("<li>"+localStorage.getItem('barbie-title')+"</li>");
              });
                  var requestURLOpp = 'http://www.omdbapi.com/?t=oppenheimer&apikey=5ee7c193'; //title, rating, genre, runtime
                  $.ajax({
                      url: requestURLOpp,
                      method: "GET"        
                  })
                      .then(function(response){
                          console.log(response);
                          $('.opp-title').text(response.Title);
                          $('.opp-rating').text("Rated: "+ response.Rated);
                          $('.opp-runtime').text("Runtime: "+ response.Runtime);
                          $('.opp-genre').text("Genre: "+ response.Genre); 

                          var oppTitle = response.Title;
                          localStorage.setItem('opp-title', oppTitle);
                          $('.opp-title').on('click', function(){
                              localStorage.setItem('opp-title', oppTitle);
                              seeList.unshift(oppTitle);
                              localStorage.setItem('seeList',JSON.stringify(seeList));
                              $('.movie-list').append("<li class='opp'>" + localStorage.getItem('opp-title') + "</li>");


                              
                              // $('.opp').on('click', function () {
                              //   // Calculate the position of the movie on the page
                              //   var moviePosition = $(this).offset().top;

                              //   window.scrollTo(0, moviePosition);
                              
                              });
                         })
                  
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
             var barbiePlayer;
             var oppPlayer;
             function onYouTubeIframeAPIReady() {
               barbiePlayer = new YT.Player('barbie-player', {
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
               oppPlayer = new YT.Player('opp-player', {
                height: '280',
                width: '490',
                videoId: 'bK6ldnjE3Y0',
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