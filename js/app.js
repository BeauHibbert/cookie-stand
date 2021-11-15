"use strict"

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookieStands = [];

function CookieStand(shopName, minCustomers, maxCustomers, cookiesPerCustomer, customersPerHour, cookiesPerHour, cookiesPerDay) {
	this.shopName = shopName;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.cookiesPerCustomer = cookiesPerCustomer;
	this.customersPerHour = customersPerHour;
	this.cookiesPerHour = cookiesPerHour;
	this.cookiesPerDay = cookiesPerDay;
	this.hourlyTotals = [];
	cookieStands.push(this);

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

// display hourly totals for all locations

let allStandsTotalHourlyCookiesArray = [];

function hourlyTotalsAllLocations() {
	for(let i=0; i < hours.length; i++) {
		let allStandsTotalHourlyCookies = 0;
		for(let j=0; j < cookieStands.length; j++) {
			let temp = cookieStands[j].hourlyTotals[i];
			allStandsTotalHourlyCookies += temp;
		}
		allStandsTotalHourlyCookiesArray.push(allStandsTotalHourlyCookies);
	}

	let footerRowEl = document.createElement('tr');
	let hourlyTotalsAllStandsTdEl = document.createElement('td');
	hourlyTotalsAllStandsTdEl.textContent = 'Hourly Total For All Stands';
	footerRowEl.appendChild(hourlyTotalsAllStandsTdEl);

	for(let j=0; j < hours.length; j++) {
		let hourlyTotalAllStandsTdEl = document.createElement('td');
		hourlyTotalAllStandsTdEl.textContent = allStandsTotalHourlyCookiesArray[j];
		footerRowEl.appendChild(hourlyTotalAllStandsTdEl)
	}
	tableEl.appendChild(footerRowEl);
}

hourlyTotalsAllLocations();

// new shop form functionality

let form = document.getElementById('new-store-form');

function handleFormSubmit(event) {
	event.preventDefault();
	const formEl = event.target;
	const storeName = formEl.storeName.value;
	const minCust = parseInt(formEl.minCust.value);
	const maxCust = parseInt(formEl.maxCust.value);
	// cookies per customer can be a decimal, so don't need parseInt
	const cksPerCust = formEl.cksPerCust.value;

	let newStore = new CookieStand(storeName, minCust, maxCust, cksPerCust, 0, 0, 0)
	newStore.render();
}

form.addEventListener('submit', handleFormSubmit);