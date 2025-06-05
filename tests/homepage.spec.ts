import { test, expect } from "@chromatic-com/playwright";

test("Homepage", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const actualTitle = await page.title();
  console.log("Page Title:", actualTitle); // ← Helps debug

  await expect(page).toHaveTitle("ESU - Sri Lanka's Premier Uni for Higher Education Excellence!");
});
