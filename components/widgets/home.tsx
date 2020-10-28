import styles from '../../styles/HomeWidget.module.scss';
import { CSSProperties, useEffect, useState } from 'react';
import { IconType } from 'react-icons';

type HomeWidgetProps = { 
    deviceName: String, 
    statusFn: () => Promise<Response>, 
    onFn: () => Promise<Response>, 
    offFn: () => Promise<Response>,
    onIcon: IconType, 
    offIcon: IconType, 
    onColor: string 
}

export default function HomeWidget(
    { deviceName, statusFn, onFn, offFn, onIcon, offIcon, onColor }: HomeWidgetProps
    ) {
    const [status, setStatus] = useState(0);
    
    const checkStatus = () => {
        statusFn()
            .then(res => res.text())
            .then(stat => {
                setStatus(parseInt(stat))
            });
    };
    
    useEffect(() => {
        const interval = setInterval(() => checkStatus(), 2500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    let Icon;

    if (status == 0) {
        Icon = onIcon;
    } else {
        Icon = offIcon;
    }

    const onColorStyle: CSSProperties = {
        color: `${onColor}`
    };

    return (
        <div 
            className={`${styles.container} ${status > 0 ? styles.on : ''}`}
            onClick={() => {
                if (status == 0) {
                    onFn();
                } else {
                    offFn();
                }
        }}>
            <Icon className={styles.icon} style={status > 0 ? onColorStyle : ''}/>
            <h3 className={styles.heading}>{ deviceName }</h3>
        </div>
    );
}