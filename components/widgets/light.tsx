import HomeWidget from './home'
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa'

type LightWidgetProps = {
    lightName: string,
    statusFn: (callback?: (result: string) => void) => void,
    onFn: (callback?: (result: string) => void) => void,
    offFn: (callback?: (result: string) => void) => void,
};

export default function LightWidget({ lightName, statusFn, onFn, offFn }: LightWidgetProps) {
    return (
        <HomeWidget
            deviceName={lightName}
            statusFn={statusFn}
            onFn={onFn}
            offFn={offFn}
            onIcon={FaRegLightbulb}
            offIcon={FaLightbulb}
            onColor={"#f0bb2b"}
        />
    );
}