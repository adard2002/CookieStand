'use script';
console.log('Fishes of Salmon Cookies');

opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];


var storeSeattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,

  hourlyCust: function (){
    for (var i = 0; i < opHours.length; i++) {
      this.custPerHour.push(random(this.minCust,this.maxCust));
  }
}, //closes hourly cust function
  
calcCookiesPerHour: function() {
  this.hourlyCust();
  for (var i = 0; i < opHours.length; i++) {
    // create a variable to hold the cookies each hour
    var hourTotal = Math.ceil(this.customersEachHour[i] * this.avgSale);

    this.cookiesPerHour.push(hourTotal);
    // this is where we will keep total cookies
  }
},

render(){
  // render object literal to the page
  this.calcCookiesPerHour();
},


storeSeattle.render();

var storeTokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,
};

var storeDubia = {
  city: 'Dubia',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,
}; 

var storeParis = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,
}; 

var storeLima = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,
}; 




function random(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;
};