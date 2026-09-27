import { screen } from '@testing-library/react';
import Home from '../screens/Home';
import { renderWithRouter } from './renderWithRouter';

test('Check that title renders', () => {
  renderWithRouter(<Home />);
  // Check that something from your app is rendered
  const heading = screen.getByText(/DL's Classroom/i);
  expect(heading).toBeInTheDocument();
});