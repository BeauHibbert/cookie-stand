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

	this.getRandomHourlyCustomers();
	this.getHourlyCookiesSold();
}

CookieStand.prototype.getRandomHourlyCustomers = function() {
  this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
}

CookieStand.prototype.getHourlyCookiesSold = function() {
	this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
}

CookieStand.prototype.createLocationList = function() {
	for(let i=0; i < hours.length; i++) {
		this.getRandomHourlyCustomers();
		this.getHourlyCookiesSold();
		let liEl = document.createElement('li');
		liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
		let ulEl = document.getElementById(this.shopName);
		ulEl.appendChild(liEl);
		this.hourlyTotals.push(this.cookiesPerHour);
	}
}

CookieStand.prototype.getTotalCookiesSold = function() {
	for(let i=0; i < this.hourlyTotals.length; i++) {
		this.cookiesPerDay += this.hourlyTotals[i];
	}
	let liEl = document.createElement('li');
	liEl.textContent = 'Total: ' + this.cookiesPerDay;
	let ulEl = document.getElementById(this.shopName);
	ulEl.appendChild(liEl);
}

let seattle = new CookieStand('seattle', 23, 65, 6.3, 0, 0, 0)
seattle.createLocationList();
seattle.getTotalCookiesSold();

let tokyo = new CookieStand('tokyo', 3, 24, 1.2, 0, 0, 0)
tokyo.createLocationList();
tokyo.getTotalCookiesSold();

let dubai = new CookieStand('dubai', 11, 38, 3.7, 0, 0, 0)
dubai.createLocationList();
dubai.getTotalCookiesSold();

let paris = new CookieStand('paris', 20, 38, 2.3, 0, 0, 0)
paris.createLocationList();
paris.getTotalCookiesSold();

let lima = new CookieStand('lima', 2, 16, 4.6, 0, 0, 0)
lima.createLocationList();
lima.getTotalCookiesSold();

// let seattle = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   cookiesPerCustomer: 6.3,
// 	customersPerHour: 0,
// 	cookiesPerHour: 0,
// 	totalCookies: 0,
// 	seattleCookies: [],
// 	getRandomHourlyCustomers: function() {	
//     this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	},
// 	getHourlyCookiesSold: function() {
//     this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
// 	},
// 	createLocationList: function() {
// 		for(let i=0; i < hours.length; i++) {
// 			this.getRandomHourlyCustomers();
// 			this.getHourlyCookiesSold();
// 			let liEl = document.createElement('li');
// 			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
// 			let ulEl = document.getElementById('seattle');
// 			ulEl.appendChild(liEl);
// 			this.seattleCookies.push(this.cookiesPerHour);
// 		}
// 	},
// 	getTotalCookiesSold: function() {
// 		for(let i=0; i < this.seattleCookies.length; i++) {
// 			this.totalCookies += this.seattleCookies[i];
// 		}
// 		let liEl = document.createElement('li');
// 		liEl.textContent = 'Total: ' + this.totalCookies;
// 		let ulEl = document.getElementById('seattle');
// 		ulEl.appendChild(liEl);
// 	}
// }

// seattle.getRandomHourlyCustomers();
// seattle.getHourlyCookiesSold();
// seattle.createLocationList();
// seattle.getTotalCookiesSold();





// let tokyo = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   cookiesPerCustomer: 1.2,
// 	customersPerHour: 0,
// 	cookiesPerHour: 0,
// 	totalCookies: 0,
// 	tokyoCookies: [],
// 	getRandomHourlyCustomers: function() {	
//     this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	},
// 	getHourlyCookiesSold: function() {
//     this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
// 	},
// 	createLocationList: function() {
// 		for(let i=0; i < hours.length; i++) {
// 			this.getRandomHourlyCustomers();
// 			this.getHourlyCookiesSold();
// 			let liEl = document.createElement('li');
// 			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
// 			let ulEl = document.getElementById('tokyo');
// 			ulEl.appendChild(liEl);
// 			this.tokyoCookies.push(this.cookiesPerHour);
// 		}
// 	},
// 	getTotalCookiesSold: function() {
// 		for(let i=0; i < this.tokyoCookies.length; i++) {
// 			this.totalCookies += this.tokyoCookies[i]
// 		}
// 		let liEl = document.createElement('li');
// 		liEl.textContent = 'Total: ' + this.totalCookies;
// 		let ulEl = document.getElementById('tokyo');
// 		ulEl.appendChild(liEl);
// 	}
// }

