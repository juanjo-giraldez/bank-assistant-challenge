/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import TextArea from '../components/TextArea';
import '@testing-library/jest-dom/extend-expect';

describe('TestArea component', () => {
  const testAreaTest = () => render(
    <TextArea />,
  );
  beforeEach(() => {
    testAreaTest();
  });
  it('should render TestArea component', async () => {
    const textArea = await screen.findByRole('article', { name: 'text-clue-field' });

    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveClass('text-area');
  });

  it('should have the input tag attribute maxLength', async () => {
    const textArea = await screen.findByRole('textbox', { name: 'text-area-input' });

    expect(textArea).toBeInTheDocument();
    expect(textArea).not.toHaveClass('text-area');
    expect(textArea).toHaveAttribute('maxLength');
  });

});
