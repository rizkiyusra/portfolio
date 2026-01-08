export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09090b] text-center transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-slate-600 dark:text-zinc-500 text-sm">
                    {new Date().getFullYear()} Developed by <span className="font-semibold text-slate-900 dark:text-zinc-300">Rizki Maulana Yusra</span>
                </p>

                <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-zinc-400">
                    <a href="https://www.instagram.com/rizkiyusra/" target="_blank" className="hover:text-blue-600 dark:hover:text-white transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/in/rizki-maulana-yusra/" target="_blank" className="hover:text-blue-600 dark:hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/rizkiyusra/" target="_blank" className="hover:text-blue-600 dark:hover:text-white transition-colors">GitHub</a>
                </div>

            </div>
        </footer>
    );
}