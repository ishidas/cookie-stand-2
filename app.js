function CookieStand(name, minCustHr, maxCustHr, avgCookies) {

  this.name = name;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  this.hours =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  this.hourCookies = [];
  this.totalCookies = 0;

  this.customersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.cookiesPerHour = function() {
    return Math.floor(this.customersPerHour() * this.avgCookies);
  };

  this.calcCookies = function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  };

  this.display = function() {
    console.log(this.name);
    var storeName = document.createElement('h2');
    var cookieHourList = document.createElement('ul');
    storeName.innerHTML = this.name;
    document.body.appendChild(storeName);
    document.body.appendChild(cookieHourList);
    // this.calcCookies();
    // console.log(this.name + "'s cookies " + this.hourCookies[0] + ' ' + this.hourCookies[1] + ' ' + this.hourCookies[2] + ' ' + this.hourCookies[3] + ' ' + this.hourCookies[4] + ' ' + this.hourCookies[5] + ' ' + this.hourCookies[6] + ' ' + this.hourCookies[7] + ' ' );
    for (var h = 0; h < this.hours.length; h++) {
      var cookieHourItem = document.createElement('li');
      console.log('Store = ' + this.name + ', this.hours.length = ' + this.hours.length);
      cookieHourItem.innerHTML = this.hours[h] + ': ' + this.hourCookies[h] + ' cookies.';
      console.log('h= ' + h);
      console.log(this.hours[h] + ': ' + this.hourCookies[h] + ' cookies.');
      cookieHourList.appendChild(cookieHourItem);
    }

    var cookieHourItem = document.createElement('li');
    cookieHourItem.innerHTML = 'Total: ' + this.totalCookies + ' cookies.';
    cookieHourList.appendChild(cookieHourItem);
  };
}

var pikePlaceMarket = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTacAirport = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southcenterMall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);
var store = [pikePlaceMarket, seaTacAirport, southcenterMall, bellevueSquare, alki];
// var store = [pikePlaceMarket];

for (var s = 0; s < store.length; s++) {
  store[s].calcCookies();
  store[s].display();
}

