function createAddItemWindow() {
  //Create new window
  addItemWindown = new BrowserWindow({
      width: 300,
      height: 200,
      title: 'Add Item',
  
      //The lines below solved the issue
      webPreferences: {
          nodeIntegration: true
      }
  })}


function saveInput(){
  
  var name_to_save=document.getElementById('businessName').value;
  var loc_to_save=document.getElementById('businessLocation').value;
  console.log(name_to_save);
  console.log(loc_to_save);
  localStorage.setItem("name", name_to_save); // save the item
  console.log(localStorage.getItem("name"))
  localStorage.setItem("location", loc_to_save); // save the item
  console.log(localStorage.getItem("location"))
  loadPage();

//   'use strict';
// //C:\Users\Daivi\Documents\yelp-fusion\fusion\node
//   const yelp = require('yelp-fusion');


//   const apiKey = 'ohi02RCmkq2ftmq-K7gmiUIUzBYRRS4H2Cd_gHWppiwwM_UHICwC9oFveweoj0yXcHFZZyxpRbN0BAoY6bsE9cYWDl1oEabfzHJZArVDKTjHSf0nm0WnO4c2_YC0XXYx';

//   const searchRequest = {
//     term:localStorage.getItem('name'),
//     location: localStorage.getItem('location')
//   };

//   const client = yelp.client(apiKey);

//   client.search(searchRequest).then(response => {
//     const firstResult = response.jsonBody.businesses[0]["id"];
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     console.log(prettyJson);
//   }).catch(e => {
//     console.log(e);
//   });
  document.location.href = "results.html";
}

function loadPage() {
  $('body').append('<div style="" id="loadingDiv"><div class="spinner-loader text-primary">Loading...</div></div>');
  $(window).on('load', function(){
    setTimeout(removeLoader, 9000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( "#loadingDiv" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loadingDiv" ).remove(); //makes page more lightweight 
    });  
  }
  console.log('loading');
  //window.location.href = "results.html";
}


function resultsRedirect() {


}