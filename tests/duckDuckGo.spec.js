import { test, expect } from "@playwright/test";
import * as HomePage from "../pageObjects/homePage";
import * as ResultsPage from "../pageObjects/resultsPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://start.duckduckgo.com/");
});

test("each result title should contain the word android", async ({ page }) => {
  await HomePage.typeSearchField(page, "Android");
  await ResultsPage.waitForResults(page);

  const results = await ResultsPage.getResults(page);

  for (const result of results) {
    const title = await ResultsPage.getResultTitle(page, result);
    expect(title.toLowerCase()).toContain("android");
  }
});

test("regions count should be greater than 10", async ({ page }) => {
  await HomePage.typeSearchField(page, "Android");
  await ResultsPage.waitForResults(page);
  await ResultsPage.clickRegionsButton(page);

  const regionsOptions = await ResultsPage.getRegionsOptions(page);

  expect(regionsOptions.length).toBeGreaterThan(10);
});
