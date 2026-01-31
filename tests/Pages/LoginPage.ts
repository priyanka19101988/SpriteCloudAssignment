import{Locator,Page} from "@playwright/test"
import {userConfig}  from "../Config/userConfig";

export class LoginPage {
     page :Page
     username : Locator ;
     Password : Locator ;
     loginButton : Locator ;
     errorMsg : Locator ;

 constructor(page : Page){
        this.page = page ;
        this.username = page.locator("id=user-name");
        this.Password = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");
        this.errorMsg = this.page.locator('[data-test="error"]')       
}

async openApplication(){
    await this.page.goto(userConfig.appUrl);
}

async loginApplication(){
     await this.username.fill(userConfig.Credentials.username);
     await this.Password.fill(userConfig.Credentials.password); 
     await this.loginButton.click();
   
    }

    async loginapplicationWithInvalidCredentials(invalidUsername : string, invalidPassword : string){
    await this.username.fill(invalidUsername);
    await this.Password.fill(invalidPassword); 
    await this.loginButton.click();
   }

   async getLoginErrorMessage(): Promise<string> {
  await this.errorMsg.waitFor({ state: 'visible' });
  return await this.errorMsg.innerText();
}

}
    