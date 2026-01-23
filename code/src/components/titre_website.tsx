import styles from "../assets/css/titre_website.module.css"

const TitreSite = () => {
    return (
        <>
            <div className={styles.imgaccueil}>
                <img className={styles.fond} src='/img/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg' />
                <div className={styles.titre}>
                    <h1>JOYFEST</h1>
                    <h2>DU 17 AU 21 JUIN 2026</h2>
                </div>
            </div>
            </>
    )

}

export default TitreSite