import { test, expect } from '@playwright/test';
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";

test('Add products to cart', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

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

    // 5. built list for products name
    const productNames = [
        "sauce-labs-backpack",
        "sauce-labs-bike-light",
        "sauce-labs-bolt-t-shirt",
        "sauce-labs-fleece-jacket",
        "sauce-labs-onesie"
    ];

    // 6. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(500);
    }

    // 7. go to cart
    await cart.goToCart();
    await page.waitForTimeout(100);
});

// Skip Annotations : appears on the report skiped, The time taken is "0ms" 
test.skip('Skip.1 annotations', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);

    // 2. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(1000);

    // 3. built list for products name
    const productNames = [
        "test.allthethings()-t-shirt-(red)"
    ];

    // 4. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(500);
    }
});

// Skip Annotations : appears on the report skiped, The time taken is "...ms" 
test('Skip.2 annotations', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);

    // 2. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(1000);

    // 3. built list for products name
    const productNames = [
        "test.allthethings()-t-shirt-(red)"
    ];

    // 4. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(500);
        test.skip();
    }
});


