
$(".search-button").click(function(){
   
  let search=$(".search-term").val();
  let puppyRuns=`https://api.giphy.com/v1/gifs/search?q=${search}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  
  fetch(puppyRuns)
  
  .then(function(response){
    return response.json();
      
  })
  
 .then(function(data){
    console.log(data.data[0].images.original.url);
    
    let gif=data.data[0].images.original.url
  let show=(`<img src="${gif}"/>`);
    
    
     $(".main").html(show);
  
    
  });
});

let ranPet=`https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`

fetch(ranPet)
  
  .then(function(response){
    return response.json();
      
  })
  
 .then(function(data){
    console.log(data.data[0].images);
  let allPet= data.data[0].images.original
  
$(".main").html(`<img src="${allPet}"/>`);

});