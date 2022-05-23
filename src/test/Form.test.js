/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Form from '../views/Form/Form';
import '@testing-library/jest-dom/extend-expect';

describe('Form component', () => {

  const formTest = () => render(
    <Router>
      <Form />
    </Router>,
  );
  beforeEach(() => {
    formTest();
  });
  it('should render Form component', async () => {

    // eslint-disable-next-line no-shadow
    const formTest = await screen.findByRole('banner', { name: 'Card-header-Progress-bar' });

    expect(formTest).toBeInTheDocument();
  });

});
