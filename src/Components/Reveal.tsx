"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "top" | "bottom";

interface RevealProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    className?: string;
    threshold?: number;
    duration?: number;
    distance?: number;
    repeat?: boolean;
    onClick?: () => void;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    direction = "bottom",
    delay = 0,
    className = "",
    threshold = 0.1,
    duration = 600,
    distance = 30,
    repeat = true,
    onClick,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else if (repeat) {
                    // Reset only if repeat is true
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay, threshold, repeat]);

    const getTransform = () => {
        switch (direction) {
            case "left":
                return isVisible ? 'translateX(0)' : `translateX(-${distance}px)`;
            case "right":
                return isVisible ? 'translateX(0)' : `translateX(${distance}px)`;
            case "top":
                return isVisible ? 'translateY(0)' : `translateY(-${distance}px)`;
            case "bottom":
            default:
                return isVisible ? 'translateY(0)' : `translateY(${distance}px)`;
        }
    };

    return (
        <div
            ref={elementRef}
            className={className}
            onClick={onClick}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), 
                           transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transitionDelay: `${delay}ms`,
                willChange: 'transform, opacity',
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;

// Staggered reveal for multiple children
interface StaggerRevealProps extends Omit<RevealProps, 'children'> {
    children: ReactNode;
    staggerDelay?: number;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
    children,
    direction = "bottom",
    delay = 0,
    className = "",
    threshold = 0.1,
    duration = 600,
    distance = 30,
    repeat = true,
    staggerDelay = 100,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else if (repeat) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentElement = containerRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay, threshold, repeat]);

    const getTransform = (dir: Direction) => {
        switch (dir) {
            case "left":
                return isVisible ? 'translateX(0)' : `translateX(-${distance}px)`;
            case "right":
                return isVisible ? 'translateX(0)' : `translateX(${distance}px)`;
            case "top":
                return isVisible ? 'translateY(0)' : `translateY(-${distance}px)`;
            case "bottom":
            default:
                return isVisible ? 'translateY(0)' : `translateY(${distance}px)`;
        }
    };

    const childrenArray = React.Children.toArray(children);

    return (
        <div ref={containerRef} className={className}>
            {childrenArray.map((child, index) => (
                <div
                    key={index}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: getTransform(direction),
                        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), 
                                   transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
                        transitionDelay: isVisible ? `${delay + (index * staggerDelay)}ms` : '0ms',
                        willChange: 'transform, opacity',
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

// Scale animation variant
export const ScaleReveal: React.FC<Omit<RevealProps, 'direction'>> = ({
    children,
    delay = 0,
    className = "",
    threshold = 0.1,
    duration = 600,
    repeat = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else if (repeat) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay, threshold, repeat]);

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), 
                           transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transitionDelay: `${delay}ms`,
                willChange: 'transform, opacity',
            }}
        >
            {children}
        </div>
    );
};

// Fade-only animation
export const FadeReveal: React.FC<Omit<RevealProps, 'direction' | 'distance'>> = ({
    children,
    delay = 0,
    className = "",
    threshold = 0.1,
    duration = 600,
    repeat = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else if (repeat) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay, threshold, repeat]);

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transitionDelay: `${delay}ms`,
                willChange: 'opacity',
            }}
        >
            {children}
        </div>
    );
};

// Usage examples:
export const RevealExamples = () => {
    return (
        <div>
            {/* Basic usage */}
            <Reveal direction="bottom">
                <h1>Reveal from bottom</h1>
            </Reveal>

            {/* With custom settings */}
            <Reveal
                direction="left"
                delay={200}
                duration={800}
                distance={50}
                repeat={true}
            >
                <p>Reveal from left with delay</p>
            </Reveal>

            {/* Staggered reveal */}
            <StaggerReveal
                direction="top"
                staggerDelay={150}
                repeat={true}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </StaggerReveal>

            {/* Scale reveal */}
            <ScaleReveal delay={300}>
                <div>Scale animation</div>
            </ScaleReveal>

            {/* Fade only */}
            <FadeReveal duration={1000}>
                <div>Fade animation</div>
            </FadeReveal>
        </div>
    );
};