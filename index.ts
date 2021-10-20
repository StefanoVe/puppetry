/**
 * Actually make puppeteer click buttons based on their ID
 * @param config.DOM Puppeteer's Page.
 * @param config.selector ID of the button you want puppeteer to click
 * @returns
 */
const clickOnButton = async (config = { DOM: null, selector: '' }) => {
  try {
    var el = await config.DOM.waitForSelector(`#${config.selector}`, {
      timeout: 1000,
    });
    await config.DOM.click(el._remoteObject.description);
    return console.log('✔ ButtonCLicked 👌');
  } catch (err) {
    console.error('🛑 ERROR:', err);
  }
};

/**
 * Identify and collect elements from the chosen page
 * @param config.DOM Puppeteer's Page.
 * @param config.prop A property used to identify the elements you need.
 * @param config.valueType Type of value you want to output (innerText, href, etc).
 * @returns An Array of objects containing all HTMLElements collected.
 */

const getRendederdElements = async (
  config = { DOM: null, prop: '', valueType: 'innerText' }
) => {
  const page = config.DOM;
  const getElems = await page.$$(config.prop);
  const elemsArray = Promise.all(
    await getElems.reduce(async (acc, curr, index) => {
      const res = await acc;
      const elem = await (await curr.getProperty(config.valueType)).jsonValue();
      return [...res, elem];
    }, Promise.resolve([]))
  );
  return await elemsArray;
};

/**
 * @param config.DOM Puppeteer's Page.
 * @param config.prop A property used to identify the elements you need.
 * @param config.valueType Type of value you want to output (innerText, href, etc).
 * @returns An Array of objects containing all HTMLElements collected
 */
const getRemoteObjectsElements = async (
  config = { DOM: null, prop: '', valueType: 'innerText' }
) => {
  const page = config.DOM;
  const getElems = await page.$$(config.prop);
  const elemsArray = Promise.all(
    await getElems.reduce(async (acc, curr, index) => {
      const res = await acc;
      const elem = await (
        await curr.getProperty(config.valueType)
      )._remoteObject.description;
      return [...res, elem];
    }, Promise.resolve([]))
  );
  return await elemsArray;
};

module.exports = {
  clickOnButton,
  getRemoteObjectsElements,
  getRendederdElements,
};
