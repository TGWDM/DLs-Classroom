import { screen } from '@testing-library/react';
import Classroom from '../screens/Classroom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './renderWithRouter';

test('Check that title renders', () => {
    renderWithRouter(<Classroom />);
    // Check that something from your app is rendered
    const heading = screen.getByText(/DL's Class/i);
    expect(heading).toBeInTheDocument();
});

test('Add student button renders', () => {
    renderWithRouter(<Classroom />);
    // Check that something from your app is rendered
    const addStdBtn = screen.getByRole('button', { name: /Add a Student/i });
    expect(addStdBtn).toBeInTheDocument();
});

test('Add student button open add student modal', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Classroom />);

    const addStdBtn = screen.getByRole('button', { name: /Add a Student/i });
    await user.click(addStdBtn);
    expect(screen.getByTestId("rootAddStudentOverlay")).toBeInTheDocument();

})

test("Teacher's icons render", () => {
    renderWithRouter(<Classroom />);
    // Check that something from your app is rendered
    const teacherIcon = screen.getByAltText('teacherIcon');
    expect(teacherIcon).toBeInTheDocument();
    const teacherDesk = screen.getByAltText('teacherDesk');
    expect(teacherDesk).toBeInTheDocument();
    const teacherName = screen.getByTestId('teacherName');
    expect(teacherName).toBeInTheDocument();
});

test('Back button routes back to home', () => {
    renderWithRouter(<Classroom />);
    const backArrowLink = screen.getByTestId('backArrowLink');
    expect(backArrowLink).toHaveAttribute('href', '/');
})

