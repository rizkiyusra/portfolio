import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const categories = ["All", "Frontend", "Backend", "Mobile"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects
        .filter(p => activeCategory === "All" || p.category === activeCategory)
        .sort((a, b) => Number(b.id) - Number(a.id));

    return (
        <div className="py-32 bg-slate-50 dark:bg-black/20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 tracking-tight">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight"
                    >
                        <span className="relative inline-block mr-3">
                            Featured
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        </span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-700 dark:from-blue-400 dark:to-purple-400">
                            Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Learning by building. These projects represent my genuine effort to apply new knowledge and solve practical problems.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12 flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative z-0 ${activeCategory === cat
                                ? 'text-white dark:text-slate-900'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                            }`}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full -z-10"
                                />
                            )}
                            <span className="relative z-10">
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="min-h-[400px] relative">
                    <AnimatePresence mode="wait">

                        {filteredProjects.length > 0 ? (
                            <motion.div
                                key="grid-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredProjects.map((project) => (
                                        <motion.div
                                            layout
                                            key={project.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                    )) as never}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty-state"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center text-center py-20"
                            >
                                <p className="text-slate-500 dark:text-slate-400 text-lg">
                                    There are no projects in this category yet.
                                </p>
                            </motion.div>
                        ) as never}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}