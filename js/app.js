'use strict';
console.log('JS should be working');

var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
console.log('Show me hours of operation: ',hourOfOp);

var storeSeattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0,
  hourlyCust: function (){
    for (var i = 0; i < opHours.length; i++) {
    this.custPerHour.push(random(this.minCust,this.maxCust));  
    } 
  }, //closes hourlyCust function

  calcCookiesPerHour: function(){
    this.hourlyCust();
    for (var i = 0; i < hourOfOp.length; i++) {
      //Create a variable to hold the cookies each hour
      //then, we take the customer per hour that we calculate in the method hourlyCust and multiply is times the avgCookieSale amount that is given to us. We are now rendering numbers in our arrays. 
      var thisHourTotal = Math.ceil(this.custPerHour[i] * this.avgCookie);
      console.log('This hour: ' + opHours[i] + ' has a total of ' + thisHourTotal);
      this.cookiesPerHour.push(thisHourTotal);
      //this where we will keep running total of cookies.
      this.totalCookies = this.totalCookies + thisHourTotal;
      // or we can  write it like this
      // this.totalCookies += thisHourTotal;
    }
  },
  render(){
    this.calcCookiesPerHour();
//render object literal to the page
  }
};
console.log('Show me my first store object: ',storeSeattle);
storeSeattle.render();

var storeTokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0
};

var storeDubai = {
  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0
};

var storeParis = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0
};

var storeLima = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0
};
function random(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
};