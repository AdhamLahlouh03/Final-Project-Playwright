import { chromium, test, expect } from "@playwright/test";
import { POMlogIn } from "../pages/POM-logIn";

test('Text Launch Browser', async () => {

    // const page = await (await (await chromiun.launch({headless:false})).newContext()).newPage();

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginObj = new POMlogIn(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);

    // 2. Check Title Website
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(1000);

    // 3. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(1000);

    // 4. Check the title(url) after moving from the LogIn page
    await expect(page.url()).toContain("inventory.html");
    await page.waitForTimeout(1000);
    await browser.close();
})