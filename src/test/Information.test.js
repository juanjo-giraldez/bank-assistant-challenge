/* eslint-disable no-console */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Information from '../views/ProductInformation/Information';
import '@testing-library/jest-dom/extend-expect';

describe('Information component', () => {

  const informationTest = () => render(
    <Router>
      <Information />
    </Router>,
  );
  console.log('first', informationTest.name);
  beforeEach(() => {
    informationTest();
  });
  it('should render title in form view component', async () => {

    const information = await screen.findByRole('region', { name: 'info-product-openclose' });

    expect(information).toBeInTheDocument();
  });

});
