import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface PreloaderProps {
    finishLoading: () => void;
}

export default function Preloader({ finishLoading }: PreloaderProps) {
    const [index, setIndex] = useState(0);
    const Year = new Date().getFullYear();
    const words = [
        "Rizki Maulana Yusra",
        `Portfolio ${Year}`
    ];

    useEffect(() => {
        if (index === words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [index, words.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            finishLoading();
        }, 2000);

        return () => clearTimeout(timer);
    }, [finishLoading]);

    const containerVariants: Variants = {
        initial: { clipPath: "inset(0% 0 0% 0)" },
        exit: {
            clipPath: "inset(0% 0 100% 0)",
            transition: { duration: 0.9,
                ease: [0.76, 0, 0.24, 1] as const,
            }
        }
    };

    const textVariants: Variants = {
        initial: {
            opacity: 0,
            y: 20
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-9999 flex items-center justify-center bg-background w-full h-full cursor-wait"
        >
            <motion.p
                key={index}
                variants={textVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter flex items-center gap-3"
            >
                {index === 0 && (
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-pulse" />
                )}

                {words[index]}
            </motion.p>
        </motion.div>
    );
}