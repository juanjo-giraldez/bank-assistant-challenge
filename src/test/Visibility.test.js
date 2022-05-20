/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Visibility from '../components/Visibility';
import '@testing-library/jest-dom/extend-expect';

describe('Visibility component', () => {
  const visibilityTest = () => render(
    <Visibility />,
  );
  beforeEach(() => {
    visibilityTest();
  });

  it('should render Visibility component', async () => {
    const textArea = await screen.findByRole('img', { name: 'icon-eye-open' });

    expect(textArea).toBeInTheDocument();
  });
});
