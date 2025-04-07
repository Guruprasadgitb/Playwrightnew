import { chromium, test } from "@playwright/test";

test("To create a Lead", async () => {

    const browser = await chromium.launch({headless: false, channel : "chrome"});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("democsr");

    await page.locator("#password").fill("crmsfa");

    await page.locator("input[type='submit']").click();

    await page.locator("//*[contains(text(),'CRM/SFA')]").click();

    await page.locator("//*[text()='Leads']").click();
    
    await page.locator("(//*[text()='Create Lead'])[1]").click();

    await page.locator("#createLeadForm_companyName").fill("Leaftaps");

    await page.locator("#createLeadForm_firstName").fill("Justin")

    await page.locator("#createLeadForm_lastName").fill("f");

    await page.locator('//*[@name="personalTitle"]').fill("Good morning");

    await page.locator("#createLeadForm_generalProfTitle").fill("CEO");

    await page.locator('[name="annualRevenue"]').fill("3,454,6564");

    await page.locator('[name="personalTitle"]').fill("Manufacturing");

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("930284842443");

    await page.locator('[value="Create Lead"]').click();

    const value = await page.locator('#viewLead_companyName_sp').innerText();

    console.log(value);
    

})