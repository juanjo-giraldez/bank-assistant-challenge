/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { toHaveStyle } from '@testing-library/jest-dom';

import Title from '../components/Title';

const titleTest = () => render(
  <Router>
    <Title title="title-test" />
  </Router>,
);
describe('title component', () => {
  beforeEach(() => {
    titleTest();
  });

  it('should render heading title', async () => {
    const title = await screen.getByRole('heading', { name: 'heading-title' });

    expect(title).toMatchInlineSnapshot(`
      <h1
        aria-label="heading-title"
        class="title"
      >
        title-test
      </h1>
    `);
  });

  it('should render style after in title', async () => {
    const titleClass = await screen.findByRole('heading', { name: 'heading-title' });

    expect(titleClass).toHaveStyle({
      content: '',
    });
  });

});
