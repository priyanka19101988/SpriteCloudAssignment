import {test as basetest} from "@playwright/test"
import {LoginPage} from "../Pages/LoginPage";
import {CartPage} from "../Pages/CartPage";

type LoginDetailsFixture = {
    loginPage : LoginPage;
    logoutFixture : CartPage ;
    FailedLoginPage : LoginPage ;
}

export const test = basetest.extend<LoginDetailsFixture>({
    loginPage: async({page},use)=>{
    const loginpage = new LoginPage(page); 
    await loginpage.openApplication();
    await loginpage.loginApplication();
    await use(loginpage);
    await console.log("Login successful");
  },
    logoutFixture : async({page},use)=>
    {
      const logoutFixture = new CartPage(page);
      await use(logoutFixture);
      await logoutFixture.logoutTheApplication();
      await console.log("Logout successful");
      //await page.close();
    },

    FailedLoginPage : async({page},use)=>
    {
      const failedLoginPage = new LoginPage(page);
      await failedLoginPage.openApplication();
      await failedLoginPage.loginapplicationWithInvalidCredentials("invalidUser","invalidPass");
      await use(failedLoginPage);
      await console.log("Invalid login attempted");
      await page.close();
    }
 
})

