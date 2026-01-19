import styles from '../assets/css/programmation.module.css';

const Programmation = () => {
    return (
        <div className={styles.programmationContainer}>
            <h1 className={styles.programmationTitle}>LA PROGRAMMATION 2026</h1>

            <div className={styles.event}>
                <p className={styles.date}>Mercredi 26 août 2026</p>
                <p className={styles.artists}>TYLER, THE CREATOR SOMBR * MIKI * RAVYN</p>
            </div>

            <div className={styles.event}>
                <p className={styles.date}>Jeudi 27 août 2026</p>
                <p className={styles.artists}>PROGRAMMATION À VENIR...</p>
            </div>

            <div className={styles.event}>
                <p className={styles.date}>Vendredi 28 août 2026</p>
                <p className={styles.artists}>
                    NICK CAVE & THE BAD SEEDS<br />
                    THE BLACK KEYS<br />
                    FRANZ FERDINAND<br />
                    BIFFY CLYRO<br />
                    KURT VILE & THE VIOLATORS...
                </p>
            </div>

            <div className={styles.event}>
                <p className={styles.date}>Samedi 29 août 2026</p>
                <p className={styles.artists}>
                    DEFTONES<br />
                    TURNSTILE<br />
                    AMYL & THE SNIFFERS<br />
                    LANDMRKS<br />
                    LAMBRINI GIRLS...
                </p>
            </div>

            <button className={styles.programButton}>Toute la programmation</button>
        </div>
    );
};

export default Programmation;

