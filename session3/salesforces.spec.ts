import { chromium, expect, test } from "@playwright/test";

test("To create a account", async () => {

    const browser = await chromium.launch({headless : false })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("guru1128prasad709@agentforce.com");

    await page.locator('[id="password"]').fill("Alluarjun@0");

    await page.locator("#Login").click();
    
   const url = console.log(await page.url());

 //  expect(url).toContain("my.salesforce.com");

   await page.locator('[class="appLauncher slds-context-bar__icon-action"]').click();

   await page.getByLabel("View All Applications").click();

   await page.getByPlaceholder('"Search apps or items..."').fill("Service");

   await page.locator("(//mark[text()='Service'])[1]").click();

   await page.locator('[title="Accounts"]').click();

   await page.getByRole('button', { name: 'New' }).click();

   await page.locator('[name="Name"]').fill("Leaftaps");

   await page.locator("//button[@name='SaveEdit']").click();

   console.log(await page.locator('[slot="primaryField"]').innerText());
   
    
   })


