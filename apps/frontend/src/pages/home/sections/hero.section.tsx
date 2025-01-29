import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-[600px] w-full">
            <Image src="/home_hero.png" alt="" fill />
        </section>
    );
};

export default Hero;
