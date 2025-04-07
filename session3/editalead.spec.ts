import {  chromium, test } from "@playwright/test";

test ("To edit lead", async () => {

    const browser = await chromium.launch({headless : false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator('[type="submit"]').click();

    await page.locator("//*[contains(text(),'CRM/SFA')]").click();

    await page.locator("//*[text()='Leads']").click();

    await page.locator("//a[text()='Find Leads']").click();

    await page.locator('(//input[@name="firstName"])[3]').fill("justin");

    await page.locator("//button[text()='Find Leads']").click();

    await page.locator("//*[text()='10717']").click();

    await page.locator("//*[text()='Edit']").click();

    await page.locator("#updateLeadForm_companyName").fill("Leaftaps.org");

    await page.waitForTimeout(4000);

    await page.locator("#updateLeadForm_annualRevenue").fill("3453453455");

    await page.locator("#updateLeadForm_departmentName").fill("Revenue");

    await page.locator("#updateLeadForm_description").fill("This is cool");

    await page.locator("#updateLeadForm_description").click();
    
    await page.waitForTimeout(4000);
})