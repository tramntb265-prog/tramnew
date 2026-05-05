import { type Locator, type Page } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(
      'input#sign_up_sign_in_credentials_p_email[data-kinde-control-select-text="true"][name="p_email"]'
    );
    this.signInButton = page.locator(
      'button.kinde-button.kinde-button-variant-primary[data-kinde-button="true"][type="submit"]'
    ).filter({ hasText: 'Sign In' });
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }
}
