import { GiGate } from 'react-icons/gi';
import HomeWidget from './home';

type DoorWidgetProps = {
    doorName: string,
    statusFn: () => (callback?: (result: string) => void) => void,
    openFn: () => (callback?: (result: string) => void) => void,
    closeFn: () => (callback?: (result: string) => void) => void
};

export default function DoorWidget({ doorName, statusFn, openFn, closeFn }: DoorWidgetProps) {

    return (
        <HomeWidget
            onColor={"#0bb516"}
            onIcon={GiGate}
            offIcon={GiGate}
            onFn={openFn}
            offFn={closeFn}
            deviceName={doorName}
            statusFn={statusFn}
        />
    );
}