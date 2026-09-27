import BackArrow from "../assets/Back Arrow.svg";
import styles from "../css/Settings.module.css";
import { Link } from "react-router";

export default function Settings() {
    return (
        <div className={styles.settings}>
            <div className="settingsHeader">
                <div className={styles.title}>Settings</div>
                <Link to="/" className={styles.backArrow}>
                    <img src={BackArrow} />
                </Link>
            </div>
            <p className={styles.fillerTxt}>There's nothing here right now</p>
        </div>
    );
};