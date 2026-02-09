import { title } from "process";

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

    validProduct: {
      id: 1,
      title : 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price : 109.95, 
      description : 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category : "men's clothing", 
       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      "rating": {
        "rate": 3.9,
        "count": 120
    }       
    },
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