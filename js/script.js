let puppyRuns="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";

$(".search-button").click(function(){
  fetch(puppyRuns)
  
  .then(function(response){
    return response.json();
      
  })
  
 .then(function(data){
    console.log(data[0].images.original.mp4);
    $(".main").append(`<img src="${data[0].images.original.mp4}">`);
  });
});



