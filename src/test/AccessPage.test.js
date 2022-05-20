/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Access from '../views/Access/Access';

describe('Access view', () => {
  const Accesspage = () => render(
    <Router>
      <Access />
    </Router>,
  );
  beforeEach(() => {
    Accesspage();
  });

  it('should render button in the Access view', async () => {
    const button = await screen.getByRole('link', { name: 'button' });

    expect(button).toMatchInlineSnapshot(`
      <button
        aria-label="button"
        class="pink"
        role="link"
        type="Button"
      />
    `);
  });

  it('should render button in the Access view', async () => {
    const button = await screen.findByRole('link', { name: 'button' });

    expect(button).toMatchInlineSnapshot(`
      <button
        aria-label="button"
        class="pink"
        role="link"
        type="Button"
      />
    `);
    // expect(button.getByRole('button'), isInTheDocument);
  });
  it('should render button in the Access view', async () => {
    const section = await screen.findByRole('info-page');
    // expect(section).toHaveClass('success');
    expect(section).toMatchInlineSnapshot(`
      <section
        aria-label="section-access-page"
        class="success"
        id="info"
        role="info-page"
      >
        <div
          class="message"
        >
          <div
            class="text"
          >
            <h2
              class="text-title"
            />
            <p
              class="text-description"
            />
          </div>
        </div>
        <footer
          class="container"
        >
          <div
            class="footer-btn"
          >
            <button
              aria-label="button"
              class="pink"
              role="link"
              type="Button"
            />
          </div>
        </footer>
      </section>
    `);
  });
});
