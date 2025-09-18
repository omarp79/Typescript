import { Page } from '@playwright/test';

export default class SearchLanding {
    pageTitle: any
   // bookTitle: any
    productTitle: any
    bookAuthor: any
    bookDescription: any

    constructor(public page: Page) {
        this.pageTitle = this.page.getByLabel('Books', { exact: true })
        this.productTitle = this.page.locator('#productTitle')
        this.bookAuthor = this.page.getByText('by Freida McFadden (Author)')
        this.bookDescription = this.page.getByText('Every day I clean the')
    }
    async clickBookTitle(title: any) {
        await Promise.all([
            this.page.getByRole('link', { name: title }).click(),
        ]);
    }
    async verifyAuthor(author: any) {
        try {
            const authorLocator = this.page.getByRole('cell', { name: author }).getByRole('link')
            return await authorLocator.isVisible();
        } catch (e) {
            return false;
        }
    }

}
