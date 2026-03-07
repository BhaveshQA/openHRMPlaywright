import { test, expect } from '@playwright/test';
import { LoginPage} from '../Pages/LoginPage'
import {loginData} from '../testData/loginData.js'

test("OrangeHRM User Login", async ({page}) =>{

    const loginpage = new LoginPage(page);


    await loginpage.navigateToLoginPage()
    await loginpage.login(loginData.username,loginData.password)
    await loginpage.verifyLoginSuccess()
    /**await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.fill('input[name="username"]','Admin')
    await page.fill('input[name="password"]','admin123')
    await page.click('button[type="submit"]');
    await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
 **/
})