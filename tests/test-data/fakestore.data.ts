export const fakeStoreData = {
  baseUrl: 'https://fakestoreapi.com',

  login: {
    valid: {
      username: 'mor_2314',
      password: '83r5^_'
    },
    invalid: {
      username: 'mor_2314',
      password: 'wrongpassword'
    }
  },

  product: {
    validProductId: 1,
    invalidProductId: 99999
  },

  cart: {
    userId: 1,
    date: '2020-02-03',
    products: [
      {
        productId: 1,
        quantity: 2
      }
    ]
  },

  user: {
    email: 'testuser@example.com',
    username: 'testuser',
    password: 'testpass',
    name: {
      firstname: 'Test',
      lastname: 'User'
    },
    address: {
      city: 'TestCity',
      street: 'TestStreet',
      number: 1,
      zipcode: '12345',
      geolocation: { lat: '0', long: '0' }
    },
    phone: '1234567890'
  }
};