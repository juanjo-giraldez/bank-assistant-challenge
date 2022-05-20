/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ViewFeedBack from '../views/Feedback/ViewFeedBack';
import '@testing-library/jest-dom/extend-expect';

describe('ViewFeedBack component', () => {
  const mockedState = jest.fn();
  jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useLocation: () => ({
      state: mockedState(),
    }),
  }));

  const viewFeedBackTest = () => render(
    <Router>
      <ViewFeedBack />
    </Router>,
  );
  beforeEach(() => {
    viewFeedBackTest();
  });
  it('should render ViewFeedBack success true', async () => {
    mockedState.mockImplementation(() => ({ success: true }));

    const viewFeedBack = await screen.findByRole('region', { name: 'region-modal-success' });

    expect(viewFeedBack).toBeInTheDocument();
  });

  it('should render ViewFeedBack success false', async () => {
    mockedState.mockImplementation(() => ({ success: false }));

    const viewFeedBack = await screen.findByRole('region', { name: 'section-modal-failed' });

    expect(viewFeedBack).toBeInTheDocument();

  });

  it('should render ViewFeedBack pressed button go to access', async () => {
    mockedState.mockImplementation(() => ({ success: true }));

    const mockButton = jest.fn();
    const viewFeedBack = await screen.findByRole('link', { name: 'button' });
    fireEvent.click(viewFeedBack);
    expect(viewFeedBack).toBeInTheDocument();
    expect(mockButton).toHaveBeenCalledTimes(1);
  });

});
