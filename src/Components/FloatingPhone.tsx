'use client';

import React from 'react';

interface FloatingPhoneProps {
    phoneNumber: string; // e.g. "+919876543210"
}

const FloatingPhone: React.FC<FloatingPhoneProps> = ({ phoneNumber }) => {
    return (
        <a
            href={`tel:${phoneNumber}`}
            aria-label="Call us"
            className="
        fixed bottom-[14px] left-[15px] z-50
        flex items-center justify-center
        w-[47px] h-[38px] p-[2px]
        rounded-full
        bg-[#194bed]
        text-white
        shadow-md
        hover:scale-105
        active:scale-95
        transition-transform
        lg:hidden
      "
        >
            {/* Phone Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25
             a2.25 2.25 0 002.25-2.25v-3.375
             a2.25 2.25 0 00-1.8-2.205l-4.5-.9
             a2.25 2.25 0 00-2.385 1.365l-.81 1.62
             a12.036 12.036 0 01-5.43-5.43l1.62-.81
             a2.25 2.25 0 001.365-2.385l-.9-4.5
             A2.25 2.25 0 006.75 2.25H3.375
             A2.25 2.25 0 002.25 4.5v2.25z"
                />
            </svg>
        </a>
    );
};

export default FloatingPhone;
