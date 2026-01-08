import { User, MapPin, ArrowDown } from 'lucide-react';
import { skills } from '../../data/skills';
import {motion} from "framer-motion";

export default function About() {
    const distinctLayout = [
        { title: "Languages", data: skills.languages, span: "col-span-1" },
        { title: "Databases", data: skills.databases, span: "col-span-1" },
        { title: "Frameworks", data: skills.frameworks, span: "col-span-1 sm:col-span-2" },
        { title: "Tools", data: skills.tools, span: "col-span-1" },
        { title: "Core Concepts", data: skills.core, span: "col-span-1" },
    ];

    return (
        <div className="py-32 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
            >

                {/* HEADER */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Beyond the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-700 dark:from-blue-400 dark:to-purple-400">Code</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* DESCRIPTION */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-fit">
                            <User size={16} />
                            <span className="text-sm font-semibold">About Me</span>
                        </div>

                        <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]">
                            Software <br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-purple-400">
                                Engineer
                            </span>
                        </h3>

                        <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            <p className="text-justify mb-6">
                                I don't just write code; I solve problems. Experienced in building web applications with a focus on
                                <strong className="text-slate-900 dark:text-white"> Performance</strong> and
                                <strong className="text-slate-900 dark:text-white"> User Experience</strong>.
                            </p>
                            <p>
                                Always curious about new technologies and finding ways to make code more efficient. I believe that good code is not just code that works, but code that is readable and maintainable.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                            <MapPin size={20} className="text-slate-400 dark:text-slate-600"/>
                            <span>Pekanbaru, Riau, Indonesia</span>
                        </div>
                    </div>

                    {/* TECH STACK SECTION */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/50 transition-colors duration-300">

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                Skills & Tools
                                <ArrowDown size={18} className="text-blue-600"/>
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {distinctLayout.map((category) => (
                                    <div
                                        key={category.title}
                                        className={`
                                            ${category.span}
                                            bg-slate-50 dark:bg-white/5 
                                            rounded-xl p-4 
                                            border border-slate-100 dark:border-white/5
                                            flex flex-col 
                                            h-full  
                                        `}
                                    >

                                        <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                            {category.title}
                                        </h5>

                                        <div className="flex flex-wrap gap-2">
                                            {category.data.map((skill, idx) => (
                                                <div
                                                    key={`${skill}-${idx}`}
                                                    className="
                                                       px-3 py-1.5
                                                       bg-white dark:bg-zinc-900
                                                       border border-slate-200 dark:border-white/10
                                                       rounded-md
                                                       text-[13px] font-medium text-slate-700 dark:text-slate-300
                                                       shadow-sm
                                                       hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400
                                                       transition-all cursor-default"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 pt-5 border-t border-slate-200 dark:border-white/5">
                                Currently exploring: <span className="text-slate-900 dark:text-white font-medium">Kotlin Android</span>
                            </p>

                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}