import { test } from "./Fixtures/TestFixtures.ts"
import {expect} from "@playwright/test"
import { LoginPage } from "./Pages/LoginPage.ts";

test.describe('SauceDemoUI Test Scenarios', () => {
test('1.validation of the final price',async({page,loginPage,homepage,cartpage,logoutFixture,Checkout_yourInformationPage,overviewpage}) =>{
   
   await expect(page).toHaveTitle("Swag Labs");
   await homepage.addItemToCart();
   await homepage.clickOnCartIcon();
   await expect(cartpage.addedItem).toHaveText("Sauce Labs Backpack");
   await cartpage.clickOnCheckoutButton();
   await Checkout_yourInformationPage.enterAllDetails("priya","shina","12345");
   expect(await overviewpage.getFinalPrice()).toBe(49.66);
   await console.log("Test case executed successfully")

}) 

test('2.sort the items by name Z to A',async({page,loginPage,homepage,logoutFixture}) =>{
   await expect(page).toHaveTitle("Swag Labs");
   await page.waitForURL('**/inventory.html');
   // Sort items by name Z to A
   await homepage.sortTheItems("za");
   await console.log("Items sorted successfully");
   // Validate the first and last product names after sorting
   const productNames = await homepage.page.locator('.inventory_item_name').allTextContents();
   // Check that the array is sorted in descending order
   const sorted = [...productNames].sort((a, b) => b.localeCompare(a));
   expect(productNames).toEqual(sorted);
})

test('3.validation of login failed',async({FailedLoginPage}) =>{
   await FailedLoginPage.loginapplicationWithInvalidCredentials("standard_user1","secret_sauce1");
   const errorMsg = await FailedLoginPage.getLoginErrorMessage();
   console.log('Actual error message:', errorMsg);
   await expect(errorMsg).toContain("Epic sadface: Username and password do not match any user in this service");
})

});