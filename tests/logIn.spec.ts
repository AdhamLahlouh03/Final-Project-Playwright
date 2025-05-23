import { test, expect } from '@playwright/test';
import { POMlogIn } from '../pages/POM-logIn';

test.describe('Login Tests', () => {

    test('User can login successfully', async ({ page }) => {
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
    });

    test('Test check empty username and password', async ({ page }) => {
        const loginObj = new POMlogIn(page);

        // 1. Go to the website
        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(1000);

        // 2. Check Title Website
        await expect(page).toHaveTitle("Swag Labs");
        await page.waitForTimeout(1000);

        // 3. Check LogIn
        await loginObj.Login('', '');
        await page.waitForTimeout(1000);

        // 4. Check the message that will appear "Username is required".
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
        await page.waitForTimeout(1000);
    });

    test('Test check empty password', async ({ page }) => {
        const loginObj = new POMlogIn(page);

        // 1. Go to the website
        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(1000);

        // 2. Check Title Website
        await expect(page).toHaveTitle("Swag Labs");
        await page.waitForTimeout(1000);

        // 3. Check LogIn
        await loginObj.Login('standard_user', '');
        await page.waitForTimeout(1000);

        // 4. Check the message that will appear "Password is required".
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
    });

    test('Test check empty username', async ({ page }) => {
        const loginObj = new POMlogIn(page);

        // 1. Go to the website
        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(1000);

        // 2. Check Title Website
        await expect(page).toHaveTitle("Swag Labs");
        await page.waitForTimeout(1000);

        // 3. Check LogIn
        await loginObj.Login('', 'secret_sauce');
        await page.waitForTimeout(1000);

        // 4. Check the message that will appear "Username is required".
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
    });

    // Fail Annotations: appears on the report passed
    test.fail('Fail.1 annotations', async ({ page }) => {
        const loginObj = new POMlogIn(page);

        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(1000);

        await loginObj.Login('', 'secret_sauce');
        await page.waitForTimeout(1000);

        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
    });

    // Fail Annotations: appears on the report failed
    test.fail('Fail.2 annotations', async ({ page }) => {
        const loginObj = new POMlogIn(page);

        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(1000);

        await loginObj.Login('', 'secret_sauce');
        await page.waitForTimeout(1000);

        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
    });

});
