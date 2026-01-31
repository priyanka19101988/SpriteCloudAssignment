import { test, expect, request } from '@playwright/test';
import {userConfig}  from "../tests/Config/userConfig";

const BASE_URL = userConfig.base_url;

test.describe('FakeStoreAPI E2E Scenarios', () => {
  test('1. Perform a successful login', async () => {
    const context = await request.newContext();
    console.log("Base URL is:", BASE_URL);
    const response = await context.post(`${BASE_URL}/auth/login`, {
      data: {
        username: 'mor_2314',
        password: '83r5^_'
      }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('token');
  });

  test('2. Get a product and validate its content', async () => {
    const context = await request.newContext();
    const response = await context.get(`${BASE_URL}/products/1`);
    expect(response.ok()).toBeTruthy();
    const product = await response.json();
    expect(product).toHaveProperty('id', 1);
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
  });

  test('3. Create a new cart with an existing product via the API', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/carts`, {
      data: {
        userId: 1,
        date: '2020-02-03',
        products: [{ productId: 1, quantity: 2 }]
      }
    });
    expect(response.ok()).toBeTruthy();
    const cart = await response.json();
    expect(cart).toHaveProperty('id');
    expect(cart.products[0]).toMatchObject({ productId: 1, quantity: 2 });
  });

  test('4. Delete a user', async () => {
    const context = await request.newContext();
    // Create a user first to delete
    const createRes = await context.post(`${BASE_URL}/users`, {
      data: {
        email: 'testuser@example.com',
        username: 'testuser',
        password: 'testpass',
        name: { firstname: 'Test', lastname: 'User' },
        address: { city: 'TestCity', street: 'TestStreet', number: 1, zipcode: '12345', geolocation: { lat: '0', long: '0' } },
        phone: '1234567890'
      }
    });
    const user = await createRes.json();
    const delRes = await context.delete(`${BASE_URL}/users/${user.id}`);
    expect(delRes.ok()).toBeTruthy();
  });

  test('5a. Negative: Login with wrong password', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/auth/login`, {
      data: {
        username: 'mor_2314',
        password: 'wrongpassword'
      }
    });
    expect(response.ok()).toBeFalsy();
  });

  test('5b. Negative: Get non-existent product', async () => {
    const context = await request.newContext();
    const response = await context.get(`${BASE_URL}/products/99999`);
    expect(response.status()).toBe(200);
    const text = await response.text();
    // If the response is empty, text will be ''
    expect(text.trim()).toBe('');
  });
});
