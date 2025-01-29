import Button from '@components/button';
import Image from 'next/image';

import HeaderNavigation from '../../navigation/header-navigation';

const Header = () => {
    return (
        <header className="fixed z-10 flex h-24 w-full justify-between p-8">
            <HeaderNavigation />
            <div className="relative h-9 w-28">
                <Image src="/logo_white.png" alt="" fill />
            </div>
            <div className="flex gap-8">
                <Button
                    link="/sign-in"
                    buttonType="link"
                    variant="secondary"
                    value={'Login'}
                />
                <Button
                    link="/sign-up"
                    buttonType="link"
                    variant="primary"
                    value={'Sign up'}
                />
            </div>
        </header>
    );
};

export default Header;
