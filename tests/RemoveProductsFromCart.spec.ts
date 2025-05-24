import { test, expect } from '@playwright/test';
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";
import { RemoveFromCartPage } from '../pages/POM-removeFromCart';

test('Remove products from cart', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);
    const remove = new RemoveFromCartPage(page);

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
    await page.waitForTimeout(1000);

    // 8. list of products to remove
    const productsToRemove = [
        "sauce-labs-backpack",
        "sauce-labs-bike-light"
    ];

    // 9. remove specific products using loop
    for (const name of productsToRemove) {
        await remove.removeProductByName(name);
        await page.waitForTimeout(500);
    }
});
