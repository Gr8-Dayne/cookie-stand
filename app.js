/////Salmon Cookie Deal/////

// Several classmates, TA's, and JB were (not) harmed in the making of this code (but for real helped me out).

'use strict';

// "hours" Global Variable

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// New Element Function

function addElement(tag, parent, text) {
  var element = document.createElement(tag);
  parent.appendChild(element);
  element.textContent = text;
  return element;
}

// Constructor Function

function CityShop(cityName, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = cityName;
  this.min = minCustomers;
  this.max = maxCustomers;
  this.avg = avgCookiesSold;
  this.sales = [];
}

// Create Parent Element Reference

var parent = document.getElementById('theDivision');

// Add New CityShops

var stores = [];
stores.push(new CityShop('Seattle', 23, 65, 6.3));
stores.push(new CityShop('Tokyo', 3, 24, 1.2));
stores.push(new CityShop('Dubai', 11, 38, 3.7));
stores.push(new CityShop('Paris', 20, 38, 6.3));
stores.push(new CityShop('Lima', 2, 16, 4.6));

// Prototype

CityShop.prototype.getCookieCount = function () {
  var random = Math.ceil(this.getRandomNum * this.avg);
  return random;
}

// Table Render

CityShop.prototype.render = function(parent) {

  var dataRow = addElement('tr', tableElement, this.name);

  var total = 0;

  for (var i = 0; i < hours.length; i++) {
    var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    var randoms = Math.ceil(random * this.avg);
    total += randoms;
      addElement('td', dataRow, randoms);
  }
  var tableHeader = addElement('th', tableElement, hours);
  addElement('tr', dataRow, this.name + " total:  " + total);
}

var tableElement = addElement('table', parent);

// var tableHeader = addElement('th', tableElement, hours);

for (var i = 0; i < stores.length; i++) {
    var city = stores[i];
    city.render(parent);
}

CityShop.prototype.getCookieCount = function () {
    var random = Math.ceil(this.getRandomNum * this.avg);
    return random;
}

/////Day One Work/////

// var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// var storeOne = {
//   location : 'Seattle',
//   min : 23,
//   max : 65,
//   cookies : 6.5,
//   customers : [],
//   individualSales : [],
//   getSales : function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }
// }


// var storeTwo = {
//   location : 'Tokyo',
//   min : 3,
//   max : 24,
//   cookies : 1.2,
//   customers : [],
//   individualSales : [],
//   getSales : function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }

// }

// var storeThree = {
//   location : 'Dubai',
//   min : 11,
//   max : 38,
//   cookies : 3.7,
//   customers : [],
//   individualSales : [],
//   getSales : function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }

// }

// var storeFour = {
//   location : 'Paris',
//   min : 20,
//   max : 38,
//   cookies : 2.3,
//   customers : [],
//   individualSales : [],
//   getSales : function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }

// }

// var storeFive = {
//   location : 'Lima',
//   min : 2,
//   max : 16,
//   cookies : 4.6,
//   customers : [],
//   individualSales : [],
//   getSales : function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }

// }

// // var storeLocations = [storeOne, storeTwo, storeThree, storeFour, storeFive];

// function getCustomerInfo(store) {
//   for (var i = 0; i < hours.length; i++) {
//   store.customers[i] = Math.ceil(store.getSales());
//   }
// }

// function getCookieInfo(store) {
//   for (var i = 0; i < hours.length; i++) {
//   store.individualSales[i] = (Math.ceil(store.customers[i] * store.cookies) + ' Cookies');
//   }
// }

// //Seattle
// getCustomerInfo(storeOne);
// console.log('Seattle customers for the day: ' + storeOne.customers);

// getCookieInfo(storeOne);
// console.log('Seattle cookies sold for the day: ' + storeOne.individualSales);

// //Tokyo
// getCustomerInfo(storeTwo);
// console.log('Tokyo customers for the day: ' + storeTwo.customers);

// getCookieInfo(storeTwo);
// console.log('Tokyo cookies sold for the day: ' + storeTwo.individualSales);

// //Dubai
// getCustomerInfo(storeThree);
// console.log('Dubai customers for the day: ' + storeThree.customers);

// getCookieInfo(storeThree);
// console.log('Dubai cookies sold for the day: ' + storeThree.individualSales);

// //Paris
// getCustomerInfo(storeFour);
// console.log('Paris customers for the day: ' + storeFour.customers);

// getCookieInfo(storeFour);
// console.log('Paris cookies sold for the day: ' + storeFour.individualSales);

// //Lima
// getCustomerInfo(storeFive);
// console.log('Lima customers for the day: ' + storeFive.customers);

// getCookieInfo(storeFive);
// console.log('Lima cookies sold for the day: ' + storeFive.individualSales);


// // Seattle
// var container = document.getElementById('emerald');

//   var article = document.createElement('article')
//   container.appendChild(article) 

//   var listElement = document.createElement('ul');
//   article.appendChild(listElement);


//   for (var i = 0; i < storeOne.individualSales.length; i++) {
//     var liElement = document.createElement('li');
//     listElement.appendChild(liElement);
//     var salesOfTheCookie = storeOne.individualSales[i];
//     liElement.textContent = hours[i] + salesOfTheCookie; 
//   }

// //     for (var j = 0; j < hours.length; j++) {
// //       var li = document.createElement('li2');
// //       var cookieSum1 = storeOne.individualSales;
// //       li.textContent = cookieSum1 + ' cookies total.';
// //       listElement.appendChild(li);
// //     }


// // Tokyo
// var container = document.getElementById('drift');

//   var article = document.createElement('article')
//   container.appendChild(article) 

//   var listElement = document.createElement('ul');
//   article.appendChild(listElement);


//   for (var i = 0; i < storeTwo.individualSales.length; i++) {
//     var liElement = document.createElement('li');
//     listElement.appendChild(liElement);
//     var salesOfTheCookie = storeTwo.individualSales[i];
//     liElement.textContent = hours[i] + salesOfTheCookie; 
//   }

// // Dubai
// var container = document.getElementById('supercar');

//   var article = document.createElement('article')
//   container.appendChild(article) 

//   var listElement = document.createElement('ul');
//   article.appendChild(listElement);


//   for (var i = 0; i < storeThree.individualSales.length; i++) {
//     var liElement = document.createElement('li');
//     listElement.appendChild(liElement);
//     var salesOfTheCookie = storeThree.individualSales[i];
//     liElement.textContent = hours[i] + salesOfTheCookie; 
//   }

// // Paris
// var container = document.getElementById('tower');

//   var article = document.createElement('article')
//   container.appendChild(article) 

//   var listElement = document.createElement('ul');
//   article.appendChild(listElement);


//   for (var i = 0; i < storeFour.individualSales.length; i++) {
//     var liElement = document.createElement('li');
//     listElement.appendChild(liElement);
//     var salesOfTheCookie = storeFour.individualSales[i];
//     liElement.textContent = hours[i] + salesOfTheCookie; 
//   }

// // Lima
// var container = document.getElementById('flute');

//   var article = document.createElement('article')
//   container.appendChild(article) 

//   var listElement = document.createElement('ul');
//   article.appendChild(listElement);


//   for (var i = 0; i < storeFive.individualSales.length; i++) {
//     var liElement = document.createElement('li');
//     listElement.appendChild(liElement);
//     var salesOfTheCookie = storeFive.individualSales[i];
//     liElement.textContent = hours[i] + salesOfTheCookie; 
//   }