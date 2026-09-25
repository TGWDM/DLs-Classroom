import styles from '../css/Classroom.module.css';
import backArrow from '../assets/Back Arrow.svg';
import stdDefIcon from '../assets/Student default Icon.svg';
import teachDesk from '../assets/Teacher Desk.svg';
import { Link } from 'react-router'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { studentService } from '../services/studentService';
import type { Student } from '../types/Student';



function Classroom() {
	const [students, setStudents] = useState<Student[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const displayStudents = async () => {
		try {
			setLoading(true);
			const data = await studentService.getAll();
			setStudents(data);
			setError(null);
		} catch (err) {
			setError('Could not load students');
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		displayStudents();
	}, []);

	const renderStudents = () => {
		if (loading) return <div>Loading students…</div>;
		if (error) return <div>{error}</div>;
		if (students.length === 0) return <div>No Student added to class yet</div>;
		return students.map((s) => (
			<div key={s.id}>{s.fName} {s.lName}</div>
		));
	}



	return (
		<div className={styles.classroom}>
			<div className={styles.classroomHeader}>
				<Link to='/' className={styles.backArrowLink}>
					<img src={backArrow} className={styles.backArrowIcon} alt="" />
				</Link>
				<div className={styles.classroomTitle}>DL’s Classroom</div>
				<Button label='Add a Student' bg="red" to='/' className={styles.addStudentBtn} />
			</div>

			<div className='studentGrid'>
				{renderStudents()}
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
