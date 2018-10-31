'use strict';

// var myStores = ['1st and Pike ', 'SeaTac Airport ', 'Seattle Center ', 'Capitol Hill ', 'Alki '];
var hours = ['6 A.M. ', '7 A.M. ', '8 A.M. ', '9 A.M. ', '10 A.M. ', '11 A.M. ', '12 P.M. ', '1 P.M. ', '2 P.M. ', '3 P.M. ', '4 P.M. ', '5 P.M. ', '6 P.M. ', '7 P.M. ', '8 P.M. '];

var stores = [];

function Store(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.name = name;
  this.cookiesPerHourArr = [];
  this.totalDailyCookies = 0;
  this.globalTotalCookies = 0;

  stores.push(this);
   this.render();

}

Store.prototype.cookiesPerHour = function () {
  console.log('inside cookiesperhour function');

  for (var i = 0; i < hours.length; i++) {
    console.log('inside for loop at ' + i);

    // getting random amount of customers between two numbers min and max

    var numOfCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1))
    console.log(numOfCustomers);

    // getting number of cookies

    var numOfCookies = Math.floor(numOfCustomers * this.avgCookiesPerCustomer);
    console.log(numOfCookies);

    this.cookiesPerHourArr.push(numOfCookies);

    this.totalDailyCookies += numOfCookies;
    
  }
  this.cookiesPerHourArr.push(this.totalDailyCookies);
  console.log(this.totalDailyCookies);
  console.log(this.cookiesPerHourArr);

};


Store.prototype.render = function () {

  //body
  var tableBody = document.getElementById('tbl-body');
  var storeRow = document.createElement('tr');
  var tdStoreName = document.createElement('td');
  tdStoreName.textContent = this.name;
  storeRow.appendChild(tdStoreName);

  this.cookiesPerHour();
  console.log(this.cookiesPerHourArr);
  for (var i = 0; i < this.cookiesPerHourArr.length; i++) {
    var tdCookieCount = document.createElement('td');
    tdCookieCount.textContent = this.cookiesPerHourArr[i];
    storeRow.appendChild(tdCookieCount);
  }

  tableBody.appendChild(storeRow);
};

function createTable() {
  var section = document.getElementById('main-content');
  var table = document.createElement('table');
  var tableHead = document.createElement('thead');
  var tableBody = document.createElement('tbody');
  var tableFooter = document.createElement('tfooter');

  section.appendChild(table);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  table.appendChild(tableFooter);

  table.id = 'Cookie-Table';
  tableHead.id = 'tbl-head';
  tableBody.id = 'tbl-body';
  tableFooter.id = 'tbl-foot';
  table.className = 'tbl';

  //create table header
  var tableHeader = document.getElementById('tbl-head');
  var tableHeaderRow = document.createElement('tr');

  //first table head is empty
  var emptyTableHead = document.createElement('th');
  tableHeaderRow.appendChild(emptyTableHead);

  


  //remainder of table heads are store hours
  for (var i = 0; i < hours.length; i++) {

    var tableHead = document.createElement('th');
    tableHead.textContent = hours[i];  // possibly + global
    tableHeaderRow.appendChild(tableHead);
  }

  tableHeader.appendChild(tableHeaderRow);

    // Last table head is the total
    var global = document.createElement('th')
    global.textContent = 'Total';
    tableHeaderRow.appendChild(global);

}

function createFooter(){
  //footer (alignment didn't look right when I used tbl-foot so I changed to tbl-body...why didn't tbl-foot work??)
  var tableBody = document.getElementById('tbl-body');
  var totalRow = document.createElement('tr');
  var tdTotalsLabel = document.createElement('td');
  var totalCookiesPerDay = 0;
  tdTotalsLabel.textContent = 'Totals';
  totalRow.appendChild(tdTotalsLabel);

  //for loop will loop through the hours
  for (var i = 0; i < hours.length; i++) {
    var totalCookiesPerHour = 0;

    //for loop for stores
    for (var j = 0; j < stores.length; j++) {
      totalCookiesPerHour += stores[j].cookiesPerHourArr[i];
    }
    totalCookiesPerDay += totalCookiesPerHour;
    
    var tdTotalcookies = document.createElement('td');
    tdTotalcookies.textContent = totalCookiesPerHour;
    totalRow.appendChild(tdTotalcookies);
  
  }
  var dailyTotalEl = document.createElement('td');
  dailyTotalEl.textContent = totalCookiesPerDay;
  totalRow.appendChild(dailyTotalEl);
  tableBody.appendChild(totalRow);


}

createTable();


new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 7, 55, 4.3);
new Store('Seattle', 15, 69, 7.3);
new Store('Capital Hill', 35, 45, 5.2);
new Store('Alki', 30, 75, 8.3);

createFooter();

console.log(stores);