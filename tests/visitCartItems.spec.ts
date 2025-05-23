import { test, expect } from '@playwright/test';
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";

test('Visit each product from cart', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(100);

    // 2. Check Title Website
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(100);

    // 3. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(100);

    // 4. Check the title(url) after moving from the LogIn page
    await expect(page.url()).toContain("inventory.html");
    await page.waitForTimeout(100);

    // 5. built list for products name
    const productNames = [
        "sauce-labs-backpack",
        "sauce-labs-bike-light",
        "sauce-labs-bolt-t-shirt",
        "sauce-labs-fleece-jacket"
    ];

    // 6. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(100);
    }

    // 7. go to cart
    await cart.goToCart();
    await page.waitForTimeout(100);

    // 8. go to each product
    const productIds = ["0", "1", "4", "5"]; // IDs
    for (const id of productIds) {
        await cart.openCartItemById(id);
        await page.waitForTimeout(100);
        await cart.backToProducts();
        await page.waitForTimeout(100);
    }
});

// Fixme Annotations : appears on the report skiped, The time taken is "0ms" 
test.fixme('Fixme.1 annotations', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(100);

    // 2. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(100);

    // 3. built list for products name
    const productNames = [
        "sauce-labs-backpack",
    ];

    // 4. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(100);
    }

    // 5. go to cart
    await cart.goToCart();
    await page.waitForTimeout(100);

    // 6. go to each product
    const productIds = ["4"]; // IDs
    for (const id of productIds) {
        await cart.openCartItemById(id);
        await page.waitForTimeout(100);
        await cart.backToProducts();
        await page.waitForTimeout(100);
    }
});

// Fixme Annotations : appears on the report skiped, The time taken is "...ms" 
test('Fixme.2 annotations', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);

    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(100);

    // 2. Check LogIn
    await loginObj.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(100);

    // 3. built list for products name
    const productNames = [
        "sauce-labs-backpack",
    ];

    // 4. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(100);
    }

    // 5. go to cart
    await cart.goToCart();
    await page.waitForTimeout(100);

    // 6. go to each product
    const productIds = ["4"]; // IDs
    for (const id of productIds) {
        await cart.openCartItemById(id);
        await page.waitForTimeout(100);
        await cart.backToProducts();
        await page.waitForTimeout(100);
        test.fixme();
    }
});
