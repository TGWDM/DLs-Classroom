import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Check that something from your app is rendered
  const heading = screen.getByText(/DL's/i);
  expect(heading).toBeInTheDocument();
});