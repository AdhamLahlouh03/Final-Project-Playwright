import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();
import { POMlogIn } from "../pages/POM-logIn";
import { AddToCartPage } from "../pages/POM-addToCart";
import { CheckoutPage } from "../pages/POM-checkOut";

test.describe("Checkout after adding products", () => {
    // Runs once before all tests
    test.beforeAll(async () => {
        console.log("Starting Checkout Test Suite");
    });

    // Runs before each test
    test.beforeEach(async ({ page }) => {
        console.log("Navigating to homepage");
        await page.goto(process.env.BASE_URL || "https://www.saucedemo.com/");
        await page.waitForTimeout(500);
    });

    const productList = [
        ["sauce-labs-backpack", "sauce-labs-bike-light"],
        ["sauce-labs-bolt-t-shirt", "sauce-labs-onesie"],
    ];

    for (const products of productList) {
        test(`Checkout for products: ${products.join(", ")}`, async ({ page }) => {
            const login = new POMlogIn(page);
            const cart = new AddToCartPage(page);
            const checkout = new CheckoutPage(page);

            // 1. Verify title
            await expect(page).toHaveTitle("Swag Labs");
            await page.waitForTimeout(500);

            // 2. Login
            await login.Login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
            await page.waitForTimeout(500);

            // 3. Confirm redirect to inventory
            await expect(page.url()).toContain("inventory.html");
            await page.waitForTimeout(500);

            // 4. Add products to cart
            for (const name of products) {
                await cart.addProductByName(name);
                await page.waitForTimeout(500);
            }

            // 5. Go to cart
            await cart.goToCart();
            await page.waitForTimeout(500);

            // 6. Start checkout
            await checkout.startCheckout();
            await page.waitForTimeout(500);

            // 7. Fill checkout info
            await checkout.fillCheckoutInfo(
                process.env.FIRST_NAME!,
                process.env.LAST_NAME!,
                process.env.POSTAL_CODE!
            );
            await page.waitForTimeout(500);

            // 8. Finish checkout
            await checkout.finishCheckout();
            await page.waitForTimeout(500);

            // 9. Assert order confirmation
            await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
            await page.waitForTimeout(500);

            // 10. Back to products
            await page.locator('[data-test="back-to-products"]').click();
            await page.waitForTimeout(500);
        });
    }

    // Runs after each test
    test.afterEach(async ({ page }) => {
        console.log("Finished test, closing page...");
    });

    // Runs once after all tests
    test.afterAll(async () => {
        console.log("Completed Checkout Test Suite");
    });
});
