type dataPortfolioDto = {
  _id: string;
  aboutme: string;
  skills: { title: string; url: string }[];
  education: { title: string; url: string }[];
  certifications: { title: string; url: string }[];
  projects: {
    title: string;
    urlImg: string;
    gitUrl: string;
    description: string;
    tags: string[];
  }[];
  createdAt: Date;
  updatedAt: Date;
};

type dataElmentDto = {
  title: string;
  url: string;
};
