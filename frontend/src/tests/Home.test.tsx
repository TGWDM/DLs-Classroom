import {screen, within } from '@testing-library/react';
import Home from '../screens/Home';
import { renderWithRouter } from './renderWithRouter';

test('Check that title renders', () => {
  renderWithRouter(<Home />);
  // Check that something from your app is rendered
  const heading = screen.getByText(/DL's/i);
  expect(heading).toBeInTheDocument();
});

test('Navigates to github when pressed', () => {
  renderWithRouter(<Home />);
  // Check that something from your app is rendered
  const ghLogo = screen.getByAltText('github-logo');
  expect(ghLogo).toBeInTheDocument();
});

test('Check that github asset renders', () => {
  renderWithRouter(<Home />);
  const ghLink = screen.getByRole('link', {name: /github-logo/});
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

test('Classroom button routes to corrct screnn', () =>{
  renderWithRouter(<Home />);
  const link = screen.getByRole('link', {name: /View Classroom/i});
  expect(link).toHaveAttribute('href', '/Classroom');

});
