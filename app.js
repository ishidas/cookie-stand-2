var pikePlaceMarket = {

  name: "Pike Place Market",
  hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  hourCookies: [],
  totalCookies: 0,
  minCustHr: 17,
  maxCustHr: 88,
  avgCookies: 5.2,

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  cookiesPerHour: function() {
    return Math.floor(this.customersPerHour() * this.avgCookies);
  },

  calcCookies: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourCookies[i] = this.cookiesPerHour();
      console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
      this.totalCookies = this.totalCookies + this.hourCookies[i];
      console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
    }
  },

  display: function() {
    console.log(this.name);
    var storeName = document.createElement('h2');
    var cookieHourList = document.createElement('ul');
    storeName.innerHTML = this.name;
    document.body.appendChild(storeName);
    document.body.appendChild(cookieHourList);
    // this.calcCookies();
    // console.log(this.name + "'s cookies " + this.hourCookies[0] + ' ' + this.hourCookies[1] + ' ' + this.hourCookies[2] + ' ' + this.hourCookies[3] + ' ' + this.hourCookies[4] + ' ' + this.hourCookies[5] + ' ' + this.hourCookies[6] + ' ' + this.hourCookies[7] + ' ' );
    for (var h = 0; h <= this.hours.length; h++) {
      var cookieHourItem = document.createElement('li');
      console.log('Store = ' + this.name + ', this.hours.length = ' + this.hours.length);
      cookieHourItem.innerHTML = this.hours[h] + ': ' + this.hourCookies[h] + ' cookies.';
      console.log(this.hours[h] + ': ' + this.hourCookies[h] + ' cookies.');
      cookieHourList.appendChild(cookieHourItem);
    }
    cookieHourItem.innerHTML = 'Total: ' + this.totalCookies + ' cookies.';
  }
};

// var seaTacAirport = {
//   name: "SeaTac Airport",
//   hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   hourCookies: [],
//   totalCookies: 0,
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCustHr: 1.2,
//   cookiesPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcCookies: function() {
//     for (var i = 0; i < this.hours.length; i++) {
//       this.hourCookies[i] = this.cookiesPerHour();
//       console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
//       this.totalCookies = this.totalCookies + this.hourCookies[i];
//       console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
//     }
//   }
// };

// var southcenterMall = {
//   name: "Southcenter Mall",
//   hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   hourCookies: [],
//   totalCookies: 0,
//   minCustHr: 11,
//   maxCustHr: 38,
//   avgCustHr: 1.9,
//   cookiesPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcCookies: function() {
//     for (var i = 0; i < this.hours.length; i++) {
//       this.hourCookies[i] = this.cookiesPerHour();
//       console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
//       this.totalCookies = this.totalCookies + this.hourCookies[i];
//       console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
//     }
//   }
// };

// var bellevueSquare = {
//   name: "Bellevue Square",
//   hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   hourCookies: [],
//   totalCookies: 0,
//   minCustHr: 20,
//   maxCustHr: 48,
//   avgCustHr: 3.3,
//   cookiesPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcCookies: function() {
//     for (var i = 0; i < this.hours.length; i++) {
//       this.hourCookies[i] = this.cookiesPerHour();
//       console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
//       this.totalCookies = this.totalCookies + this.hourCookies[i];
//       console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
//     }
//   }
// };

// var alki = {
//   name: "Alki",
//   hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   hourCookies: [],
//   totalCookies: 0,
//   minCustHr: 3,
//   maxCustHr: 24,
//   avgCustHr: 2.6,
//   cookiesPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcCookies: function() {
//     for (var i = 0; i < this.hours.length; i++) {
//       this.hourCookies[i] = this.cookiesPerHour();
//       console.log(this.hourCookies[i] + ' cookies at ' + this.hours[i]);
//       this.totalCookies = this.totalCookies + this.hourCookies[i];
//       console.log('Total cookies at ' + this.hours[i] + ' = ' + this.totalCookies);
//     }
//   }
// };


// var store = [pikePlaceMarket, seaTacAirport, southcenterMall, bellevueSquare, alki];
var store = [pikePlaceMarket];

for (var s = 0; s < store.length; s++) {
  store[s].calcCookies();
  store[s].display();
}

