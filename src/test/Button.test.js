/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Button from '../components/Button.js';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {

  const buttonTest = () => render(
    <Button />,
  );
  beforeEach(() => {
    buttonTest();
  });

  it('should render Paragraph component', async () => {
    const paragraph = await screen.findByRole('link', { name: 'button' });

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('stantard');
  });

});
