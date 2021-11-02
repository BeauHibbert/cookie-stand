"use strict"

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6.3,
	customersPerHour: 0,
	cookiesPerHour: 0,
	totalCookies: 0,
	seattleCookies: [],
	getRandomHourlyCustomers: function() {	
    this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
	},
	getHourlyCookiesSold: function() {
    this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
	},
	createLocationList: function() {
		for(let i=0; i < hours.length; i++) {
			this.getRandomHourlyCustomers();
			this.getHourlyCookiesSold();
			let liEl = document.createElement('li');
			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
			let ulEl = document.getElementById('seattle');
			ulEl.appendChild(liEl);
			this.seattleCookies.push(this.cookiesPerHour);
		}
	},
	getTotalCookiesSold: function() {
		for(let i=0; i < this.seattleCookies.length; i++) {
			this.totalCookies += i;
		}
		let liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookies;
		let ulEl = document.getElementById('seattle');
		ulEl.appendChild(liEl);
	}
}

seattle.getRandomHourlyCustomers();
seattle.getHourlyCookiesSold();
seattle.createLocationList();
seattle.getTotalCookiesSold();





let tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCustomer: 6.3,
	customersPerHour: 0,
	cookiesPerHour: 0,
	totalCookies: 0,
	tokyoCookies: [],
	getRandomHourlyCustomers: function() {	
    this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
	},
	getHourlyCookiesSold: function() {
    this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
	},
	createLocationList: function() {
		for(let i=0; i < hours.length; i++) {
			this.getRandomHourlyCustomers();
			this.getHourlyCookiesSold();
			let liEl = document.createElement('li');
			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
			let ulEl = document.getElementById('tokyo');
			ulEl.appendChild(liEl);
			this.tokyoCookies.push(this.cookiesPerHour);
		}
	},
	getTotalCookiesSold: function() {
		for(let i=0; i < this.tokyoCookies.length; i++) {
			this.totalCookies += i;
		}
		let liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookies;
		let ulEl = document.getElementById('tokyo');
		ulEl.appendChild(liEl);
	}
}

tokyo.getRandomHourlyCustomers();
tokyo.getHourlyCookiesSold();
tokyo.createLocationList();
tokyo.getTotalCookiesSold();

