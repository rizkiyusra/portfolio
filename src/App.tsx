import { useEffect, useState, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from "framer-motion";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Spotlight from "./components/ui/Spotlight";
import Preloader from "./components/ui/Preloader";
import { Reveal } from './components/ui/Reveal';
import ThemeProvider from './context/ThemeContext';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, []);

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath !== '/') {
            window.history.replaceState(null, '', '/');
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        if (isLoading) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            lenis.destroy();
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 relative">

                <AnimatePresence mode='wait'>
                    {isLoading && (
                        <Preloader finishLoading={() => setIsLoading(false)} />
                    )}
                </AnimatePresence>

                <Spotlight />

                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-white dark:bg-[#09090b] transition-colors duration-300" />
                    <div className="absolute inset-0 bg-grid-slate-200/[0.5] dark:bg-grid-white/[0.02] bg-position-[bottom_1px_center]" />
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#09090b]/80 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: !isLoading ? 1 : 0,
                        y: !isLoading ? 0 : 50
                    }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative z-10"
                >
                    <Navbar />
                    <main className="flex flex-col">
                        <section className="relative">
                            <Hero />
                        </section>
                        <section id="about" className="scroll-mt-24">
                            <Reveal width="100%">
                                <About />
                            </Reveal>
                        </section>

                        {/* PROJECTS */}
                        <section id="projects" className="scroll-mt-24">
                            <Reveal width="100%">
                                <Projects />
                            </Reveal>
                        </section>

                        {/* CONTACT */}
                        <section id="contact" className="scroll-mt-24">
                            <Reveal width="100%">
                                <Contact />
                            </Reveal>
                        </section>
                    </main>
                    <Footer />
                </motion.div>

            </div>
        </ThemeProvider>
    );
}

export default App;