import styles from "../assets/css/content.module.css"
import Billeterie from "./billetterie";
import Programmation from "./Programmation";


import TitreSite from "./titre_website";

const Content = () => {
    return (
        <div className={styles.content_accueil}>
           
            <img className={styles.fond} src='/img/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg' />
            <TitreSite />
            <div>
             <Programmation />
            </div>
            <div>
                <Billeterie />
                </div>
        </div>
    )
}

export default Content;