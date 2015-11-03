var pikePlaceMarket = {

  name: "Pike Place Market",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 17,
  maxCustHr: 88,
  avgCustHr: 5.2,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  }
};

var seaTacAirport = {
  name: "SeaTac Airport",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 6,
  maxCustHr: 44,
  avgCustHr: 1.2,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  }
};

var southcenterMall = {
  name: "Southcenter Mall",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 11,
  maxCustHr: 38,
  avgCustHr: 1.9,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  }
};

var bellevueSquare = {
  name: "Bellevue Square",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 20,
  maxCustHr: 48,
  avgCustHr: 3.3,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  }
};

var alki = {
  name: "Alki",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 3,
  maxCustHr: 24,
  avgCustHr: 2.6,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  }
};


var store = [pikePlaceMarket, seaTacAirport, southcenterMall, bellevueSquare, alki];

for (var s = 0; s < store.length; s++) {
  var storeName = document.createElement('h2');
  var cookieHourList = document.createElement('ul');
  var cookieHourItem = document.createElement('li');
  console.log(store[s].name);
  storeName.innerHTML = store[s].name;
  document.body.appendChild(storeName);
  document.body.appendChild(cookieHourList);
  store[s].calcCookies();
  for (var h = 0; h < store[s].hours.length; h++) {
    console.log('Store = ' + store[s] + ', store[s].hours.length = ' + store[s].hours.length)
    cookieHourItem.innerHTML = store[s].hours[h] + ': ' + store[s].hourCookies[h] + ' cookies.';
    cookieHourList.appendChild(cookieHourItem);
  }
  cookieHourItem.innerHTML = 'Total: ' + store[s].totalCookies + ' cookies.';
}

