import { test } from "@playwright/test";

test ("To login salesforce", async ({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("guru1128prasad709@agentforce.com");

    await page.locator("#password").fill("Alluarjun@0");

    await page.locator("//input[@name='Login']").click();

    await page.waitForTimeout(10000);

    console.log(page.url());
    
    
})