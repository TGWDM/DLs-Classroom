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

	const canSave = form.firstName.trim() !== ''
		&& form.lastName.trim() !== ''
		&& form.dob.trim() !== '';

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

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
					<div className={styles.inputFields}>
						<input className={styles.inputField} placeholder='First Name' name='firstName' onChange={handleChange} ></input>
						<input className={styles.inputField} placeholder='Last Name' name='lastName' onChange={handleChange}></input>
						<input className={styles.inputField} placeholder='dd/MM/yyyy' name='dob' onChange={handleChange}></input>
					</div>
				</div>
				<div className={styles.saveWrapper}>
					<ActBtn
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
