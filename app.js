function saveInput(){
  var name_to_save=document.getElementById('businessName').value;
  var loc_to_save=document.getElementById('businessLocation').value;
  console.log(name_to_save);
  console.log(loc_to_save);
  localStorage.setItem("text", name_to_save); // save the item
  localStorage.setItem("text", loc_to_save); // save the item
}

// function displayValues() {


// }

//console.log(text_to_save)