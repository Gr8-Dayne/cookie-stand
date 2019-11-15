// better.js was generated with the assistance and explaination of Phong Doan, JB and with the assistance of stackoverflow

// Global array for store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Variables
var body = document.getElementById('list');
var article = addElement('article', body);
var tableElem = addElement('table', article);
var hourTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var overallTotal = 0;
var store = [];

// addElement
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
};

// Constructor for Store Information
function TheCity(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
};

// Cookies bought
TheCity.prototype.daySale = function () {
  var customer = this.maxCustomers - this.minCustomers + 1;
  var rand = Math.floor(Math.random() * customer) + this.minCustomers;
  var sale = Math.ceil(rand * this.avgSale);
  storeTotals += sale;
  return sale;
};

// store.push
store.push(new TheCity('Seattle', 23, 65, 6.3));
store.push(new TheCity('Tokyo', 3, 24, 1.2));
store.push(new TheCity('Dubai', 11, 38, 3.7));
store.push(new TheCity('Paris', 20, 38, 2.3));
store.push(new TheCity('Lima', 2, 16, 4.6));

//sales.html render
TheCity.prototype.render = function () {
  var trbody = addElement('tr', tbody);
  addElement('th', trbody, this.name);
  for (var i = 0; i < hours.length; i++) {
    var salesToday = this.daySale();
    hourTotals[i] += salesToday;
    addElement('td', trbody, salesToday);
  };
  addElement('th', trbody, storeTotals);
};

function addTableHeader() {
  var thead = addElement('thead', tableElem);
  var tr = addElement('tr', thead);
  addElement('th', tr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', tr, hours[i]);
  };
  addElement('th', tr, 'Daily Total');
};

// Hourly Total
function addTableFooter() {
  var tfoot = addElement('tfoot', tableElem);
  var trfoot = addElement('tr', tfoot);
  addElement('th', trfoot, 'Hourly Total');
  for (var j = 0; j < hours.length; j++) {
    console.log(store[i]);
    overallTotal += hourTotals[j];
    addElement('th', trfoot, hourTotals[j]);
  };
  addElement('th', trfoot, overallTotal);
};

// the following function was created with assistance from fellow classmates and from stackoverflow research

function deleteaddTableFooter() {
  addTableFooter.deleteRow(-1);
};


// Create new shop
function newShop(event) {
  event.preventDefault();
  var place = event.target.place.value;
  var minimum = event.target.minimum.value;
  var maximum = event.target.maximum.value;
  var average = event.target.average.value;

  console.log(event);
  console.log(newShop);

  var upcomingShop = new TheCity(place, minimum, maximum, average);

  store.push(upcomingShop);

  // upcomingShop.TheCity();
  deleteaddTableFooter();
  upcomingShop.render();
  event.target.reset();
};

var form = document.getElementById('plannedExpansion');
form.addEventListener('submit', newShop);

// When form is submitted, remove tablefooter

// When tablefooter is removed, add submitted form information

// When submitted form information is displayed, addTableFooter

console.log(form);

addTableHeader();
var tbody = addElement('tbody', tableElem);
for (var i = 0; i < store.length; i++) {
  var storeTotals = 0;
  store[i].render(body);
};

console.log(hourTotals);

addTableFooter();