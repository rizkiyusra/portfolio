import { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';
import * as React from "react";

interface ProjectProps {
    project: {
        id: number | string;
        title: string;
        category: string;
        img: string[];
        description: string;
        tech: string[];
        githubUrl?: string;
        demoUrl?: string;
    };
}

export default function ProjectCard({ project }: ProjectProps) {
    const isManyItems = project.tech.length > 3;
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!isHovering || project.img.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImgIndex((prev) => (prev === project.img.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovering, project.img.length]);

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev === 0 ? project.img.length - 1 : prev - 1));
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev === project.img.length - 1 ? 0 : prev + 1));
    };

    const navButtonStyle = "absolute top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-black/10 hover:bg-slate-50 hover:scale-110 active:scale-95 transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100";

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
                {/* --- HEADER GAMBAR --- */}
                <div
                    className="relative h-48 shrink-0 overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <AnimatePresence>
                        <motion.img
                            key={currentImgIndex}
                            src={project.img[currentImgIndex]}
                            alt={project.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 Abg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Kategori Tag */}
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white bg-zinc-800/90 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                            {project.category}
                        </span>
                    </div>

                    {/* Navigasi Carousel */}
                    {project.img.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className={`${navButtonStyle} left-3`}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={18} strokeWidth={2.5} />
                            </button>

                            <button
                                onClick={nextImage}
                                className={`${navButtonStyle} right-3`}
                                aria-label="Next image"
                            >
                                <ChevronRight size={18} strokeWidth={2.5} />
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {project.img.length > 1 && (
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                            {project.img.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImgIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-stone-500'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* --- DESKRIPSI & TECH STACK --- */}
                <div className="flex flex-col grow p-6">
                    <h3 className="text-xl font-bold mb-2 h-14 line-clamp-2 flex items-center text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-justify hyphens-auto text-slate-600 dark:text-slate-400 text-sm mb-4 h-20 line-clamp-4 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 w-full h-16 content-start">
                        {project.tech.map((tech) => (
                            <span key={tech} className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 whitespace-nowrap h-fit ${isManyItems ? 'flex-auto justify-center' : ''}`}>
                                <Code size={10} className="opacity-70 shrink-0" />
                                <span>{tech}</span>
                            </span>
                        ))}
                        {isManyItems && (
                            <>
                                <div className="flex-auto w-10 h-0 invisible"></div>
                                <div className="flex-auto w-10 h-0 invisible"></div>
                            </>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <Github size={18} />
                                <span>Source Code</span>
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto">
                                <span>Live Demo</span>
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={project}
                key={project.id + (isModalOpen ? '-open' : '-closed')}
            />
        </>
    );
}