import styles from '../../styles/WeatherWidget.module.scss';
import { MdWbCloudy } from 'react-icons/md';

export default function WeatherWidget() {
    return (
        <div className={styles.container}>
                  <div>
                    <div className={styles.location}>Saint-Avertin</div>
                    <div className={styles.temperature}>25°</div>
                </div>
            <div className={styles.weather}>
                <MdWbCloudy className={styles.icon}/>
                <div className={styles.condition}>Nuageux</div>
                <div className={styles.temperatures}>Min. 9° Max 15°</div>
            </div>
        </div>
    )
}