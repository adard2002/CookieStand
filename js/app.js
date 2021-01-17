'use strict';
console.log('Salmon Cookies JS should be working');
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];

var shopTable = document.getElementById('cookieStand-holder');
// console.log(shopTable);

// ------- constructor function --------

function Shop(city, minCust, maxCust, avgCookie){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.totalCookie = 0;
  this.custPerHour = [];
  // pushes each shop to the allShops array
  Shop.allShops.push(this);
}

// cust per hour
Shop.prototype.calcCustPerHour = function(){
  for (var i = 0; i < opHours.length; i++) {
    this.custPerHour.push(random(this.minCust,this.maxCust));
  }
  console.log(this.custPerHour);
};
// cookies per hour based on cust count?
Shop.prototype.calcCookiePerHour = function(){
  this.calcCustPerHour();
  for (var i = 0; i < opHours.length; i++) {
    var hourTotal = Math.ceil(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(hourTotal);
    this.totalCookie += hourTotal;
  }
  // console.log(this.calcCookiePerHour);
};

function random(min, max){
  // console.log(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




function tableHeader(){
  var shopRow = document.createElement('tr');
  // create element
  var tableHeader = document.createElement('th');
  //update the text content
  tableHeader.textContent = 'Locations';
  shopRow.appendChild(tableHeader);
  for (var i = 0; i < opHours.length; i++){
    var openHours = document.createElement('th');
    openHours.textContent = opHours[i];
    shopRow.appendChild(openHours);
  }
  tableHeader.textContent = 'Total Cookies';
  shopRow.appendChild(tableHeader);
  shopTable.appendChild(shopRow);
}

// TODO: make a function that creates the Footer Row for all of your totals for all locations each hour (this is in the video)


function footerRow() {
  var shopRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Total';
  shopRow.appendChild(tableHeader);
  var dailyCookie = 0;
  var hourlyCookie = 0;
  for (var i = 0; i < opHours.length; i++) {
    dailyCookie = 0;
    for (var x = 0; x < Shop.length; x++){
      dailyCookie += Shop.allShops[x].cookiesPerHour[i];
      hourlyCookie += Shop.allShops[x].cookiesPerHour[i];
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = dailyCookie;
    shopRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = hourlyCookie;
  shopRow.appendChild(tableHeader);
  shopTable.appendChild(shopRow);
}
// console.log(footerRow);


Shop.prototype.render = function(){
  this.calcCookiePerHour();
  var shopRowOne = document.createElement('tr');
  // console.log(shopRowOne);
  var shopData = document.createElement('td');
  var shopRow = document.createElement('tr');
  for (var i = 0; i < opHours.length; i++){
    var openHours = document.createElement('td');
    openHours.textContent = this.calcCookiePerHour[i];
    shopRow.appendChild(openHours);
  }
  shopData.textContent = this.city;
  shopRowOne.appendChild(shopData);
  shopTable.appendChild(shopRowOne);
  shopTable.appendChild(shopRow);
  // console.log(this.city);
  // TODO: Add table stuff to append the cookie calculations to the page



  // TODO: keep count of total cookies 15:46?

};





// creates an empty array for the shops to be added to, so that we can iterate through them to grab their information to populate the table
Shop.allShops = [];
// Creating each shop


new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

// this is where the magic happens IFFE
Shop.renderTable = function() {
  // calling the table header to be created here
  tableHeader();
  // then iterating over the allShops array
  for (var i = 0; i < Shop.allShops.length; i++) {
    // calling the render function from line 61 for each shop
    Shop.allShops[i].render();
  }
  // TODO: call the Footer Row function here
  footerRow();
};


Shop.renderTable();






// ----------- This is the form ----------------
// Take in an event parameter so that that we can prevent the default

function handleFormSubmitted(event){
  event.preventDefault();
  console.log(event);
  var cityInput = document.getElementById('city');
  console.log(cityInput);
  var cityValue = cityInput['value'];
  console.log(cityInput['value']);
  console.log(cityValue);

  var minCustomerInput = document.getElementById('minCustomer');
  var minCustomerValue = minCustomerInput['value'];

  var maxCustomerInput = document.getElementById('imageName');
  var maxCustomerValue = maxCustomerInput['value'];
  console.log(cityInput.value);

  var avgCookiesInput = document.getElementById('avgCookies');
  var avgCookiesValue = avgCookiesInput.value; // another way of doing what is done on lines 165 and 162 (var maxCustomerValue = maxCustomerInput['value']);)


  var isGoodWithKids = event.target.isGoodWithKids.checked;
  var isGoodWithDogs = event.target.isGoodWithDogs.checked;
  var isGoodWithCats = event.target.isGoodWithCats.checked;


  // get new shop object
  var newShop = new Shop(cityValue, minCustomerValue, maxCustomerValue, avgCookiesValue, isGoodWithKids, isGoodWithDogs, isGoodWithCats);
  console.log(newShop);

  // make use of our prototypes
  newShop.calcCustPerHour();
  newShop.calcCookiePerHour();
  newShop.render();


  var form = document.getElementById('new-pets');
  form.reset();



} //closing the handleFormSubmitted function




// Set up the event listener to listen to the submit event.
// 1. Which element do we need
var formElement = document.getElementById('new-Shops');

// 2. Which event am I listening for?


// 3. What code should I run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);
