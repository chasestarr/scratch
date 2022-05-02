import {chromium} from 'playwright';

const html = `
<html>
  <body>
    <form>
      <label>first name
        <input id="first" name="first name">
      </label>

      <input id="last" name="last name">

      <div id="bad-btn">inaccessibile button</div>
    </form>
  </body>
</html>
`;

async function printAxTree(page, root) {
  const tree = await page.accessibility.snapshot({root});
  console.log(tree);
}

async function main() {
  const browser = await chromium.launch({});
  const page = await browser.newPage();
  await page.setContent(html);

  const client = await page.context().newCDPSession(page);
  await client.send('Accessibility.enable');
  await client.send('DOM.enable');

  // const element = await page.$('#first');
  // const nodeName = await page.evaluate(el => el.nodeName, element);
  // console.log(nodeName);
  // console.log(element['_remoteObject']);

  const first = await page.locator('#first').elementHandle();
  await printAxTree(page, first); 

  const last = await page.locator('#last').elementHandle();
  await printAxTree(page, last); 

  const bad = await page.locator('#bad-btn').elementHandle();
  await printAxTree(page, bad); 

  // console.log(element['_remoteObject']);

  // console.log(Object.getOwnPropertyNames(element));
  // const oi = await element.getProperty('_nodeId');
  // const objectId = await oi.jsonValue();
  // console.log(objectId);

  // const x = await locator.evaluate(el => el.nodeName);
  // console.log(x);


  // const y = await client.send('DOM.describeNode', element);
  // console.log(y);

  await page.close();
  await browser.close();
}

main();
