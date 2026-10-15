import { render, screen } from '@testing-library/react';
import Classroom from '../screens/Classroom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './renderWithRouter';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';
import { studentService } from '../services/studentService';
import type { Student } from '../types/Student';
import { beforeEach } from 'vitest';

vi.mock('../services/studentService', () => ({
  studentService: {
    getAll: vi.fn(),
    create: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(studentService.getAll).mockResolvedValue([]);
});

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

test('Add student button opens add student modal', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Classroom />);

    const addStdBtn = screen.getByRole('button', { name: /Add a Student/i });
    await user.click(addStdBtn);
    screen.debug();
    expect(await screen.findByTestId('rootAddStudentOverlay')).toBeInTheDocument();

})

test('loading message shows for student grid', async () => {
    vi.mocked(studentService.getAll).mockReturnValue(new Promise(() => { }));
    renderWithRouter(<Classroom />);
    expect(screen.getByText(/Loading students/i)).toBeInTheDocument();

})

test('shows empty message when no students', async () => {
    vi.mocked(studentService.getAll).mockResolvedValue([]);
    render(<MemoryRouter><Classroom /></MemoryRouter>);
    expect(await screen.findByText(/No Student added to class yet/i)).toBeInTheDocument();
});

test('shows error message when fetch fails', async () => {
    vi.mocked(studentService.getAll).mockRejectedValue(new Error('fail'));
    render(<MemoryRouter><Classroom /></MemoryRouter>);
    expect(await screen.findByText(/Could not load students/i)).toBeInTheDocument();
});

test('renders a row per student', async () => {
    const students: Student[] = [
        { id: 1, fName: 'Alice', lName: 'Smith', dob:"01/02/1994" },
        { id: 2, fName: 'Bob', lName: 'Jones', dob:'17/08/2018' },
    ];
    vi.mocked(studentService.getAll).mockResolvedValue(students);

    render(<MemoryRouter><Classroom /></MemoryRouter>);

    expect(await screen.findByText(/Alice Smith/)).toBeInTheDocument();
    expect(screen.getByText(/Bob Jones/)).toBeInTheDocument();
});

test('grid is hidden while the overlay is open', async () => {
    const user = userEvent.setup();
    vi.mocked(studentService.getAll).mockResolvedValue([
        { id: 1, fName: 'Alice', lName: 'Smith', dob:'08/09/2002'},
    ]);

    render(<MemoryRouter><Classroom /></MemoryRouter>);
    await screen.findByText(/Alice Smith/);

    await user.click(screen.getByRole('button', { name: /Add a Student/i }));

    expect(screen.queryByText(/Alice Smith/)).not.toBeInTheDocument();
});

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

