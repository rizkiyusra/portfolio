import { motion } from 'framer-motion';
import {ArrowRight, Github, Instagram, Linkedin} from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 dark:bg-white/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-zinc-300 mb-8 backdrop-blur-sm shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Hire
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1]">
                        Engineering with <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-700 dark:from-blue-400 dark:to-purple-400">
                            Elegance
                        </span>
                    </h1>

                    <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        I build web experiences that are robust under the hood and beautiful on the surface. Obsessed with clean code and performance
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('#projects')}
                            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
                        >
                            Explore Projects
                            <ArrowRight size={18} />
                        </button>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={20} />, href: "https:/www.instagram.com/rizkiyusra/" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rizki-maulana-yusra/" },
                                { icon: <Github size={20} />, href: "https://github.com/rizkiyusra/" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}