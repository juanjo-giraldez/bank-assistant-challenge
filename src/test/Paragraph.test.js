/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Paragraph from '../components/Paragraph.js';
import '@testing-library/jest-dom/extend-expect';

describe('Paragraph component', () => {

  const paragraphTest = () => render(
    <Paragraph />,
  );
  beforeEach(() => {
    paragraphTest();
  });
  it('should render Paragraph component', async () => {
    const paragraph = await screen.findByRole('article', { name: 'paragraph-info' });

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('paragraph');
  });

  it('should render Paragraph component', async () => {
    const paragraph = await screen.findByRole('article', { name: 'paragraph-info' });

    expect(paragraph).toBeInTheDocument();
  });
});
