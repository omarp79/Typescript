import { Page } from '@playwright/test';

export default class HomePage {
    searchInput: any
    submitSearch: any
    pageTitle: any
    bookTitle: any
    bookAuthor: any
    bookDescription: any

    constructor(public page: Page) {
        this.searchInput = this.page.getByRole('searchbox', { name: 'Search Amazon' });
        this.submitSearch = this.page.getByRole('button', { name: 'Go', exact: true });     

    }
    async search(searchValue: any){
        await this.searchInput.fill(searchValue);
        await this.submitSearch.click();
    }

}
