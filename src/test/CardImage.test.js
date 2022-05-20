/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import CardImage from '../components/CardImage';
import '@testing-library/jest-dom/extend-expect';

describe('CardImage component', () => {

  const cardImageTest = () => render(
    <CardImage />,
  );
  beforeEach(() => {
    cardImageTest();
  });
  it('should render CardImage component', async () => {
    const cardImage = await screen.findByRole('article', { name: 'Card-info-image-description' });

    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveClass('card-image');
  });

});
