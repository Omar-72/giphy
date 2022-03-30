let puppyRuns="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$(".search-button").click(function(){
  fetch(puppyRuns)
  
  .then(function(response){
    return response.json();
  })
  
  .then(function(data){
    console.log(data.url);
  })
});



