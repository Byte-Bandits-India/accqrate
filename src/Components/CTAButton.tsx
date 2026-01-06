"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

interface CTAButtonProps {
    text: React.ReactNode;
    href?: string;
    widthClass?: string;
    onClick?: () => void;
}

export default function CTAButton({
    text,
    href,
    widthClass = "w-fit",
    onClick
}: CTAButtonProps) {
    const buttonClasses = `
        relative
        inline-flex
        items-center
        justify-center
        ${widthClass}
        min-h-[42px]
        bg-[#D63F10]
        rounded-[50px]
        px-6 pr-10
        whitespace-nowrap
        text-white
        text-fluid-small md:text-[14px]
        leading-tight
        transition-all duration-300
        hover:bg-[#d94f22]
        cursor-pointer
      `;

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={buttonClasses}
            >
                <span className="flex items-center gap-2">
                    {text}
                </span>
                <ArrowRight className="absolute right-4 w-4 h-4 -rotate-45" />
            </button>
        );
    }

    return (
        <Link
            href={href || "#"}
            className={buttonClasses}
        >
            <span className="flex items-center gap-2">
                {text}
            </span>

            <ArrowRight className="absolute right-4 w-4 h-4 -rotate-45" />
        </Link>
    );
}
