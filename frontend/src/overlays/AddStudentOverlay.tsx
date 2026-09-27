import styles from '../css/addStudentOverlay.module.css';
import StudentIcon from '../assets/Student default Icon.svg';
import CloseIcon from '../assets/Close.svg'
import ActBtn from '../components/ActBtn';
import { useState } from 'react';

interface AddAStudentOverlayProps {
	onClose: () => void;
}


export default function addAStudentOverlay({ onClose }: AddAStudentOverlayProps) {
	const [form, setForm] = useState({ firstName: '', lastName: '', dob: '' });
	const fNameRegex = /^(?=.{2,25}$)[A-Z]?[a-z]+$/;
	const lNameRegex = /^(?=.{2,25}$)[A-Z]?[a-z]+(-[A-Z]?[a-z]+)?$/;
	const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

	const handleFNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const cleaned = value.replace(/[^a-zA-Z]/g, '').slice(0, 25);
		setForm({ ...form, [name]: cleaned });
	};
	const handleLNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		//Allow only letters and hyphens
		let cleaned = value.replace(/[^a-zA-Z-]/g, '');

		// Collapse multiple hyphens into one
		cleaned = cleaned.replace(/-+/g, '-');

		// Remove leading hyphen
		cleaned = cleaned.replace(/^-/, '');
		// Cap at 25 maxLength is already set in attributes
		cleaned = cleaned.slice(0, 25);

		setForm({ ...form, [name]: cleaned });
	};
	const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = e.target;

		// Keep digits only
		let digits = e.target.value.replace(/\D/g, '');

		// 2. max length is 8 digits
		digits = digits.slice(0, 8);

		const day = digits.slice(0, 2);
		const month = digits.slice(2, 4);
		const year = digits.slice(4, 8);

		//  Validate each part & drop the last typed digit if out of range
		const dayNum = parseInt(day, 10);
		const monthNum = parseInt(month, 10);
		const yearNum = parseInt(year, 10);

		if (day.length === 2 && (dayNum < 1 || dayNum > 31)) return;     
		if (month.length === 2 && (monthNum < 1 || monthNum > 12)) return; 
		if (year.length === 4 && yearNum > new Date().getFullYear()) return; 

		// 4. format with slashes
		let formatted = day;
		if (month) formatted += '/' + month;
		if (year) formatted += '/' + year;

		setForm({ ...form, [name]: formatted });
	};

	const canSave =
		fNameRegex.test(form.firstName) &&
		lNameRegex.test(form.lastName) &&
		dobRegex.test(form.dob);

	return (
		<div className={styles.backdrop} data-testid="rootAddStudentOverlay" onClick={onClose}>
			<div className={styles.AddAStudentOverlay} onClick={(e) => e.stopPropagation()}>
				<div className={styles.overlayHeader}>
					<div className={styles.AddAStudent}>Add a student</div>
					<img
						src={CloseIcon}
						className={styles.closeIcon}
						alt="Close"
						onClick={onClose}
					/>
				</div>
				<div className={styles.inputArea}>
					<div className={styles.addStdIconWrapper}>
						<div className={styles.stdWrapperInner}>
							<div className={styles.name}>Add a Icon</div>
							<img src={StudentIcon} className={styles.stdIcon} alt="" />
						</div>
					</div>

					<div className={styles.inputFields} data-testid="inputFields">
						<input className={styles.inputField} placeholder='First Name' value={form.firstName} name='firstName' maxLength={25} onChange={handleFNameChange} ></input>
						<input className={styles.inputField} placeholder='Last Name' value={form.lastName} name='lastName' maxLength={25} onChange={handleLNameChange}></input>
						<input className={styles.inputField} placeholder='dd/MM/yyyy' value={form.dob} name='dob' onChange={handleDobChange}></input>
					</div>
				</div>
				<div className={styles.saveWrapper}>
					<ActBtn
						data-testid="saveStudentBtn"
						label='Save Student'
						onClick={() => {
							console.log("saved")
						}}
						className={styles.saveStudent}
						fontSize={20}
						disabled={!canSave}
					/>
				</div>
			</div >
		</div>
	)
};
