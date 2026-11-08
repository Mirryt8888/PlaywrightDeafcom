const { test, expect } = require('@playwright/test');

test.describe('Deafcom - Přihlašovací formulář', () => {

  // Krok, který proběhne před každým testem: Otevření přihlašovací stránky
  test.beforeEach(async ({ page }) => {
    await page.goto('https://app.deafcom.cz/login');
  });

  test('TC-01: Ověření prvků přihlašovacího formuláře', async ({ page }) => {
    // 1. Ověříme, že pole pro e-mail je viditelné
    const emailInput = page.locator('input[type="email"], #email, input[name="email"]').first();
    await expect(emailInput).toBeVisible();

    // 2. Ověříme, že pole pro heslo je viditelné
    const passwordInput = page.locator('input[type="password"], #password').first();
    await expect(passwordInput).toBeVisible();

    // 3. Ověříme tlačítko pro přihlášení
    const submitButton = page.locator('button[type="submit"]').first();
    await expect(submitButton).toBeVisible();

    console.log('--- Všechny prvky přihlášení jsou správně zobrazeny! ---');
  });

  test('TC-02: Pokus o přihlášení s neplatnými údaji', async ({ page }) => {
    // 1. Vyplnění testovacího e-mailu a špatného hesla
    await page.fill('input[type="email"], #email', 'test.user@deafcom.cz');
    await page.fill('input[type="password"], #password', 'SpatneHeslo123');

    // 2. Kliknutí na tlačítko přihlásit
    await page.click('button[type="submit"]');

    // 3. Ověření, že uživatel zůstal na přihlašovací stránce (neprošlo do /dashboard)
    await expect(page).not.toHaveURL(/.*dashboard/);
  });

});
