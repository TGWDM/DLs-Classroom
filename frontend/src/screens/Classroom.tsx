import styles from '../css/Classroom.module.css';
import backArrow from '../assets/Back Arrow.svg';
import stdDefIcon from '../assets/Student default Icon.svg';
import teachDesk from '../assets/Teacher Desk.svg';
import { Link } from 'react-router'
import Button from '../components/Button';

function displayStudents() {
	
}

function Classroom() {
	return (
		<div className={styles.classroom}>
			<div className={styles.classroomHeader}>
				<Link to='/' className={styles.backArrowLink}>
					<img src={backArrow} className={styles.backArrowIcon} alt="" />
				</Link>
				<div className={styles.classroomTitle}>DL’s Classroom</div>
				<Button label='Add a Student' bg="red" to='/' className={styles.addStudentBtn}/>
				
			</div>

			<div className={styles.teacher}>
				<div className={styles.teacherIconParent}>
					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
					<div className={styles.jade11}>Teacher</div>
				</div>
			</div>
			<img src={teachDesk} className={styles.teacherDeskIcon} alt="" />

			<div className={styles.beginSchoolDay}>
				<div className={styles.addAStudentWrapper}>
					<div className={styles.name}>Add a student</div>
				</div>
			</div>
		</div>);
};

export default Classroom;
