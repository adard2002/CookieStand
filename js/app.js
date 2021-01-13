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

tableHeader();

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
};


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




