function CookieStand(name, minCustHr, maxCustHr, avgCookies) {

  this.name = name;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  //hours =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  this.hourCookies = [];
  this.totalCookies = 0;

  this.customersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.cookiesPerHour = function() {
    return Math.floor(this.customersPerHour() * this.avgCookies);
  };

  this.calcCookies = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + hours[i] + ' = ' + this.totalCookies);
    }
  };

  this.display = function() {
    console.log(this.name);
    //begin data rows
     var cookieHourTr = document.createElement('tr');
    cookieHourTable.appendChild(cookieHourTr);
    var cookieHourTd = document.createElement('td');
    cookieHourTd.innerHTML = this.name;
    cookieHourTr.appendChild(cookieHourTd);

    for (var i = 0; i < hours.length; i++) {
      var cookieHourTd = document.createElement('td');
      cookieHourTd.innerHTML = this.hourCookies[i];
      cookieHourTr.appendChild(cookieHourTd);
    }

    var cookieHourTd = document.createElement('td');
    cookieHourTd.innerHTML = this.totalCookies;
    cookieHourTr.appendChild(cookieHourTd);
    //end data rows
  };
}

var pikePlaceMarket = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTacAirport = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southcenterMall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

var store = [pikePlaceMarket, seaTacAirport, southcenterMall, bellevueSquare, alki];
var hours =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var cookieHourTable = document.createElement('table');
document.body.appendChild(cookieHourTable);
// create header row
var cookieHourTr = document.createElement('tr');
cookieHourTable.appendChild(cookieHourTr);
var cookieHourTh = document.createElement('th');
cookieHourTh.innerHTML = ' ';
cookieHourTr.appendChild(cookieHourTh);

for (var i = 0; i < hours.length; i++) {
  var cookieHourTh = document.createElement('th');
  cookieHourTh.innerHTML = hours[i];
  cookieHourTr.appendChild(cookieHourTh);
}

var cookieHourTh = document.createElement('th');
cookieHourTh.innerHTML = 'Total';
cookieHourTr.appendChild(cookieHourTh);
// end header row

for (var s = 0; s < store.length; s++) {
  store[s].calcCookies();
  store[s].display();
}

