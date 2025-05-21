import { test, expect } from "@playwright/test";
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";
import { CheckoutPage } from "../pages/POM-checkOut";

test('Test Add Multiple Products to Cart', async ({ page }) => {
    const loginObj = new POMlogIn(page);
    const cart = new AddToCartPage(page);
    const checkout = new CheckoutPage(page);
    
    // 1. Go to the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(500);

    // 2. Check Title Website
    await expect(page).toHaveTitle("Swag Labs");
    await page.waitForTimeout(500);

    // 3. Check LogIn
    loginObj.Login('standard_user','secret_sauce');
    await page.waitForTimeout(500);

    // 4. Check the title(url) after moving from the LogIn page
    await expect(page.url()).toContain("inventory.html");
    await page.waitForTimeout(500);

    // 5. built list for products name
    const productNames = [
        "sauce-labs-backpack",
        "sauce-labs-bike-light",
        "sauce-labs-bolt-t-shirt",
        "sauce-labs-fleece-jacket",
        "sauce-labs-onesie",
        "test.allthethings()-t-shirt-(red)"
    ];

    // 6. add product to cart
    for (const name of productNames) {
        await cart.addProductByName(name);
        await page.waitForTimeout(500);
    }

    // 7. go to cart
    await cart.goToCart();
    await page.waitForTimeout(500);

    // 8. go to each product
    const productIds = ["0", "1", "2", "3", "4", "5"]; // IDs
    for (const id of productIds) {
        await cart.openCartItemById(id);
        await page.waitForTimeout(500);
        await cart.backToProducts();
        await page.waitForTimeout(500);
    }

    // 9. Checkout
    await cart.goToCart();
    await page.waitForTimeout(500);
    await checkout.startCheckout();
    await page.waitForTimeout(500);
    await checkout.fillCheckoutInfo("Ameer", "Saleh", "12345");
    await page.waitForTimeout(500);
    await checkout.finishCheckout();
    await page.waitForTimeout(500);

    // 
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
    await page.waitForTimeout(500);

});
