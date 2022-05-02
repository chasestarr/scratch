// latest playwright v1.21.0 broke firefox in docker
// https://github.com/microsoft/playwright/issues/13756
import {chromium, firefox, webkit} from "playwright";

async function test(browserType) {
  const browser = await browserType.launch();
  const page = await browser.newPage();
  await page.goto("localhost:3000");
  await page.waitForSelector("#root");
  console.log(await page.content());
  await browser.close();
}

async function main() {
  console.log("chromium");
  await test(chromium);
  console.log("firefox");
  await test(firefox);
  console.log("webkit");
  await test(webkit);
}

main();
