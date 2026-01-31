import {Page,Locator} from "@playwright/test"

export class CartPage{

    page : Page ;
    addedItem : Locator ;
    removeItem : Locator ;
    menuIcon   : Locator ;
    logout     : Locator;
    checkoutButton : Locator ;

    constructor(page : Page)
    {
        this.page = page ;
        this.addedItem = page.locator('[data-test="item-4-title-link"]');
        this.removeItem = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.menuIcon = page.locator("id=react-burger-menu-btn");
        this.logout = page.locator('[data-test="logout-sidebar-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async removeItemfromCart(){
        await this.removeItem.click();
    }

    async logoutTheApplication(){
        await this.menuIcon.click();
        await this.logout.click();

    }

    async clickOnCheckoutButton(){
        await this.checkoutButton.click();
    }

}