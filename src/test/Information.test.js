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
  it('should render Information component', async () => {

    const information = await screen.findByRole('region', { name: 'info-product-openclose' });

    expect(information).toBeInTheDocument();
  });

  it('should pressed button next in information component', async () => {
    const buttonSpy = jest.spyOn(Information, 'buttonPressed');
    const button = document.querySelector('dark');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(buttonSpy).toBeCalledTimes(1);

  });

});
