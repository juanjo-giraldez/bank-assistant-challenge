/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from '../components/Title';

describe('title component', () => {

  const titleTest = () => render(
    <Title title="title-test" />,
  );
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

    expect(titleClass).toBeInTheDocument();
    expect(titleClass).toHaveClass('title');
  });

});
