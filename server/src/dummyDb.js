const users = [
  {
    userId: '1',
    user_name: 'user_1',
    email: 'user_1@yahoo.com',
    password: 'password1'
  },
  {
    userId: '2',
    user_name: 'user_2',
    email: 'user_2@yahoo.com',
    password: 'password2'
  }
];

const businesses = [
  {
    id: 1,
    userId: 1,
    name: 'Business_1',
    description: 'Description 1',
    category: 'category 1',
    location: 'location 1',
    reviews: []
  },
  {
    id: 2,
    userId: 2,
    name: 'Business_2',
    description: 'Description 2',
    category: 'category 2',
    location: 'location 2',
    reviews: []
  }
];
const reviews = [
  {
    id: '1',
    businessId: '1',
    name: 'reviewer_1',
    reviewerEmail: 'r1@yahoo.com',
    content: 'review content 1',
  },
  {
    id: '2',
    businessId: '2',
    name: 'reviewer_2',
    reviewerEmail: 'r2@yahoo.com',
    content: 'review content 2'
  }
];

export { businesses, reviews, users };
