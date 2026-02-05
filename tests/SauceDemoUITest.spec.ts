import { test } from "./Fixtures/TestFixtures.ts"
import {expect} from "@playwright/test"
import { sauceDemoData } from "./test-data/saucedemo.data.ts";

const { firstName, lastName, zipCode } = sauceDemoData.checkout.userDetails;
const { username, password, expectedErrorMessage } = sauceDemoData.login.invalid;


test.describe('SauceDemoUI Test Scenarios', () => {
test('1.validation of the final price',async({page,loginPage,homepage,cartpage,logoutFixture,Checkout_yourInformationPage,overviewpage}) =>{
   await expect(page).toHaveTitle("Swag Labs");
   await homepage.addItemToCart();
   await homepage.clickOnCartIcon();
   await cartpage.clickOnCheckoutButton();
   await Checkout_yourInformationPage.enterAllDetails(firstName,lastName,zipCode);
   expect(await overviewpage.getFinalPrice()).toBe(sauceDemoData.checkout.expectedFinalPrice);
   await console.log("Test case executed successfully")

}) 

test('2.sort the items by name Z to A',async({page,loginPage,homepage,logoutFixture}) =>{
   await expect(page).toHaveTitle("Swag Labs");
   await homepage.sortTheItems("za");
   await console.log("Items sorted successfully");
   const productNames = await homepage.itemName.allTextContents(); 
   const sorted = [...productNames].sort((a, b) => b.localeCompare(a));
   expect(productNames).toEqual(sorted);
})

test('3.validation of login failed',async({FailedLoginPage}) =>{
   await FailedLoginPage.loginapplicationWithInvalidCredentials(username,password);
   const errorMsg = await FailedLoginPage.getLoginErrorMessage();
   console.log('Actual error message:', errorMsg);
   await expect(errorMsg).toContain(expectedErrorMessage);
})

});