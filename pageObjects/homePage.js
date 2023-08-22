const SEARCH_FIELD = "[name='q']";

export const typeSearchField = async (page, text) => {
  await page.fill(SEARCH_FIELD, text);
  await page.press(SEARCH_FIELD, "Enter");
};
