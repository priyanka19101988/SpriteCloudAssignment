import {Page,Locator} from "@playwright/test"

export class 

HomePage{

    page :Page;
    addItem1ToCart :Locator;
    addItem2ToCart
    cartIcon :Locator ;
    sortDropDown : Locator ;
    itemName : Locator ;

    constructor(page :Page){
        this.page = page;
        this.addItem1ToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addItem2ToCart = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.itemName = page.locator('.inventory_item_name');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.sortDropDown = page.locator('//select[@class="product_sort_container"]');
    }

    async addItemToCart(){
        await this.addItem1ToCart.click();
        await this.addItem2ToCart.click();

    }

    async sortTheItems(sortBy : string){
        await this.sortDropDown.selectOption({ value: sortBy });
    }

    async clickOnCartIcon(){
       await this.cartIcon.click();
    }

    async addItemToCart3(){
        await this.itemName.click();
    }
}