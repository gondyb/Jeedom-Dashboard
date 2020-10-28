import styles from '../styles/Layout.module.scss';
import ClockWidget from '../components/widgets/clock';
import CountdownWidget from '../components/widgets/countdown';
import LightWidget from './widgets/light';
import DoorWidget from './widgets/door';
import WeatherWidget from './widgets/weather';
import { triggerCommand } from '../utils/jeedomApi'

export default function Layout({ rows, columns }: { rows: Number, columns: Number }) {
    const date = new Date("02 Dec 2020 00:00:00");
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <CountdownWidget eventTitle="Anniversaire Benjamin" eventDate={date} />
                <ClockWidget />
                <LightWidget 
                    lightName={"Salon"} 
                    onFn={triggerCommand.bind(null, 3456)} 
                    offFn={triggerCommand.bind(null, 3457)}
                    statusFn={triggerCommand.bind(null, 3455)}
                />
                <LightWidget 
                    lightName={"Buffet"} 
                    onFn={triggerCommand.bind(null, 993)} 
                    offFn={triggerCommand.bind(null, 994)}
                    statusFn={triggerCommand.bind(null, 992)}
                />
                <DoorWidget
                    doorName={"Portail"}
                    openFn={triggerCommand.bind(null, 546)}
                    closeFn={triggerCommand.bind(null, 547)}
                    statusFn={triggerCommand.bind(null, 545)}
                />
                <WeatherWidget />
            </div>
        </div> 
        );
}