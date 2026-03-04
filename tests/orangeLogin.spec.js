import { test, expect } from '@playwright/test';

test("OrangeHRM User Login", async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.fill('input[name="username"]','Admin')
    await page.fill('input[name="password"]','admin123')
    await page.click('button[type="submit"]');
    await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();

})