// tokyo.getRandomHourlyCustomers();
// tokyo.getHourlyCookiesSold();
// tokyo.createLocationList();
// tokyo.getTotalCookiesSold();





// let dubai = {
//   minCustomers:11,
//   maxCustomers: 38,
//   cookiesPerCustomer: 3.7,
// 	customersPerHour: 0,
// 	cookiesPerHour: 0,
// 	totalCookies: 0,
// 	dubaiCookies: [],
// 	getRandomHourlyCustomers: function() {	
//     this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	},
// 	getHourlyCookiesSold: function() {
//     this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
// 	},
// 	createLocationList: function() {
// 		for(let i=0; i < hours.length; i++) {
// 			this.getRandomHourlyCustomers();
// 			this.getHourlyCookiesSold();
// 			let liEl = document.createElement('li');
// 			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
// 			let ulEl = document.getElementById('dubai');
// 			ulEl.appendChild(liEl);
// 			this.dubaiCookies.push(this.cookiesPerHour);
// 		}
// 	},
// 	getTotalCookiesSold: function() {
// 		for(let i=0; i < this.dubaiCookies.length; i++) {
// 			this.totalCookies += this.dubaiCookies[i]
// 		}
// 		let liEl = document.createElement('li');
// 		liEl.textContent = 'Total: ' + this.totalCookies;
// 		let ulEl = document.getElementById('dubai');
// 		ulEl.appendChild(liEl);
// 	}
// }

// dubai.getRandomHourlyCustomers();
// dubai.getHourlyCookiesSold();
// dubai.createLocationList();
// dubai.getTotalCookiesSold();





// let paris = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   cookiesPerCustomer: 2.3,
// 	customersPerHour: 0,
// 	cookiesPerHour: 0,
// 	totalCookies: 0,
// 	parisCookies: [],
// 	getRandomHourlyCustomers: function() {	
//     this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	},
// 	getHourlyCookiesSold: function() {
//     this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
// 	},
// 	createLocationList: function() {
// 		for(let i=0; i < hours.length; i++) {
// 			this.getRandomHourlyCustomers();
// 			this.getHourlyCookiesSold();
// 			let liEl = document.createElement('li');
// 			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
// 			let ulEl = document.getElementById('paris');
// 			ulEl.appendChild(liEl);
// 			this.parisCookies.push(this.cookiesPerHour);
// 		}
// 	},
// 	getTotalCookiesSold: function() {
// 		for(let i=0; i < this.parisCookies.length; i++) {
// 			this.totalCookies += this.parisCookies[i];
// 		}
// 		let liEl = document.createElement('li');
// 		liEl.textContent = 'Total: ' + this.totalCookies;
// 		let ulEl = document.getElementById('paris');
// 		ulEl.appendChild(liEl);
// 	}
// }

// paris.getRandomHourlyCustomers();
// paris.getHourlyCookiesSold();
// paris.createLocationList();
// paris.getTotalCookiesSold();





// let lima = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   cookiesPerCustomer: 4.6,
// 	customersPerHour: 0,
// 	cookiesPerHour: 0,
// 	totalCookies: 0,
// 	limaCookies: [],
// 	getRandomHourlyCustomers: function() {	
//     this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	},
// 	getHourlyCookiesSold: function() {
//     this.cookiesPerHour = Math.ceil(this.customersPerHour * this.cookiesPerCustomer);
// 	},
// 	createLocationList: function() {
// 		for(let i=0; i < hours.length; i++) {
// 			this.getRandomHourlyCustomers();
// 			this.getHourlyCookiesSold();
// 			let liEl = document.createElement('li');
// 			liEl.textContent = hours[i] + ': ' + this.cookiesPerHour;
// 			let ulEl = document.getElementById('lima');
// 			ulEl.appendChild(liEl);
// 			this.limaCookies.push(this.cookiesPerHour);
// 		}
// 	},
// 	getTotalCookiesSold: function() {
// 		for(let i=0; i < this.limaCookies.length; i++) {
// 			this.totalCookies += this.limaCookies[i];
// 		}
// 		let liEl = document.createElement('li');
// 		liEl.textContent = 'Total: ' + this.totalCookies;
// 		let ulEl = document.getElementById('lima');
// 		ulEl.appendChild(liEl);
// 	}
// }

// lima.getRandomHourlyCustomers();
// lima.getHourlyCookiesSold();
// lima.createLocationList();
// lima.getTotalCookiesSold();