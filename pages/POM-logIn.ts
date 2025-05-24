import { Page } from "@playwright/test";

export class POMlogIn {

    constructor(private page: Page) {}

    // Locators 
    private get userNameInput() { return this.page.locator('[data-test="username"]');}
    private get passWordInput() { return this.page.locator('[data-test="password"]');}
    private get logInButton() { return this.page.locator('[data-test="login-button"]');}

    // Action
    async Login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.page.waitForTimeout(500);

        await this.passWordInput.fill(password);
        await this.page.waitForTimeout(500);

        await this.logInButton.click();
        await this.page.waitForTimeout(500);
    }
}
