// Salmon Cookie deal

'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }

var storeOne = {
  location : 'Seattle',
  min : 23,
  max : 65,
  cookies : 6.5,
  customers : [],
  individualSales : [],
  getSales : function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}


var storeTwo = {
  location : 'Tokyo',
  min : 3,
  max : 24,
  cookies : 1.2,
  customers : [],
  individualSales : [],
  getSales : function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}

var storeThree = {
  location : 'Dubai',
  min : 11,
  max : 38,
  cookies : 3.7,
  customers : [],
  individualSales : [],
  getSales : function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}

var storeFour = {
  location : 'Paris',
  min : 20,
  max : 38,
  cookies : 2.3,
  customers : [],
  individualSales : [],
  getSales : function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}

var storeFive = {
  location : 'Lima',
  min : 2,
  max : 16,
  cookies : 4.6,
  customers : [],
  individualSales : [],
  getSales : function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}

// function something(sumArr) {
//   var valueHold = 0;
//   for (var i = 0; i < hours.length; i++){
//     var innerVar = sum(valueHold, sumArr[i]);
//     valueHold = innerVar[0];
//   }
//   var arrayMsg = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${innerVar[0]} is their sum.`;
//   return [innerVar[0], arrayMsg];

// }

function getCustomerInfo(store) {
  for (var i = 0; i < hours.length; i++) {
  store.customers[i] = Math.ceil(store.getSales());
  }
}

function getCookieInfo(store) {
  for (var i = 0; i < hours.length; i++) {
  store.individualSales[i] = (Math.ceil(store.customers[i] * store.cookies) + ' Cookies');
  }
}

// function totalCookies(store) {
//   for (var i = 0; i < individualSales.length; i++){
//     var innerVar = sum(valueHold, individualSales[i]);
//     valueHold = innerVar[0];
//   }
// }

//Seattle
getCustomerInfo(storeOne);
console.log('Seattle customers for the day: ' + storeOne.customers);

getCookieInfo(storeOne);
console.log('Seattle cookies sold for the day: ' + storeOne.individualSales);

//Tokyo
getCustomerInfo(storeTwo);
console.log('Tokyo customers for the day: ' + storeTwo.customers);

getCookieInfo(storeTwo);
console.log('Tokyo cookies sold for the day: ' + storeTwo.individualSales);

//Dubai
getCustomerInfo(storeThree);
console.log('Dubai customers for the day: ' + storeThree.customers);

getCookieInfo(storeThree);
console.log('Dubai cookies sold for the day: ' + storeThree.individualSales);

//Paris
getCustomerInfo(storeFour);
console.log('Paris customers for the day: ' + storeFour.customers);

getCookieInfo(storeFour);
console.log('Paris cookies sold for the day: ' + storeFour.individualSales);

//Lima
getCustomerInfo(storeFive);
console.log('Lima customers for the day: ' + storeFive.customers);

getCookieInfo(storeFive);
console.log('Lima cookies sold for the day: ' + storeFive.individualSales);



var container = document.getElementById('emerald');

var article = document.createElement('article')
container.appendChild(article) 

var listElement = document.createElement('ul');
article.appendChild(listElement);


for (var i = 0; i < storeOne.individualSales.length; i++) {
  var liElement = document.createElement('li');
  listElement.appendChild(liElement);
  var salesOfTheCookie = storeOne.individualSales[i];
  liElement.textContent = hours[i] + salesOfTheCookie; 
}
