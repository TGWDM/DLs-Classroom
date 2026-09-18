import styles from '../css/Classroom.module.css';
import backArrow from '../assets/Back Arrow.svg';
import stdDefIcon from '../assets/Student default Icon.svg';
import teachDesk from '../assets/Teacher Desk.svg';
import {Link} from 'react-router'

function Classroom(){
  	return (
    		<div className={styles.classroom}>
      			<div className={styles.dlsClassroom}>DL’s Classroom</div>
      			<div className={styles.studentRow}>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
      			</div>
      			<div className={styles.studentRow2}>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.studentComponent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.name}>Name</div>
        				</div>
      			</div>
      			<div className={styles.teacher}>
        				<div className={styles.teacherIconParent}>
          					<img src={stdDefIcon} className={styles.studentIcon} alt="" />
          					<div className={styles.jade11}>Teacher</div>
        				</div>
      			</div>
      			<img src={teachDesk} className={styles.teacherDeskIcon} alt="" />
				<Link to='/'>
					<img src ={backArrow} className={styles.backArrowIcon} alt="" />
				</Link>
      			<div className={styles.beginSchoolDay}>
        				<div className={styles.addAStudentWrapper}>
          					<div className={styles.name}>Add a student</div>
        				</div>
      			</div>
    		</div>);
};

export default Classroom ;
