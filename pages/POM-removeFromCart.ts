import { Page } from "@playwright/test";

export class RemoveFromCartPage {
    constructor(private page: Page) {}

    async removeProductByName(productName: string) {
        await this.page.locator(`[data-test="remove-${productName}"]`).click();
        await this.page.waitForTimeout(500);
    }
}
