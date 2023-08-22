const RESULT_ITEMS = "[data-testid='result']";
const RESULT_ITEMS_TITLE = "[data-testid='result-title-a']";
const REGIONS_BUTTON = ".dropdown--region";
const REGIONS_MODAL = ".js-region-filter-list";
const REGIONS_OPTIONS = "li";

export const waitForResults = async (page) => {
  await page.waitForSelector(RESULT_ITEMS);
};

export const getResults = async (page) => {
  // Making sure we are getting only results, not including ads
  return await page.locator(RESULT_ITEMS).all();
};

export const getResultTitle = async (page, result) => {
  return await result.locator(RESULT_ITEMS_TITLE).textContent();
};

export const clickRegionsButton = async (page) => {
  await page.click(REGIONS_BUTTON);
};

export const getRegionsOptions = async (page) => {
  const regionsModal = page.locator(REGIONS_MODAL);
  return await regionsModal.locator(REGIONS_OPTIONS).all();
};
