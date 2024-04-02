import { newSpecPage } from '@stencil/core/testing';
import { LedList } from '../led-list';

describe('led-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedList],
      html: `<led-list></led-list>`,
    });
    expect(page.root).toEqualHtml(`
      <led-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </led-list>
    `);
  });
});
