import { Page, Locator } from '@playwright/test';

export class OverviewPage {
    readonly page: Page;
    readonly finalPriceLocator: Locator;
    readonly finishButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finalPriceLocator = (page.locator('.summary_total_label'));
        this.finishButtonLocator = page.locator('[data-test="finish"]');
    }

    async getFinalPrice(): Promise<number> {
  const text = await this.finalPriceLocator.textContent();
  return Number(text?.replace('Total: $', ''));
}

    async clickFinishButton() {
        await this.finishButtonLocator.click();
    }
}