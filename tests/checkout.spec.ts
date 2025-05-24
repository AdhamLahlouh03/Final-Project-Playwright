import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";
import { CheckoutPage } from "../pages/POM-checkOut";

dotenv.config();

test.describe("Checkout after adding products", () => {
    // Runs once before all tests
    test.beforeAll(async () => {
        console.log("Starting Checkout Test Suite");
    });

    // 1. Go to the website && Runs before each test 
    test.beforeEach(async ({ page }) => {
        console.log("go to homepage");
        await page.goto(process.env.BASE_URL || "https://www.saucedemo.com/");
        await page.waitForTimeout(100);
    });

    // 2. built many list for products name
    const productList = [
        ["sauce-labs-backpack", "sauce-labs-bike-light"],
        ["sauce-labs-bolt-t-shirt", "sauce-labs-onesie"],
    ];

    // 3. For each list we do the following && parameterize
    for (const products of productList) {
        test(`Checkout for products: ${products.join(", ")}`, async ({ page }) => {
            const login = new POMlogIn(page);
            const cart = new AddToCartPage(page);
            const checkout = new CheckoutPage(page);

            // 4. Check Title Website
            await expect(page).toHaveTitle("Swag Labs");
            await page.waitForTimeout(100);

            // 5. Check LogIn
            await login.Login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
            await page.waitForTimeout(100);

            // 6. Check the title(url) after moving from the LogIn page
            await expect(page.url()).toContain("inventory.html");
            await page.waitForTimeout(100);

            // 7. add product to cart
            for (const name of products) {
                await cart.addProductByName(name);
                await page.waitForTimeout(100);
            }

            // 8. go to cart
            await cart.goToCart();
            await page.waitForTimeout(100);

            // 9. start checkout
            await checkout.startCheckout();
            await page.waitForTimeout(100);

            // 10. fill checkout info
            await checkout.fillCheckoutInfo(
                process.env.FIRST_NAME!,
                process.env.LAST_NAME!,
                process.env.POSTAL_CODE!
            );
            await page.waitForTimeout(100);

            // 11. finish checkout
            await checkout.finishCheckout();
            await page.waitForTimeout(100);

            // 12. Check the message that will appear "Thank you for your order!"
            await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
            await page.waitForTimeout(100);

            // 13. back to products
            await page.locator('[data-test="back-to-products"]').click();
            await page.waitForTimeout(100);
        });
    }

    // Runs after each test
    test.afterEach(async ({ page }) => {
        console.log("Finished test");
    });

    // Runs once after all tests
    test.afterAll(async () => {
        console.log("Completed Checkout Test Suite");
    });
});
