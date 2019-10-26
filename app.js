function saveInput(){
  var text_to_save=document.getElementById('businessName').value;
  console.log(text_to_save);
  localStorage.setItem("text", text_to_save); // save the item


}

// function displayValues() {


// }

//console.log(text_to_save)