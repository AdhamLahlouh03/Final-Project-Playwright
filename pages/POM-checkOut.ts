import { Page } from "@playwright/test";

export class CheckoutPage {
    constructor(private page: Page) {}

    async startCheckout() {
        await this.page.click('[data-test="checkout"]');
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('[data-test="firstName"]', firstName);
        await this.page.fill('[data-test="lastName"]', lastName);
        await this.page.fill('[data-test="postalCode"]', postalCode);
        await this.page.click('[data-test="continue"]');
    }

    async finishCheckout() {
        await this.page.click('[data-test="finish"]');
    }
}
