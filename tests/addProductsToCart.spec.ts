import { test, expect } from '@playwright/test';
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";

test.describe('Add Product', () => {

    test.beforeEach(async ({ page }) => {
        // 1. Go to the website
        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(100);

        // 2. Check Title Website
        await expect(page).toHaveTitle("Swag Labs");
        await page.waitForTimeout(100);
    });


    test('Add products to cart and Check', async ({ page }) => {
        const loginObj = new POMlogIn(page);
        const cart = new AddToCartPage(page);

        // 3. Check LogIn
        await loginObj.Login('standard_user', 'secret_sauce');
        await page.waitForTimeout(500);

        // 4. Check the title(url) after moving from the LogIn page
        await expect(page.url()).toContain("inventory.html");
        await page.waitForTimeout(500);

        // 5. List of product
        const productNames = [
            "sauce-labs-backpack",
            "sauce-labs-bike-light",
            "sauce-labs-bolt-t-shirt",
            "sauce-labs-fleece-jacket",
            "sauce-labs-onesie"
        ];

        // 6. List of product for verification
        const productNamesForVerification = [
            "Sauce Labs Backpack",
            "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt",
            "Sauce Labs Fleece Jacket",
            "Sauce Labs Onesie"
        ];

        // 7. Add products to cart
        for (const name of productNames) {
            await cart.addProductByName(name);
            await page.waitForTimeout(500);
        }

        // 8. Check the cart badge shows correct number
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText(String(productNames.length));
        await page.waitForTimeout(500);

        // 9. Go to cart
        await cart.goToCart();
        await page.waitForTimeout(500);

        // 10. Check all products are in the cart
        const cartItems = await page.locator('.cart_item .inventory_item_name').allTextContents();
        for (const name of productNamesForVerification) {
            expect(cartItems).toContain(name);
            await page.waitForTimeout(500);
        }
        await page.waitForTimeout(500);
    });


    // Skip Annotations : appears on the report skiped, The time taken is "0ms" 
    test.skip('Skip.1 annotations', async ({ page }) => {
        const loginObj = new POMlogIn(page);
        const cart = new AddToCartPage(page);

        // 3. Check LogIn
        await loginObj.Login('standard_user', 'secret_sauce');
        await page.waitForTimeout(500);

        // 4. Check the title(url) after moving from the LogIn page
        await expect(page.url()).toContain("inventory.html");
        await page.waitForTimeout(500);

        // 5. List of product
        const productNames = [
            "test.allthethings()-t-shirt-(red)"
        ];

        // 6. List of product for verification
        const productNamesForVerification = [
            "Test.allTheThings() T-Shirt (Red)"
        ];

        // 7. Add products to cart
        for (const name of productNames) {
            await cart.addProductByName(name);
            await page.waitForTimeout(500);
        }

        // 8. Check the cart badge shows correct number
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText(String(productNames.length));
        await page.waitForTimeout(500);

        // 9. Go to cart
        await cart.goToCart();
        await page.waitForTimeout(500);

        // 10. Check all products are in the cart
        const cartItems = await page.locator('.cart_item .inventory_item_name').allTextContents();
        for (const name of productNamesForVerification) {
            expect(cartItems).toContain(name);
            await page.waitForTimeout(500);
        }
        await page.waitForTimeout(500);
    });


    // Skip Annotations : appears on the report skiped, The time taken is "...ms" 
    test('Skip.2 annotations', async ({ page }) => {
        const loginObj = new POMlogIn(page);
        const cart = new AddToCartPage(page);

        // 3. Check LogIn
        await loginObj.Login('standard_user', 'secret_sauce');
        await page.waitForTimeout(500);

        // 4. Check the title(url) after moving from the LogIn page
        await expect(page.url()).toContain("inventory.html");
        await page.waitForTimeout(500);

        // 5. List of product
        const productNames = [
            "test.allthethings()-t-shirt-(red)"
        ];

        // 6. List of product for verification
        const productNamesForVerification = [
            "Test.allTheThings() T-Shirt (Red)"
        ];

        // 7. Add products to cart
        for (const name of productNames) {
            await cart.addProductByName(name);
            await page.waitForTimeout(500);
            test.skip();
        }

        // 8. Check the cart badge shows correct number
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText(String(productNames.length));
        await page.waitForTimeout(500);

        // 9. Go to cart
        await cart.goToCart();
        await page.waitForTimeout(500);

        // 10. Check all products are in the cart
        const cartItems = await page.locator('.cart_item .inventory_item_name').allTextContents();
        for (const name of productNamesForVerification) {
            expect(cartItems).toContain(name);
            await page.waitForTimeout(500);
        }
        await page.waitForTimeout(500);
    });
})