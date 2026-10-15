import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AddAStudentOverlay from '../overlays/AddStudentOverlay';

vi.mock('../services/studentService', () => ({
    studentService: {
        create: vi.fn().mockRejectedValue(new Error('Server error')),
    },
}));

const onClose = vi.fn();

test('Check that title renders', () => {

    render(<AddAStudentOverlay onClose={onClose} />);
    // Check that something from your app is rendered
    const heading = screen.getByText(/Add a Student/i);
    expect(heading).toBeInTheDocument();
});

test('Modal closes when backdrop is pressed', async () => {
    const user = userEvent.setup();
    render(<AddAStudentOverlay onClose={onClose} />);
    const backdrop = screen.getByTestId('rootAddStudentOverlay');
    await user.click(backdrop);
    const heading = screen.getByText(/Add a Student/i);
    !expect(heading).toBeInTheDocument();
})

test('Modal closes when close button is pressed', async () => {
    const user = userEvent.setup();
    render(<AddAStudentOverlay onClose={onClose} />);
    const closeBtn = screen.getByAltText('Close');
    await user.click(closeBtn);
    const heading = screen.getByText(/Add a Student/i);
    !expect(heading).toBeInTheDocument();
})

test('All input fields have placecholders', () => {
    render(<AddAStudentOverlay onClose={onClose} />);
    const inputFields = Array.from(screen.getByTestId('inputFields').children);
    const hasNoPlaceholder = inputFields
        .some((input) => (input as HTMLInputElement).placeholder === '');
    expect(hasNoPlaceholder).toBe(false);
})

test('save button is only enabled once all validation have been met.', async () => {
    const user = userEvent.setup();
    render(<AddAStudentOverlay onClose={onClose} />);
    const fName = screen.getByPlaceholderText(/first name/i);
    const lName = screen.getByPlaceholderText(/last name/i);
    const dob = screen.getByPlaceholderText(/dd\/MM\/yyyy/i);
    const saveBtn = screen.getByRole('button', { name: /Save Student/i });

    // only FName wrong 
    await user.type(fName, '123');
    expect(fName).toHaveValue('');
    await user.type(lName, 'John');
    expect(lName).toHaveValue('John');
    await user.type(dob, '01/12/1994');
    expect(dob).toHaveValue('01/12/1994');
    expect(saveBtn).toBeDisabled();

    for (const input of [fName, lName, dob]) {
        await user.clear(input);
    }

    // only LName wrong 
    await user.type(fName, 'John');
    expect(fName).toHaveValue('John');
    await user.type(lName, '123');
    expect(lName).toHaveValue('');
    await user.type(dob, '01/12/1994');
    expect(dob).toHaveValue('01/12/1994');
    expect(saveBtn).toBeDisabled();

    for (const input of [fName, lName, dob]) {
        await user.clear(input);
    }

    // only dob wrong 
    await user.type(fName, 'John');
    expect(fName).toHaveValue('John');
    await user.type(lName, '123');
    expect(lName).toHaveValue('');
    await user.type(dob, 'A Date');
    expect(lName).toHaveValue('');
    expect(saveBtn).toBeDisabled();
    await user.clear(dob);
    await user.type(dob, '1994-12-01');
    // from 4 onwards should be cleared as its an invalid month amount
    expect(dob).toHaveValue('19/9');
    expect(saveBtn).toBeDisabled();

    for (const input of [fName, lName,]) {
        await user.clear(input);
    }

    // Stop name fields at 25 characters
    await user.type(fName, 'a'.repeat(30));
    expect(fName).toHaveValue('a'.repeat(25));
    await user.type(lName, 'a'.repeat(30));
    expect(lName).toHaveValue('a'.repeat(25));
    !expect(saveBtn).toBeDisabled();

    for (const input of [fName, lName,]) {
        await user.clear(input);
    }

    // Minimum length of 2
    await user.type(fName, 'a');
    expect(fName).toHaveValue('a');
    await user.type(lName, 'a');
    expect(lName).toHaveValue('a');
    expect(saveBtn).toBeDisabled();

    await user.type(fName, 'a');
    expect(fName).toHaveValue('aa');
    await user.type(lName, 'a');
    expect(lName).toHaveValue('aa');
    !expect(saveBtn).toBeDisabled();


    for (const input of [fName, lName, dob]) {
        await user.clear(input);
    }

    // Everything is correct
    await user.type(fName, 'a');
    await user.type(lName, 'a');
    await user.type(dob, '01/12/1994');
    !expect(saveBtn).toBeDisabled();
})

test('save button triggers POST to backend and creates a student record', async () => {
    const user = userEvent.setup();
    render(<AddAStudentOverlay onClose={onClose} />);

    // Mock fetch
    const mockFetch = vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));

    const saveBtn = screen.getByRole('button', { name: /Save Student/i });
    await fillForm(user);
    // Should be enabled 
    expect(saveBtn).toBeEnabled();
    await user.click(saveBtn);

    // Assert fetch was called
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Assert the URL and method
    const [url, options] = (mockFetch as any).mock.calls[0];
    expect(url).toContain('/api/Students');
    expect(options.method).toBe('POST');

    // Assert the body
    const body = JSON.parse(options.body);
    expect(body).toMatchObject({
        firstName: 'a',
        lastName: 'a',
        dob: '1994-12-01',   // depends on how you format it
    });

    // 3. Assert Outcome
    expect(onClose).toHaveBeenCalled();
})

test('shows error message on failed save and does not close', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<AddAStudentOverlay onClose={onClose} />);
    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /save student/i }));

    // Error appears
    expect(await screen.findByText(/failed to add/i)).toBeInTheDocument();

    // Modal stays open
    expect(onClose).not.toHaveBeenCalled();
});

// helper for filling forms 
async function fillForm(user: ReturnType<typeof userEvent.setup>) {
    await user.type(screen.getByPlaceholderText(/first name/i), 'a');
    await user.type(screen.getByPlaceholderText(/last name/i), 'a');
    await user.type(screen.getByPlaceholderText(/dd\/MM\/yyyy/i), '01/12/1994');
}