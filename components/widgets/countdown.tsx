import styles from '../../styles/CountdownWidget.module.scss'

export default function CountdownWidget({ eventTitle, eventDate }: { eventTitle: String, eventDate: Date }) {
    const today = new Date();
    const daysUntilEvent = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>{ eventTitle }</h3>
            <h4 className={styles.count}>{ daysUntilEvent } jours</h4>
        </div>
    );
}