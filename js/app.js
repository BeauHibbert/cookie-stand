"use strict"

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(shopName, minCustomers, maxCustomers, cookiesPerCustomer, customersPerHour, cookiesPerHour, cookiesPerDay) {
	this.shopName = shopName;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.cookiesPerCustomer = cookiesPerCustomer;
	this.customersPerHour = customersPerHour;
	this.cookiesPerHour = cookiesPerHour;
	this.cookiesPerDay = cookiesPerDay;
	this.hourlyTotals = [];

	this.getHourlyCookiesSold();
}

CookieStand.prototype.getRandomHourlyCustomers = function() {
  this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
}

CookieStand.prototype.getHourlyCookiesSold = function() {
	for(let i=0; i < hours.length; i++) {
		this.getRandomHourlyCustomers();
		this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
		this.hourlyTotals.push(this.cookiesPerHour);
	}
	return this.hourlyTotals
}

CookieStand.prototype.getDailyTotal = function() {
	for(let i=0; i < this.hourlyTotals.length; i++) {
		this.cookiesPerDay += this.hourlyTotals[i];
	}
	return this.cookiesPerDay
}

// table creation that only needs to happen once

const mainDivEl = document.getElementById('table');

const tableEl = document.createElement('table');
mainDivEl.appendChild(tableEl);

const headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);

const shopHeaderDataEl = document.createElement('th');
shopHeaderDataEl.textContent = '';
headerRowEl.appendChild(shopHeaderDataEl);

for(let i=0; i < hours.length; i++) {
	let headerDataEl = document.createElement('th');
	headerDataEl.textContent = hours[i];
	headerRowEl.appendChild(headerDataEl);
}

const totalHeaderDataEl = document.createElement('th');
totalHeaderDataEl.textContent = 'Daily Shop Total: ';
headerRowEl.appendChild(totalHeaderDataEl);

// table creation that needs to happen for each shop location

CookieStand.prototype.render = function() {
	const tableRowEl = document.createElement('tr');
	tableEl.appendChild(tableRowEl);

	const shopNameTableDataEl = document.createElement('td');
	shopNameTableDataEl.textContent = this.shopName;
	tableRowEl.appendChild(shopNameTableDataEl);

	for(let i=0; i <  this.hourlyTotals.length; i++) {
		let tableDataEl = document.createElement('td');
		tableRowEl.appendChild(tableDataEl);
		tableDataEl.textContent = this.hourlyTotals[i];
	}

	this.getDailyTotal();
	const totalTableDataEl = document.createElement('td');
	totalTableDataEl.textContent = this.cookiesPerDay;
	tableRowEl.appendChild(totalTableDataEl);
}

// create each shop and call render function for each

let seattle = new CookieStand('Seattle', 23, 65, 6.3, 0, 0, 0)
seattle.render();

let tokyo = new CookieStand('Tokyo', 3, 24, 1.2, 0, 0, 0)
tokyo.render();

let dubai = new CookieStand('Dubai', 11, 38, 3.7, 0, 0, 0)
dubai.render();

let paris = new CookieStand('Paris', 20, 38, 2.3, 0, 0, 0)
paris.render();

let lima = new CookieStand('Lima', 2, 16, 4.6, 0, 0, 0)
lima.render();