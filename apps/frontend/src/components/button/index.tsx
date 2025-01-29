import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    buttonType: 'link' | 'button';
    link?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    buttonType,
    link,
    ...props
}) => {
    switch (buttonType) {
        case 'button':
            return (
                <button
                    className={clsx(
                        'border-none bg-transparent outline-none',
                        variant === 'primary' && 'button-primary',
                        variant === 'secondary' && 'button-primary',
                    )}
                    {...props}
                >
                    {props.value}
                </button>
            );
        case 'link':
            return (
                <Link
                    className={clsx(
                        'border-none bg-transparent outline-none',
                        variant === 'primary' && 'button-primary',
                        variant === 'secondary' && 'button-primary',
                    )}
                    href={link as string}
                >
                    {props.value}
                </Link>
            );
    }
};

export default Button;
