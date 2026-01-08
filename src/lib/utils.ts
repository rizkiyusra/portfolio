export const scrollToSection = (id: string, offset: number = 80) => {
    const targetId = id.replace('#', '');

    const element = document.getElementById(targetId);
    if (!element) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};