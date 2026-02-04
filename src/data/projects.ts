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
            "/projects/goSmartApps/goSmartApps.png",
            "/projects/goSmartApps/goSmartApps2.png"
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
            "/projects/uasPweb/uasPweb.png",
            "/projects/uasPweb/uasPweb2.png",
            "/projects/uasPweb/uasPweb3.png",
            "/projects/uasPweb/uasPweb4.png"
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
            "/projects/quran/quran.png",
            "/projects/quran/quran2.png",
            "/projects/quran/quran3.jpg",
            "/projects/quran/quran4.png",
            "/projects/quran/quran5.png",
            "/projects/quran/quran6.jpg",
            "/projects/quran/quran7.png"
        ],
        description: "A Qur'an web application featuring dynamic data fetching, synchronized audio playback, and a clean layout for comfortable daily reading.",
        tech: ["JavaScript", "Vue", "Bootstrap", "API quran.com", "Axios", "Web Application"],
        githubUrl: "https://github.com/rizkiyusra/quran",
        demoUrl: "https://app-quran-online.netlify.app/"
    },
    {
        id: 4,
        title: "Mapanin - Financial Calculator",
        category: "Frontend",
        img: [
            "/projects/mapanin/mapanin.png",
            "/projects/mapanin/mapanin2.png",
            "/projects/mapanin/mapanin3.png",
            "/projects/mapanin/mapanin4.png",
            "/projects/mapanin/mapanin5.png",
            "/projects/mapanin/mapanin6.png",
            "/projects/mapanin/mapanin7.png",
            "/projects/mapanin/mapanin8.png",
            "/projects/mapanin/mapanin9.png",
            "/projects/mapanin/mapanin10.png"
        ],
        description: "A smart investment planner helping users visualize compound interest growth, wrapped in a modern, responsive interface built with React and Tailwind.",
        tech: ["JavaScript", "React", "Tailwind CSS", "CI/CD", "Web Application"],
        githubUrl: "https://github.com/rizkiyusra/mapanin",
        demoUrl: "https://rizkiyusra.github.io/mapanin/"
    },
    {
        id: 5,
        title: "WebGIS Road Map",
        category: "Fullstack",
        img: [
            "/projects/webGISRoadMap/webGISRoadMap.png",
            "/projects/webGISRoadMap/webGISRoadMap2.png",
            "/projects/webGISRoadMap/webGISRoadMap3.png",
            "/projects/webGISRoadMap/webGISRoadMap4.png",
            "/projects/webGISRoadMap/webGISRoadMap5.png",
            "/projects/webGISRoadMap/webGISRoadMap6.png"
        ],
        description: "NKDE spatial analysis to visualize road damage density and identify infrastructure hotspots for monitoring.",
        tech: ["PHP", "Laravel", "Bootstrap", "PostgreSQL", "OpenLayers", "Web Application"],
        githubUrl: "https://github.com/rizkiyusra/gis-road-map"
    }
];