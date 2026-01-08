import { useState, useEffect } from 'react';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import useScrollSpy from '../../hooks/useScrollSpy';
import { navLinks } from '../../data/navigation';
import { scrollToSection, scrollToTop } from '../../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const sectionIds = navLinks.map((link) => link.href);
    const activeSection = useScrollSpy(sectionIds, 100);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileLinkClick = (id: string) => {
        scrollToSection(id);
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
                scrolled
                    ? 'bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-slate-200 dark:border-white/5 shadow-sm'
                    : 'bg-transparent border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <div
                        onClick={scrollToTop}
                        className="flex items-center gap-3 cursor-pointer select-none group"
                    >
                        <Code2
                            className="text-slate-900 dark:text-white transition-colors group-hover:scale-110 duration-300"
                            size={32}
                            strokeWidth={2.5}
                        />
                        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
                            Rizki Maulana Yusra
                        </span>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`
                                        relative group text-sm font-medium transition-colors duration-300
                                        ${isActive
                                        ? "text-blue-600 dark:text-blue-400 font-bold"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }
                                    `}
                                >
                                    {item.name}
                                    <span
                                        className={`
                                            absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600 dark:bg-blue-400
                                            origin-center transition-transform duration-300 ease-out                                            
                                            ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                                        `}
                                    />
                                </button>
                            );
                        })}

                        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

                        {/* DARK MODE TOGGLE */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200 active:scale-95"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* MOBILE CONTROLS */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-white/10 absolute w-full px-6 py-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-5">
                    {navLinks.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <button
                                key={item.name}
                                onClick={() => handleMobileLinkClick(item.href)}
                                className={`
                                    text-left text-base font-medium py-3 px-4 rounded-lg transition-all
                                    ${isActive
                                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                                }
                                `}
                            >
                                {item.name}
                            </button>
                        )
                    })}
                </div>
            )}
        </nav>
    );
}