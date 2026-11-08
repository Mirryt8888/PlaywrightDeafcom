const { test, expect } = require('@playwright/test');

test.describe('Deafcom - Přihlašovací formulář', () => {

  test('TC-01: Ověření přítomnosti prvků na přihlašovací stránce', async ({ page }) => {
    // 1. Otevře webovou aplikaci Deafcom
    await page.goto('https://app.deafcom.cz/');

    // 2. Ověří, že je na stránce viditelné pole pro e-mail nebo přihlašovací tlačítko
    const loginButton = page.locator('button, input[type="submit"]').first();
    await expect(loginButton).toBeVisible();
    
    console.log('Test úspěšně ověřil načtení přihlašovací stránky Deafcom!');
  });

});
