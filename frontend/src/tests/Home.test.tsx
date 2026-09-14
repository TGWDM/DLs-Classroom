import { render, screen } from '@testing-library/react';
import Home from '../screens/Home';

test('Check that title renders', () => {
  render(<Home />);
  // Check that something from your app is rendered
  const heading = screen.getByText(/DL's/i);
  expect(heading).toBeInTheDocument();
});

test('Navigates to github when pressed', () => {
  render(<Home />);
  // Check that something from your app is rendered
  const ghLogo = screen.getByAltText('github-logo');
  expect(ghLogo).toBeInTheDocument();
});

test('Check that github asset renders', () => {
  render(<Home />);
  const ghLogo = screen.getByAltText('github-logo');
  const ghLink = screen.getByRole('link', {name: /github-logo/});
  expect(ghLink).toHaveAttribute('href', 'https://github.com/TGWDM/DLs-Classroom');
  expect(ghLogo).toHaveAttribute('target', '_blank');
});
