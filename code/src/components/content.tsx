import styles from "../assets/css/content.module.css"
import Header from "./header";
import TitreSite from "./titre_website";

const Content = () => {
    return (
        <div className={styles.content_accueil}>
            <img className={styles.fond} src='/img/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg' />
            <TitreSite />
        </div>
    )
}

export default Content;