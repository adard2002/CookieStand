'use script';
console.log('Fishes of Salmon Cookies');
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];
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
      // console.log(this. custPerHour[i]);
      // create a variable to hold the cookies each hour
      var hourTotal = Math.ceil(this. custPerHour[i] * this.avgSale);
      this.cookiesPerHour.push(hourTotal);
      console.log(this.cookiesPerHour);
      // this is where we will keep total cookies
      this.totalCookie = this.totalCookie + hourTotal;
      console.log('total cookies',this.totalCookie);
    }// closes for loop
  },// closes calcCookiesPerHour function
  render(){
    // render object literal to the page
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    // console.log(unorderedList);
    for(var i = 0; i < opHours.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = opHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies!';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total ' + this.totalCookie + ' cookie!';
    unorderedList.appendChild(listItem);
  }
};
storeSeattle.render();
var storeTokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookie: 0,
  hourlyCust: function (){
    for (var i = 0; i < opHours.length; i++) {
      this.custPerHour.push(random(this.minCust,this.maxCust));
    }
  },
  calcCookiesPerHour: function() {
    this.hourlyCust();
    for (var i = 0; i < opHours.length; i++) {
      var hourTotal = Math.ceil(this. custPerHour[i] * this.avgSale);
      this.cookiesPerHour.push(hourTotal);
      console.log(this.cookiesPerHour);
      this.totalCookie = this.totalCookie + hourTotal;
      console.log('total cookies',this.totalCookie);
    }
  },
  render(){
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    // console.log(unorderedList);
    for(var i = 0; i < opHours.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = opHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies!';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total ' + this.totalCookie + ' cookie!';
    unorderedList.appendChild(listItem);
  }
};
storeTokyo.render();
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
  // console.log(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;
};