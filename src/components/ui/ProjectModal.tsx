import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import * as React from "react";

interface Project {
    id: number | string;
    title: string;
    img: string[];
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
}

const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9
    })
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? project.img.length - 1 : prev - 1));
    }, [project.img.length]);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setDirection(1);
        setCurrentIndex((prev) => (prev === project.img.length - 1 ? 0 : prev + 1));
    }, [project.img.length]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, nextImage, prevImage]);

    if (!isOpen) return null;

    const navBtnClass = "absolute z-[10000] p-3 rounded-full bg-white text-slate-900 cursor-pointer shadow-xl ring-1 ring-black/10 hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all duration-200";
    const closeBtnClass = "absolute top-6 right-6 z-[10000] p-2 rounded-full bg-white/10 cursor-pointer hover:bg-white/20 text-white/70 hover:text-white backdrop-blur-md transition-all";

    return createPortal(
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-md transition-colors duration-300"
            onClick={onClose}
        >
            <button onClick={onClose} aria-label="Close modal" className={closeBtnClass}>
                <X size={32} />
            </button>

            {project.img.length > 1 && (
                <button onClick={prevImage} className={`${navBtnClass} left-4 md:left-8`}>
                    <ChevronLeft size={32} strokeWidth={2.5} />
                </button>
            )}

            <div
                className="relative w-full h-full max-w-7xl flex items-center justify-center pointer-events-none p-4 md:p-10"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={project.img[currentIndex]}
                        alt={project.title}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute max-w-full max-h-[40vh] md:max-h-[85vh] object-contain shadow-2xl pointer-events-auto rounded-md bg-zinc-900/50"
                    />
                </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-10000">
                <p className="inline-block px-6 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md text-white font-medium text-lg tracking-wide shadow-lg border border-white/10">
                    {project.title} • <span className="opacity-70 text-base">({currentIndex + 1} / {project.img.length})</span>
                </p>
            </div>

            {project.img.length > 1 && (
                <button onClick={nextImage} className={`${navBtnClass} right-4 md:right-8`}>
                    <ChevronRight size={32} strokeWidth={2.5} />
                </button>
            )}
        </div>,
        document.body
    );
}