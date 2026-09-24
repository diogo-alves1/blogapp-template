import { test, expect } from '@playwright/test';

test('should display the welcome page', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('mat-toolbar').nth(1)).toContainText('HFTM Web Applications (IN353)');

  await expect(page.locator('h1')).toContainText('Blog Übersicht');
});
