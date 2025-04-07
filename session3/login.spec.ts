import {chromium, firefox, test} from "@playwright/test";

test("To launch the home page",async () => {

    const browser = await chromium.launch({headless : false, channel : "chrome"})

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.redbus.in/");
    
    console.log(await page.title());
    
    const browser1 = await firefox.launch({headless : false})

    const context1 = await browser1.newContext();

    const page1 = await context1.newPage();

    await page1.goto("https://www.flipkart.com/");

    console.log(await page1.url());
;
    
    
    
})