import styles from '../css/addStudentOverlay.module.css';
import StudentIcon from '../assets/Student default Icon.svg';
import CloseIcon from '../assets/Close.svg'
import ActBtn from '../components/ActBtn';

interface AddAStudentOverlayProps {
	onClose: () => void;
}

export default function addAStudentOverlay({ onClose }: AddAStudentOverlayProps) {
	return (
		<div className={styles.backdrop} onClick={onClose}>
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
						<div className={styles.name}>Add a Icon</div>
						<img src={StudentIcon} className={styles.stdIcon} alt="" />
					</div>
					<div className={styles.inputFields}>
						<input className={styles.inputField} placeholder='First Name'></input>
						<input className={styles.inputField} placeholder='Last Name'></input>
						<input className={styles.inputField} placeholder='dd/MM/yyyy'></input>
					</div>
				</div>
				<div className={styles.saveWrapper}>
					<ActBtn
						label='Save Student'
						bg="#8B0000"
						onClick={onClose}
						className={styles.saveStudent}
						fontSize={20}
					/>
				</div>
			</div >
		</div>
	)
};
