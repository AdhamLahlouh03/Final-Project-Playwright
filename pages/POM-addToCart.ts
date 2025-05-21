import { Page } from "@playwright/test";

export class AddToCartPage {
    constructor(private page: Page) {}

    async addProductByName(productName: string) {
        const addButtonSelector = `button[data-test="add-to-cart-${productName}"]`;
        await this.page.click(addButtonSelector);
        await this.page.waitForTimeout(500);
    }

    async goToCart() {
        await this.page.click('[data-test="shopping-cart-link"]');
        await this.page.waitForTimeout(500);
    }

    async openCartItemById(itemId: string) {
        await this.page.click(`[data-test="item-${itemId}-title-link"]`);
        await this.page.waitForTimeout(500);
    }

    async backToProducts() {
        await this.page.click('[data-test="back-to-products"]');
        await this.page.waitForTimeout(500);
    }
}
