var pikePlaceMarket = {

  name: "Pike Place Market"
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
  name: "SeaTac Airport"
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
  name: "SouthcenterMall"
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
  name: "Bellevue Square"
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
  name: "Alki"
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
