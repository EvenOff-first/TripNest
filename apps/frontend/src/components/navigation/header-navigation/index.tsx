import Airplane from '@public/svg/airplane.svg';
import IonBed from '@public/svg/ion_bed.svg';
import Link from 'next/link';

const HeaderNavigation = () => {
    return (
        <nav className="flex gap-8">
            <Link href="/flight" className="flex gap-1">
                <Airplane />
                Find Flight
            </Link>
            <Link href="/stays" className="flex gap-1">
                <IonBed />
                Find Stays
            </Link>
        </nav>
    );
};

export default HeaderNavigation;
