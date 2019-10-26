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