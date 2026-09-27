import { Link } from "react-router";
import BackArrow from "../assets/Back Arrow.svg";
import styles from "../css/Standings.module.css";

function Standings() {
    return (
        <div className={styles.standings}>
            <div className={styles.standingsHeader}>
                <div className={styles.standingsTitle}>DL's Classroom Standing</div>
                <Link to={"/"} className={styles.backArrow}>
                    <img src={BackArrow} />
                </Link>
            </div>
                <div className={styles.graph}>
                    <div className={styles.expTxt}>Children</div>
                    <div className={styles.childrenTxt}>Exp</div>
                </div>
        </div>
    );
};

export default Standings;