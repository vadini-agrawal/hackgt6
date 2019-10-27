console.log(document.getElementById('business-name'));

document.getElementById('business-name').innerHTML = localStorage.getItem('name') + ', ' +  localStorage.getItem('location');
console.log('Results page');
console.log(localStorage.getItem('name'));