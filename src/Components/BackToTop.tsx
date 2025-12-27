'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
        fixed bottom-[14px] right-[15px] z-50
        flex items-center justify-center
        w-[47px] h-[38px]
        rounded-full
        bg-[#194bed]
        text-white
        shadow-md
        hover:scale-105
        active:scale-95
        transition
      "
        >
            <i className="fas fa-chevron-up text-[14px]" />
        </button>
    );
}
