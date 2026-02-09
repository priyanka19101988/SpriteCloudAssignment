import {Page,Locator} from "@playwright/test"

export class Checkout_yourInformationPage{

    page : Page ;
    firstName : Locator ;
    lastName : Locator ;
    zipCode   : Locator ;
    continue     : Locator;
   

    constructor(page : Page)
    {
        this.page = page ;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');
        
    }

    async enterAllDetails(firstName : string, lastName : string, zipCode : string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
          await this.zipCode.fill(zipCode);
           await this.continue.click();
    }

}