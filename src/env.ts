import { Page } from "@playwright/test";

export default class Env {
    baseURL = "https://www.Amazon.com";

    continueShoppingBtn: any

    constructor(public page: Page) {
        this.continueShoppingBtn = this.page.getByRole('button', { name: 'Continue Shopping' })
    }

    async navigateToBaseURL() {
        await this.page.goto(this.baseURL);
        if (await this.continueShoppingBtn.isVisible()) {
            await this.continueShoppingBtn.click();
        }
    }
}