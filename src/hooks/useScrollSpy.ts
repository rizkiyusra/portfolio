import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const firstSection = document.getElementById(sectionIds[0]?.replace('#', ''));

            if (firstSection) {
                if (scrollPosition < (firstSection.offsetTop - offset)) {
                    setActiveId('');
                    return;
                }
            }

            for (const id of sectionIds) {
                const element = document.getElementById(id.replace('#', ''));
                if (element) {
                    const top = element.offsetTop - offset;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeId;
};

export default useScrollSpy;