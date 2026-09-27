import { screen, within } from '@testing-library/react';
import Home from '../screens/Home';
import { renderWithRouter } from './renderWithRouter';

test('Check that title renders', () => {
  renderWithRouter(<Home />);
  // Check that something from your app is rendered
  const heading = screen.getByText(/DL's/i);
  expect(heading).toBeInTheDocument();
});
test('Check that Social assets render', () => {
  renderWithRouter(<Home />);
  const ghLogo = screen.getByAltText('github-logo');
  expect(ghLogo).toBeInTheDocument();

  const linkedIn = screen.getByAltText('linkedIn-logo');
  expect(linkedIn).toBeInTheDocument();
});

test('Check that Social assets navigate to correct links', () => {
  renderWithRouter(<Home />);
  const linkedIn = screen.getByRole('link', { name: /linkedIn-logo/ });
  expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/tyrell-grant-williams-b46a0a1a1/');
  expect(linkedIn).toHaveAttribute('target', '_blank');

  const ghLink = screen.getByRole('link', { name: /github-logo/ });
  expect(ghLink).toHaveAttribute('href', 'https://github.com/TGWDM/DLs-Classroom');
  expect(ghLink).toHaveAttribute('target', '_blank');
});

test('Check that all buttons render', () => {
  renderWithRouter(<Home />);
  const optionsDiv = screen.getByTestId('optionsButtons');
  expect(optionsDiv).toBeInTheDocument();
  const buttons = within(optionsDiv).getAllByRole('link');
  expect(buttons).toHaveLength(4);
});

test('All option buttons route to corrct screens', () => {
  renderWithRouter(<Home />);
  const classLink = screen.getByRole('link', { name: /View Classroom/i });
  expect(classLink).toHaveAttribute('href', '/classroom');

  const standLink = screen.getByRole('link', { name: /View Standings/i });
  expect(standLink).toHaveAttribute('href', '/standings');

  const settLink = screen.getByRole('link', { name: /Settings/i });
  expect(settLink).toHaveAttribute('href', '/settings');
});
