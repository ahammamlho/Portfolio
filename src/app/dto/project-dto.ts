

type dataPortfolioDto = {
    aboutme: string;
    skills: { title: string; url: string }[];
    education: { title: string; url: string }[];
    certifications: { title: string; url: string }[];
    projects: {
        title: string;
        urlImg: string;
        urlGithub: string;
        description: string;
        tags: string[];
    }[];
    createdAt: Date;
    updatedAt: Date;
};
