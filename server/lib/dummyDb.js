'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var users = [{
  userId: '1',
  user_name: 'user_1',
  email: 'user_1@yahoo.com',
  password: 'password1'
}, {
  userId: '2',
  user_name: 'user_2',
  email: 'user_2@yahoo.com',
  password: 'password2'
}, {
  userId: '3',
  user_name: 'user_3',
  email: 'user_3@yahoo.com',
  password: 'password3'
}];

var businesses = [{
  id: '1',
  userId: '1',
  name: 'Business_1',
  description: 'Description 1',
  category: 'category 1',
  location: 'location 1',
  reviews: []
}, {
  id: '2',
  userId: '2',
  name: 'Business_2',
  description: 'Description 2',
  category: 'category 2',
  location: 'location 2',
  reviews: []
}, {
  id: '3',
  userId: '3',
  name: 'Business_3',
  description: 'Description 3',
  category: 'category 3',
  location: 'location 3',
  reviews: []
}];
var reviews = [{
  id: '1',
  business_id: '1',
  reviewerEmail: 'r1@yahoo.com',
  content: 'review content 1'
}, {
  id: '2',
  business_id: '2',
  reviewerEmail: 'r2@yahoo.com',
  content: 'review content 2'
}, {
  id: '3',
  business_id: '3',
  reviewerEmail: 'r3@yahoo.com',
  content: 'review content 3'
}];

exports.businesses = businesses;
exports.reviews = reviews;
exports.users = users;