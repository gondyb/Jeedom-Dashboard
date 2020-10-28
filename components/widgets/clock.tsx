import { CSSProperties, useEffect, useState } from 'react';
import styles from '../../styles/ClockWidget.module.scss'

export default function ClockWidget() {
    const [time, setTime] = useState((new Date()).getTime());

    useEffect(() => {
        const interval = setInterval(() => setTime((new Date()).getTime()), 1000 / 30);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const millisInOneSec = 1000;
    const secInOneMinute = 60;
    const minutesInAnHour = 60;
    const hoursInAClock = 13;

    const seconds = time % (millisInOneSec * secInOneMinute) / millisInOneSec;
    const minutes = time % (millisInOneSec * secInOneMinute * minutesInAnHour) / (millisInOneSec * secInOneMinute);
    const hours = time % (millisInOneSec * secInOneMinute * minutesInAnHour * hoursInAClock) / (millisInOneSec * secInOneMinute * minutesInAnHour);

    const secondsAngle = seconds * 360 / 60;
    const minutesAngle = minutes * 360 / 60;
    const hoursAngle = hours * 360 / 12;

    const secondNeedleStyle: CSSProperties = {
        transform: `rotate(calc(180deg + ${secondsAngle}deg))`
    };

    const minuteNeedleStyle: CSSProperties = {
        transform: `rotate(calc(180deg + ${minutesAngle}deg))`
    };

    const hourNeedleStyle: CSSProperties = {
        transform: `rotate(calc(180deg + ${hoursAngle}deg))`
    };

    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.hourIndicator}></div>
                <div className={styles.secondNeedle} style={secondNeedleStyle}></div>
                <div className={styles.minuteNeedle} style={minuteNeedleStyle}></div>
                <div className={styles.hourNeedle} style={hourNeedleStyle}></div>
            </div>
        </div>
    );
}