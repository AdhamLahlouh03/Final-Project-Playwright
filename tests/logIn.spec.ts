import { test, expect } from '@playwright/test';
import { POMlogIn } from '../pages/POM-logIn';

// First parameter : Test Name.
// Second parameter : asynchronus function.

test('Test Check LogIn.' , async({page}) => {

    const loginObj = new POMlogIn(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);

    // 2. Check Title Website
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(1000);

    // 3. Check LogIn
    loginObj.Login('standard_user','secret_sauce');
    await page.waitForTimeout(1000);

    // 4. Check the title(url) after moving from the LogIn page
    await expect(page.url()).toContain("inventory.html");
    await page.waitForTimeout(1000);
})