
import styles from '../assets/css/billeterie.module.css';

const Billeterie = () => {
  return (
    <div className={styles.billeterieContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>BILLETTERIE</h1>
        <p className={styles.subtitle}>BILLETS 1 JOUR - FORFAITS 2, 3 ET 4 JOURS</p>
      </div>

      <div className={styles.datesContainer}>
        <div className={styles.date}>MERCREDI 17 JUIN</div>
        <div className={styles.date}>JEUDI 18 JUIN</div>
        <div className={styles.date}>VENDREDI 19 JUIN</div>
        <div className={styles.date}>SAMEDI 20 JUIN</div>
        <div className={styles.date}>DIMANCHE 21 JUIN</div>
        <div className={styles.date}>FORFAIT 2/3/4 JOURS</div>
      </div>

      <div className={styles.ticketsContainer}>
        <div className={styles.ticket}>
          <h3 className={styles.ticketType}>REGULAR</h3>
          <p className={styles.ticketPrice}>89€</p>
          <button className={styles.reserveButton}>RESERVER</button>
        </div>

        <div className={styles.ticket}>
          <h3 className={styles.ticketTypeE}>EARLY BIRDS</h3>
          <p className={styles.ticketPrice}>129€</p>
          <button className={styles.reserveButton}>RESERVER</button>
        </div>

        <div className={styles.ticket}>
          <h3 className={styles.ticketType}>GARDEN</h3>
          <p className={styles.ticketPrice}>159€</p>
          <button className={styles.reserveButton}>RESERVER</button>
        </div>

        <div className={styles.ticket}>
          <h3 className={styles.ticketType}>REDUIT</h3>
          <p className={styles.ticketPrice}>75€</p>
          <button className={styles.reserveButton}>RESERVER</button>
        </div>
      </div>
    </div>
  );
};

export default Billeterie;
