/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import VisibilityOff from '../components/VisibilityOff';
import '@testing-library/jest-dom/extend-expect';

describe('VisibilityOff component', () => {
  const testAreaTest = () => render(
    <VisibilityOff />,
  );
  beforeEach(() => {
    testAreaTest();
  });

  it('should render VisibilityOff component', async () => {
    const textArea = await screen.findByRole('img', { name: 'icon-eye-Closed' });

    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveClass('image-eye');
  });
});
