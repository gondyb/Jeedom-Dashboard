import { GiGate } from 'react-icons/gi';
import HomeWidget from './home';

type DoorWidgetProps = {
    doorName: string,
    statusFn: () => Promise<Response>,
    openFn: () => Promise<Response>,
    closeFn: () => Promise<Response>
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