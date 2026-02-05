import { test, expect, request } from '@playwright/test';
import { fakeStoreData } from './test-data/fakestore.data';

test.describe('FakeStoreAPI E2E Scenarios', () => {
const BASE_URL = fakeStoreData.baseUrl;
  test('1. Perform a successful login', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: { 'Content-Type': 'application/json' }
    });
    const response = await context.post(`${BASE_URL}/auth/login`, {
      data: fakeStoreData.login.valid
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('token');
  }); 

  test('2. Get a product and validate its content', async () => {
    const context = await request.newContext();
    const response = await context.get(`${BASE_URL}/products/${fakeStoreData.product.validProductId}`);
    expect(response.ok()).toBeTruthy();
    const product = await response.json();
    expect(product).toHaveProperty('id', fakeStoreData.product.validProductId);
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
    console.log('Product details:', product);
  });

  test('3. Create a new cart with an existing product via the API', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/carts`, {
      data: fakeStoreData.cart
     });
    expect(response.ok()).toBeTruthy();
    const cart = await response.json();
    expect(cart).toHaveProperty('id');
    expect(cart.products[0]).toMatchObject(fakeStoreData.cart.products[0]);
  });

  test('4. Delete a user', async () => {
    const context = await request.newContext();
    const createRes = await context.post(`${BASE_URL}/users`, {
      data: fakeStoreData.user
    });
    const user = await createRes.json();
    const delRes = await context.delete(`${BASE_URL}/users/${user.id}`);
    expect(delRes.ok()).toBeTruthy();
  });

  test('5a. Negative: Login with wrong password', async () => {
    const context = await request.newContext();
    const response = await context.post(`${BASE_URL}/auth/login`, {
      data: fakeStoreData.login.invalid
    });
    expect(response.ok()).toBeFalsy();
  });

  test('5b. Negative: Get non-existent product', async () => {
    const context = await request.newContext();
    const response = await context.get(
      `${BASE_URL}/products/${fakeStoreData.product.invalidProductId}`
    );
    expect(response.status()).toBe(200);
    expect((await response.text()).trim()).toBe('');
  });

});