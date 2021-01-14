'use script';
console.log('Salmon Cookies JS should be working');
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];

function random(min, max){
  // console.log(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

// cookies per hour
Shop.prototype.calcCookiePerHour = function(){
  this.calcCustPerHour();
  for (var i = 0; i < opHours.length; i++) {
    var hourTotal = Math.ceil(this. custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(hourTotal);
  }
  console.log(this.cookiePerHour);
};

var shopTable = document.getElementById('cookieStand-holder');

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
  shopTable.appendChild(shopRow);
}

// TODO: make a function that creates the Footer Row for all of your totals for all locations each hour (this is in the video)

Shop.prototype.render = function(){
  this.calcCookiePerHour();
  var shopRowOne = document.createElement('tr');
  var shopData = document.createElement('td');
  var shopRow = document.createElement('tr');
  for (var i = 0; i < opHours.length; i++){
    var openHours = document.createElement('tr');
    openHours.textContent = this.calcCookiePerHour[i];
    shopRow.appendChild(openHours);
  }
  shopData.textContent = this.city;
  shopRowOne.appendChild(shopData);
  shopTable.appendChild(shopRowOne);
  shopTable.appendChild(shopRow);
  console.log(this.city);
  // TODO: Add table stuff to append the cookie calculations to the page
  // TODO: keep count of total cookies
};

// creates an empty array for the shops to be added to, so that we can iterate through them to grab their information to populate the table
Shop.allShops = [];
// Creating each shop
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

// this is where the magic happens
(function renderTable() {
  // calling the table header to be created here
  tableHeader();
  // then iterating over the allShops array
  for (var i = 0; i < opHours.length; i++) {
    // calling the render function from line 61 for each shop
    Shop.allShops[i].render();
  }
  // TODO: call the Footer Row function here
})();

// prototype for min
Shop.prototype.setMin = function(){
  this.minCust = randomMin(1,23);
};

// creates random min
function randomMin(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// prototype for max
Shop.prototype.setMax = function(){
  this.maxCust = randomMax(23,65);
};

// creates random max
function randomMax(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}




