import { newE2EPage } from '@stencil/core/testing';

describe('led-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<led-list></led-list>');

    const element = await page.find('led-list');
    expect(element).toHaveClass('hydrated');
  });
});
