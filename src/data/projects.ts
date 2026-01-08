import goSmartApps1 from '../assets/images/goSmartApps/goSmartApps.png';
import goSmartApps2 from '../assets/images/goSmartApps/goSmartApps2.png';

import uasPweb1 from '../assets/images/uasPweb/uasPweb.png';
import uasPweb2 from '../assets/images/uasPweb/uasPweb2.png';
import uasPweb3 from '../assets/images/uasPweb/uasPweb3.png';
import uasPweb4 from '../assets/images/uasPweb/uasPweb4.png';

import quran1 from '../assets/images/quran/quran.png';
import quran2 from '../assets/images/quran/quran2.png';
import quran3 from '../assets/images/quran/quran3.jpg';
import quran4 from '../assets/images/quran/quran4.png';
import quran5 from '../assets/images/quran/quran5.png';
import quran6 from '../assets/images/quran/quran6.jpg';
import quran7 from '../assets/images/quran/quran7.png';

import mapanin1 from '../assets/images/mapanin/mapanin.png';
import mapanin2 from '../assets/images/mapanin/mapanin2.png';
import mapanin3 from '../assets/images/mapanin/mapanin3.png';
import mapanin4 from '../assets/images/mapanin/mapanin4.png';
import mapanin5 from '../assets/images/mapanin/mapanin5.png';
import mapanin6 from '../assets/images/mapanin/mapanin6.png';
import mapanin7 from '../assets/images/mapanin/mapanin7.png';
import mapanin8 from '../assets/images/mapanin/mapanin8.png';
import mapanin9 from '../assets/images/mapanin/mapanin9.png';
import mapanin10 from '../assets/images/mapanin/mapanin10.png';

export type Project = {
    id: number;
    title: string;
    category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';
    img: string[];
    description: string;
    tech: string[];
    githubUrl?: string;
    demoUrl?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "GoSmartApps - Collage Project",
        category: "Mobile",
        img: [
            goSmartApps1,
            goSmartApps2,
        ],
        description: "A project exploring mobile logic, integrating user authentication and a standard navigation drawer for functional usability.",
        tech: ["Java", "Android"],
        githubUrl: "https://github.com/rizkiyusra/GoSmartApps",
    },
    {
        id: 2,
        title: "RESTful API - College Backend Project",
        category: "Backend",
        img: [
            uasPweb1,
            uasPweb2,
            uasPweb3,
            uasPweb4,
        ],
        description: "Developed a secure backend from scratch using OOP principles to maintain students, subjects, and academic schedules.",
        tech: ["PHP", "MySQL", "RESTful API"],
        githubUrl: "https://github.com/rizkiyusra/UasPweb",
    },
    {
        id: 3,
        title: "Qur'an",
        category: "Frontend",
        img: [
            quran1,
            quran2,
            quran3,
            quran4,
            quran5,
            quran6,
            quran7,
        ],
        description: "A Qur'an web application featuring dynamic data fetching, synchronized audio playback, and a clean layout for comfortable daily reading.",
        tech: ["Vue", "Bootstrap", "API quran.com", "Axios", "Web Application"],
        githubUrl: "https://github.com/rizkiyusra/quran",
        demoUrl: "https://app-quran-online.netlify.app/"
    },
    {
        id: 6,
        title: "Mapanin - Financial Calculator",
        category: "Frontend",
        img: [
            mapanin1,
            mapanin2,
            mapanin3,
            mapanin4,
            mapanin5,
            mapanin6,
            mapanin7,
            mapanin8,
            mapanin9,
            mapanin10,
        ],
        description: "A smart investment planner helping users visualize compound interest growth, wrapped in a modern, responsive interface built with React and Tailwind.",
        tech: ["React", "Tailwind CSS", "CI/CD", "Web Application"],
        githubUrl: "https://github.com/rizkiyusra/mapanin",
        demoUrl: "https://rizkiyusra.github.io/mapanin/"
    }
];