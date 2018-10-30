'use strict';

var myStores = ['1st and Pike ', 'SeaTac Airport ', 'Seattle Center ', 'Capitol Hill ', 'Alki '];
var hours = ['6 A.M. ', '7 A.M. ', '8 A.M. ', '9 A.M. ', '10 A.M. ', '11 A.M. ', '12 P.M. ', '1 P.M. ', '2 P.M. ', '3 P.M. ', '4 P.M. ', '5 P.M. ', '6 P.M. ', '7 P.M. ', '8 P.M. '];
var firstAandPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  name: '1st And Pike',
  cookiesPerHour: function () {
    console.log('inside cookiesperhour function');

    var cookieArray = [];

    for (var i = 0; i < hours.length; i++) {
      console.log('inside for loop at ' + i);

      var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
      console.log(numOfCustomers);

      var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
      console.log(numOfCookies);
      cookieArray.push(numOfCookies);
    }

    return cookieArray;
  },

  render: function () {
    var mainContainer = document.getElementById('main-content');
    var section = document.createElement('section');
    var headline = document.createElement('h2');
    headline.textContent = `Cookies Sold per hour at ${this.name}`;
    section.appendChild(headline);

    var cookiesPerHourArray = this.cookiesPerHour();
    console.log(cookiesPerHourArray);
    for (var i = 0; i < hours.length; i++) {

      var paragraph = document.createElement('p');
      paragraph.textContent = `${hours[i]}: ${cookiesPerHourArray[i]}`;
      section.appendChild(paragraph);
    }


    mainContainer.appendChild(section);
  }
};

firstAandPike.render();


var SeaTac = {
  minHourlyCustomers: 25,
  maxHourlyCustomers: 70,
  name: 'SeaTac Airport',
  avgCookiesPerCustomer: 4.3,

  cookiesPerHour: function () {

    var cookieArray = [];

    for (var i = 0; i < hours.length; i++) {

      var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
      var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
      cookieArray.push(numOfCookies)
    }
    return cookieArray;
  },

  render: function () {

    var mainContainer = document.getElementById('main-content');
    var section = document.createElement('section');
    var headline = document.createElement('h2');
    headline.textContent = `Cookies Sold per hour at ${this.name}`;
    section.appendChild(headline);

    var cookiesPerHourArray = this.cookiesPerHour();
    console.log(cookiesPerHourArray);
    for (var i = 0; i < hours.length; i++) {

      var paragraph = document.createElement('p');
      paragraph.textContent = `${hours[i]}: ${cookiesPerHourArray[i]}`;
      section.appendChild(paragraph);
    }

    mainContainer.appendChild(section);
  }
};

SeaTac.render();


var Seattle = {
  minHourlyCustomers: 25,
  maxHourlyCustomers: 70,
  name: 'Seattle Center',
  avgCookiesPerCustomer: 4.3,

  cookiesPerHour: function () {

    var cookieArray = [];

    for (var i = 0; i < hours.length; i++) {

      var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
      var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
      cookieArray.push(numOfCookies)
    }
    return cookieArray;
  },

  render: function () {

    var mainContainer = document.getElementById('main-content');
    var section = document.createElement('section');
    var headline = document.createElement('h2');
    headline.textContent = `Cookies Sold per hour at ${this.name}`;
    section.appendChild(headline);

    var cookiesPerHourArray = this.cookiesPerHour();
    console.log(cookiesPerHourArray);
    for (var i = 0; i < hours.length; i++) {

      var paragraph = document.createElement('p');
      paragraph.textContent = `${hours[i]}: ${cookiesPerHourArray[i]}`;
      section.appendChild(paragraph);
    }

    mainContainer.appendChild(section);
  }
};

Seattle.render();

var Capitol = {
  minHourlyCustomers: 25,
  maxHourlyCustomers: 70,
  name: 'Capitol Hill',
  avgCookiesPerCustomer: 4.3,

  cookiesPerHour: function () {

    var cookieArray = [];

    for (var i = 0; i < hours.length; i++) {

      var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
      var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
      cookieArray.push(numOfCookies)
    }
    return cookieArray;
  },

  render: function () {

    var mainContainer = document.getElementById('main-content');
    var section = document.createElement('section');
    var headline = document.createElement('h2');
    headline.textContent = `Cookies Sold per hour at ${this.name}`;
    section.appendChild(headline);

    var cookiesPerHourArray = this.cookiesPerHour();
    console.log(cookiesPerHourArray);
    for (var i = 0; i < hours.length; i++) {

      var paragraph = document.createElement('p');
      paragraph.textContent = `${hours[i]}: ${cookiesPerHourArray[i]}`;
      section.appendChild(paragraph);
    }

    mainContainer.appendChild(section);
  }
};

Capitol.render();

var alki = {
  minHourlyCustomers: 25,
  maxHourlyCustomers: 70,
  name: 'Alki',
  avgCookiesPerCustomer: 4.3,

  cookiesPerHour: function () {

    var cookieArray = [];

    for (var i = 0; i < hours.length; i++) {

      var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
      var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
      cookieArray.push(numOfCookies)
    }
    return cookieArray;
  },

  render: function () {

    var mainContainer = document.getElementById('main-content');
    var section = document.createElement('section');
    var headline = document.createElement('h2');
    headline.textContent = `Cookies Sold per hour at ${this.name}`;
    section.appendChild(headline);

    var cookiesPerHourArray = this.cookiesPerHour();
    console.log(cookiesPerHourArray);
    for (var i = 0; i < hours.length; i++) {

      var paragraph = document.createElement('p');
      paragraph.textContent = `${hours[i]}: ${cookiesPerHourArray[i]}`;
      section.appendChild(paragraph);
    }

    mainContainer.appendChild(section);
  }
};

alki.render();