import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface OnboardingHeaderProps {
    // No props needed for now
}

export default function OnboardingHeader({ }: OnboardingHeaderProps) {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const tl = gsap.timeline();
            tl.fromTo(headerRef.current.querySelector('h1'),
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
            ).fromTo(headerRef.current.querySelector('p'),
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.6'
            );
        }
    }, []);

    return (
        <div ref={headerRef} className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-[var(--font-sfBold)] tracking-tight mb-2">
                Your Journey Starts Here
            </h1>
            <p className="text-[var(--fg)] opacity-60 text-base">
                Welcome to Keep Up. Let's embark on this journey together and make your resolutions a reality.
            </p>
        </div>
    );
}
