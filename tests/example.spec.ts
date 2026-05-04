import { expect, test } from '@playwright/test';

test('example smoke test', async ({ page }) => {
  await page.setContent('<h1 id="title">Tramnew Playwright Setup</h1>');
  await expect(page.locator('#title')).toHaveText('Tramnew Playwright Setup');
});
