'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
// 	.select()
// 	.from('restaurants')
// 	.where('cuisine', 'Italian')
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
// 	.select('id', 'name')
// 	.from('restaurants')
// 	.where('cuisine', 'Italian')
// 	.limit(10)
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
// 	.select()
// 	.count()
// 	.from('restaurants')
// 	.where('cuisine', 'Thai')
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));


// knex
// 	.select()
// 	.count()
// 	.from('restaurants')
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));


// knex
// 	.select()
// 	.count()
// 	.from('restaurants')
// 	.where('cuisine', 'Thai')
// 	.andWhere('address_zipcode', '11372')
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));


// knex
// 	.select('id', 'name')
// 	.from('restaurants')
// 	.where('cuisine', 'Italian')
// 	.whereIn('address_zipcode', ['10012', '10013', '10014'])
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));


// knex('restaurants')
// 	.insert({
// 		name: 'Byte Cafe',
// 		borough: 'Brooklyn',
// 		cuisine: 'coffee',
// 		address_building_number: '123',
// 		address_street: 'Atlantic Avenue',
// 		address_zipcode: '11231'
// 	})
// 	.returning(['id', 'name'])
// 	.debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 2)));


// knex('restaurants')
// 	.select('id', 'name')
// 	.where('name', 'Byte Cafe')
// 	.debug(true)
//  .then(results => console.log(JSON.stringify(results, null, 2)));


// knex('restaurants')
// 	.returning(['id', 'name'])
// 	.insert([{
// 		name: 'Cafe',
// 		borough: 'Manhattan',
// 		cuisine: 'coffee',
// 		address_building_number: '124',
// 		address_street: 'Busy Avenue',
// 		address_zipcode: '11200'
// 	},
// 	{
// 		name: 'Byte',
// 		borough: 'Brooklyn',
// 		cuisine: 'Pizza',
// 		address_building_number: '12',
// 		address_street: 'Cheesy Avenue',
// 		address_zipcode: '24590'
// 	},
// 	{
// 		name: 'CoffeeLand',
// 		borough: 'Queens',
// 		cuisine: 'coffee',
// 		address_building_number: '005',
// 		address_street: 'Java Lane',
// 		address_zipcode: '20873'
// 	}])
// 	.debug(true)
// 	.then(results => console.log(JSON.stringify(results, null, 2)));


// knex('restaurants')
// 	.where('nyc_restaurant_id', '30191841')
// 	.update('name', 'DJ Reynolds Pub and Restaurant')
// 	.returning(['nyc_restaurant_id', 'name'])
// 	.debug(true)
// 	.then(results => console.log(JSON.stringify(results, null, 2)));


// knex('grades')
// 	.where('id', 10)
// 	.del()
// 	.returning('id')
// 	.debug(true)
// 	.then(results => console.log(JSON.stringify(results, null, 2)));


// knex('restaurants')
// 	.where('id', 10)
// 	.del()
// 	.returning('id')
// 	.debug(true)
// 	.then(results => console.log(JSON.stringify(results, null, 2)));




















