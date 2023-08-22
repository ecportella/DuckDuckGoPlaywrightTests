import { test, expect } from "@playwright/test";
import { findAndLogIconURL } from "../helpers/apiTest";

test("icon url response from api should be printed if not null", async ({
  request,
}) => {
  await request
    .get("https://api.duckduckgo.com/?q=simpsons&format=json")
    .then(async (response) => {
      const results = await response.json();

      findAndLogIconURL(results);

      expect(response.status()).toBe(200);
    });
});
