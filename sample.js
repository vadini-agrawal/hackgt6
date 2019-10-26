'use strict';
//C:\Users\Daivi\Documents\yelp-fusion\fusion\node
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'ohi02RCmkq2ftmq-K7gmiUIUzBYRRS4H2Cd_gHWppiwwM_UHICwC9oFveweoj0yXcHFZZyxpRbN0BAoY6bsE9cYWDl1oEabfzHJZArVDKTjHSf0nm0WnO4c2_YC0XXYx';

const searchRequest = {
  term:'Starbucks',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0]["id"];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});