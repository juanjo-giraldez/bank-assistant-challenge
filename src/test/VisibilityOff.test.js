/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import VisibilityOff from '../components/VisibilityOff';
import '@testing-library/jest-dom/extend-expect';

describe('VisibilityOff component', () => {
  const visibilityOffTest = () => render(
    <VisibilityOff />,
  );
  beforeEach(() => {
    visibilityOffTest();
  });

  it('should render VisibilityOff component', async () => {
    const visibilityOff = await screen.findByRole('img', { name: 'icon-eye-Closed' });

    expect(visibilityOff).toBeInTheDocument();
    expect(visibilityOff).toHaveClass('image-eye');
  });
});
